import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../src/assets/profile.png";

export default function Comments({ refs }) {
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const [comments, setComments] = useState([]);
    const [updateComments, setUpdateComments] = useState(true);

    //deployment url
    const apiUrl = "https://kokushibo-fan-website.onrender.com";
    //const apiUrl = "";

    useEffect(() => {
        axios
            .get(`${apiUrl}/register`)
            .then((response) => {
                const temp = response.data;
                //console.log(temp);

                let temp2 = [];
                for (let i = 0; i < temp.length; i++) {
                    //console.log(temp[i]);

                    temp2[i] = temp[temp.length - 1 - i];
                    //console.log(temp2 + " currently");
                }
                //console.log(temp2);
                setComments(temp2);
                //console.log(response);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, [updateComments == false]);

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        let result = await fetch(`${apiUrl}/register`, {
            method: "post",
            body: JSON.stringify({ name, text }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        result = await result.json();
        console.warn(result);

        if (result) {
            setName("");
            setText("");
            setUpdateComments((prev) => (prev = false));
        }
    };

    function getDate(date) {
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        let year = date.substring(0, 4);
        let month = date.substring(5, 7);
        let day = date.substring(8, 10);

        month = months[month - 1];
        return `${month} ${day}, ${year}`;
    }
    //console.log(comments);
    return (
        <>
            <section
                className="w-full col-span-12 lg:col-span-9 bg-koku-ptrans border-3 border-black p-5 grid grid-cols-1 gap-2"
                ref={refs.Comment}
            >
                <h2 className="text-xl font-comic">
                    {comments.length} Comments
                </h2>
                <hr className=" border-2 text-black" />
                <form action="" className="mb-6">
                    <div className="bg-koku-dark-ptrans border-3 p-5 text-white border-black grid grid-cols-1 gap-2">
                        <label htmlFor="name" className="text-l">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border-black border-3 bg-koku-ptrans p-1"
                        />

                        <label htmlFor="text" className="text-l">
                            What do you want to say?
                        </label>
                        <textarea
                            type="text"
                            placeholder="Enter comment..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="border-black border-3 bg-koku-ptrans h-40 p-1 mb-3"
                        ></textarea>

                        <button
                            type="submit"
                            onClick={handleOnSubmit}
                            className="border-black bg-koku-ptrans border-3 w-1/12 m-auto cursor-pointer"
                        >
                            Post
                        </button>
                    </div>
                </form>

                {comments.map((comment) => (
                    <div
                        className="bg-koku-dark-ptrans border-3 p-5 text-white border-black grid grid-cols-10 gap-6"
                        key={comment._id}
                    >
                        <img
                            src={Profile}
                            alt=""
                            className="w-20 col-span-2 sm:col-span-1"
                        />
                        <div className="col-span-6 sm:col-span-7 grid grid-cols-1 gap-2">
                            <h3 className="text-lg font-comic">
                                {comment.name}
                            </h3>
                            <p>{comment.text}</p>
                        </div>
                        <small className="col-span-2" id="comment">
                            Date Posted: {getDate(comment.date)}
                        </small>
                    </div>
                ))}
            </section>
        </>
    );
}
