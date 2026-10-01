import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Aside from "../components/Aside";
import Quote from "../components/Quote";
import Comments from "../components/Comments";
import { Outlet } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    const Appearance = useRef(null);
    const Gallery = useRef(null);
    const Personality = useRef(null);
    const Abilities = useRef(null);
    const Fighting = useRef(null);
    const Equipment = useRef(null);
    const Relatives = useRef(null);
    const Battles = useRef(null);
    const Trivia = useRef(null);
    const Techniques = useRef(null);
    const Quotes = useRef(null);

    const scrollToSection = (ref) => {
        //console.log("hey");

        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            <Header />
            <Quote />
            <main className="w-10/12 m-auto flex gap-6">
                <Main
                    refs={{
                        Appearance,
                        Personality,
                        Abilities,
                        Fighting,
                        Equipment,
                        Relatives,
                        Battles,
                        Trivia,
                        Gallery,
                        Techniques,
                        Quotes,
                    }}
                    scrollToSection={scrollToSection}
                />
                <Aside
                    refs={{
                        Appearance,
                        Personality,
                        Abilities,
                        Fighting,
                        Equipment,
                        Relatives,
                        Battles,
                        Trivia,
                        Gallery,
                        Techniques,
                        Quotes,
                    }}
                    scrollToSection={scrollToSection}
                />
            </main>
            <Comments />
            {/* <Outlet /> */}
        </>
    );
}

export default App;
