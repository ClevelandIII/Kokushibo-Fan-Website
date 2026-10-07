import { useEffect, useState } from "react";
import axios from "axios";

export default function Comments() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const [comments, setComments] = useState([]);
    const [updateComments, setUpdateComments] = useState(true);

    //deployment url
    //const apiUrl = "https://kokushibo-fan-website.onrender.com";
    const apiUrl = "";

    useEffect(() => {
        axios
            .get(`${apiUrl}/register`)
            .then((response) => {
                setComments(response.data);
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
            alert("Data saved successfully");
            setName("");
            setText("");
            setUpdateComments((prev) => (prev = false));
        }
    };

    return (
        <>
            <div className="w-10/12 m-auto flex gap-6 pt-6">
                <section className="bg-koku-ptrans border-3 border-black w-4/5 p-5 grid grid-cols-1 gap-2">
                    <h2 className="text-xl font-comic">
                        {comments.length} Comments
                    </h2>
                    <hr className=" border-2 text-black" />
                    <form action="">
                        <div className="bg-koku-dark-purple border-3 p-5 text-white border-black grid grid-cols-1 gap-2">
                            <label htmlFor="name">Username</label>
                            <input
                                type="text"
                                placeholder="Enter username..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className=""
                            />

                            <label htmlFor="text">
                                What do you want to say?
                            </label>
                            <textarea
                                type="text"
                                placeholder="Enter comment..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>

                            <button
                                type="submit"
                                onClick={handleOnSubmit}
                                className="border-black bg-koku-ptrans border-3 w-1/12 m-auto"
                            >
                                Post
                            </button>
                        </div>
                    </form>

                    {/* {comments.map((comment) => (
                        <div
                            className="bg-koku-dark-purple border-3 p-5 text-white border-black grid grid-cols-1 gap-2"
                            key={comment._id}
                        >
                            <h3 className="text-lg font-comic">
                                {comment.name}
                            </h3>
                            <p>{comment.text}</p>
                        </div>
                    ))} */}
                </section>
                <section className="w-1/5"></section>
            </div>
        </>
    );
}
