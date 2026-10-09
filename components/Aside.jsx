export default function Aside({ refs, scrollToSection }) {
    return (
        <aside className="hidden lg:block col-span-3 w-full border-black border-3 bg-koku-ptrans p-6 text-white grid grid-cols-1 gap-2 w-1/5 h-full sticky top-6">
            <h2 className="text-xl font-comic">Contents</h2>
            <hr className=" border-2 text-black" />
            <ol>
                <li className="p-1">
                    <a onClick={() => scrollToSection(refs.Appearance)}>
                        <span className="text-koku-yellow">1.</span> Appearance
                    </a>
                </li>
                <li className="p-1">
                    <a onClick={() => scrollToSection(refs.Gallery)}>
                        <span className="text-koku-yellow">2.</span> Gallery
                    </a>
                </li>
                <li className="p-1">
                    <a onClick={() => scrollToSection(refs.Personality)}>
                        <span className="text-koku-yellow">3.</span> Personality
                    </a>
                </li>
                <li className="p-1">
                    <a onClick={() => scrollToSection(refs.Fighting)}>
                        <span className="text-koku-yellow">4.</span> Fighting
                    </a>
                </li>
                <li className="p-1">
                    <a onClick={() => scrollToSection(refs.Techniques)}>
                        <span className="text-koku-yellow">5.</span> Techniques
                    </a>
                </li>
                <li className="p-1">
                    <a onClick={() => scrollToSection(refs.Equipment)}>
                        <span className="text-koku-yellow">6.</span> Equipment
                    </a>
                </li>
                <li className="p-1">
                    <a onClick={() => scrollToSection(refs.Relatives)}>
                        <span className="text-koku-yellow">7.</span> Relatives
                    </a>
                </li>
                <li className="p-1">
                    <a onClick={() => scrollToSection(refs.Battles)}>
                        <span className="text-koku-yellow">8.</span> Battles
                    </a>
                </li>
                <li className="p-1">
                    <a onClick={() => scrollToSection(refs.Trivia)}>
                        <span className="text-koku-yellow">9.</span> Trivia
                    </a>
                </li>
                <li className="p-1">
                    <a onClick={() => scrollToSection(refs.Quotes)}>
                        <span className="text-koku-yellow">10.</span> Quotes
                    </a>
                </li>
                <li className="p-1">
                    <a onClick={() => scrollToSection(refs.Comment)}>
                        <span className="text-koku-yellow">11.</span> Comments
                    </a>
                </li>
            </ol>
        </aside>
    );
}
