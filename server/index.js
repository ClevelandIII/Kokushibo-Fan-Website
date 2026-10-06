import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();

const connection = import.meta.env.VITE_MONGODB_URI;
//const connection = process.env.VITE_MONGODB_URI;

const port = import.meta.env.VITE_PORT;
//const port = process.env.VITE_PORT;

console.log(port != null ? "good!" : "bad");

// MongoDB connection
mongoose
    .connect(connection)
    .then(() => {
        console.log("Connected to Kokushibo database");
    })
    .catch((err) => {
        console.log("Error connecting to database", err);
    });

// Schema for users of the app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

//mongoose.model("name of the mongoose file", Schema that you want to use)
const User = mongoose.model("comments", UserSchema);

//Local Express setup
app.use(express.json());
app.use(
    cors({
        origin: `http://localhost:5173`, // This is the url you are hosting from. Make sure the port is correct
    }),
);

// //Build Express setup
// app.use(express.json());
// app.use(
//     cors({
//         origin: `https://clevelandiii.github.io/Kokushibo-Fan-Website/`, // This is the url you are hosting from. Make sure the port is correct
//     }),
// );

// Sample route to check if the backend is working
app.get("/", (req, resp) => {
    resp.send("App is working");
});

// API to register a user
app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();

        if (result) {
            delete result.password; // Ensure you're not sending sensitive info
            resp.status(201).send(result); // Send successful response
        } else {
            console.log("User already registered");
            resp.status(400).send("User already registered");
        }
    } catch (e) {
        resp.status(500).send({
            message: "Something went wrong",
            error: e.message,
        });
    }
});

//Get comments
app.get("/register", async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
