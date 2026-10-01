import { useState } from "react";

export default function Comments() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        let result = await fetch("http://localhost:5050/register", {
            method: "post",
            body: JSON.stringify({ name, email, comment }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        result = await result.json();
        console.warn(result);

        if (result) {
            alert("Data saved successfully");
            setEmail("");
            setName("");
            setComment("");
        }
    };

    return (
        <>
            <h1>This is React WebApp </h1>
            <form action="">
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit" onClick={handleOnSubmit}>
                    submit
                </button>
            </form>
        </>
    );
}
