import Bars from "../src/assets/bars.svg";

export default function Header({ refs, scrollToSection }) {
    function close(e) {
        //console.log("clicked!");
        
        let id = e.target.id;
        let hide = document.getElementById(`${id}_content`);
        let rotate = document.getElementById(id);
        let classNames = hide.className;
        let close = classNames.split(" ");

        if (close[close.length - 1] == "show") {
            close[close.length - 1] = "hide";
            rotate.style.transform = "rotate(180deg)";
        } else {
            close[close.length - 1] = "show";
            rotate.style.transform = "rotate(0deg)";
        }

        let newClass = "";
        for (let i = 0; i < close.length; i++) {
            if (i < close.length - 1) {
                newClass += close[i] + " ";
            } else {
                newClass += close[i];
            }
        }

        hide.className = newClass;
        console.log(hide.className);
    }

    return (
        <>
            <header className="hidden lg:block">
                <nav className=" bg-koku-purple text-white p-6 border-b-3 border-black mb-6 text-center">
                    <h1 className="font-comic text-white">
                        Kokushibo Fan Page
                    </h1>
                </nav>
            </header>
            <header className="sticky top-0 lg:hidden">
                <nav className="lg:hidden bg-koku-purple text-white p-6 border-b-3 border-black text-center grid grid-cols-12">
                    <h1 className="font-comic text-white col-span-11 sm:ml-20">
                        Kokushibo Fan Page
                    </h1>
                    <img
                        src={Bars}
                        alt=""
                        width="20px"
                        className="close col-span-1 m-auto"
                        onClick={close}
                        id="header"
                    />
                </nav>
                <div
                    id="header_content"
                    className="lg:hidden bg-koku-dark-red text-white p-6 border-b-3 border-black text-center hidden"
                >
                    <ol className="flex flex-wrap justify-between text-koku-yellow">
                        <li className="p-1">
                            <a onClick={() => scrollToSection(refs.Appearance)}>
                                Appearance
                            </a>
                        </li>
                        <li className="p-1">
                            <a onClick={() => scrollToSection(refs.Gallery)}>
                                Gallery
                            </a>
                        </li>
                        <li className="p-1">
                            <a
                                onClick={() =>
                                    scrollToSection(refs.Personality)
                                }
                            >
                                Personality
                            </a>
                        </li>
                        <li className="p-1">
                            <a onClick={() => scrollToSection(refs.Fighting)}>
                                Fighting
                            </a>
                        </li>
                        <li className="p-1">
                            <a onClick={() => scrollToSection(refs.Techniques)}>
                                Techniques
                            </a>
                        </li>
                        <li className="p-1">
                            <a onClick={() => scrollToSection(refs.Equipment)}>
                                Equipment
                            </a>
                        </li>
                        <li className="p-1">
                            <a onClick={() => scrollToSection(refs.Relatives)}>
                                Relatives
                            </a>
                        </li>
                        <li className="p-1">
                            <a onClick={() => scrollToSection(refs.Battles)}>
                                Battles
                            </a>
                        </li>
                        <li className="p-1">
                            <a onClick={() => scrollToSection(refs.Trivia)}>
                                Trivia
                            </a>
                        </li>
                        <li className="p-1">
                            <a onClick={() => scrollToSection(refs.Quotes)}>
                                Quotes
                            </a>
                        </li>
                        <li className="p-1">
                            <a onClick={() => scrollToSection(refs.Comment)}>
                                Comments
                            </a>
                        </li>
                    </ol>
                </div>
            </header>
        </>
    );
}
