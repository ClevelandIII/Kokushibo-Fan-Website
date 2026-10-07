import Tree from "./Tree";
import Comments from "../components/Comments";

//images
import Anime from "../src/assets/_Anime.webp";
import Manga from "../src/assets/_Manga.webp";
import Live from "../src/assets/_Live.webp";

export default function Main({ refs }) {
    function close(e) {
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

    function profile(e) {
        e.preventDefault();

        let image = document.getElementById("profile");
        let image_set = e.target.id;

        if (image_set == "anime") {
            image.src = Anime;
        }
        if (image_set == "manga") {
            image.src = Manga;
        }
        if (image_set == "stage") {
            image.src = Live;
        }
    }

    return (
        <>
            <main className="border-black border-3 bg-koku-ptrans m-auto p-5 text-white grid grid-cols-1 gap-10 w-4/5">
                {/* Image and Main Description Section */}
                <section className="grid grid-cols-2 gap-x-2 mt-5">
                    <div className="w-4/5 m-auto">
                        <div className="grid grid-cols-1">
                            <p className="bg-black text-white text-center text-lg font-comic">
                                Kokushibo
                            </p>
                            <div className="flex justify-evenly border-x-3 border-black bg-koku-dark-red text-koku-yellow">
                                <a id="anime" href="" onClick={profile}>
                                    Anime
                                </a>
                                <a id="manga" href="" onClick={profile}>
                                    Manga
                                </a>
                                <a id="stage" href="" onClick={profile}>
                                    Stage play
                                </a>
                            </div>
                        </div>
                        <img
                            src={Anime}
                            alt="Anime Kokushibo facing back"
                            className="border-3 border-black bg-koku-dark-purple"
                            width="100%"
                            id="profile"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-1 h-4/5">
                        <p className="text-sm">
                            Kokushibo (黒こく死し牟ぼう Kokushibō?) is a major
                            supporting antagonist of Demon Slayer: Kimetsu no
                            Yaiba. He is a demon affiliated with the Twelve
                            Kizuki, holding the highest position, Upper Rank One
                            (上じょう弦げんの壱いち Jōgen no Ichi?).
                        </p>
                        <p className="text-sm">
                            Nearly five centuries ago during the Sengoku Era,
                            Kokushibo was a human by the name of Michikatsu
                            Tsugikuni (継つぎ国くに 巌みち勝かつ Tsugikuni
                            Michikatsu?), a former Demon Slayer, and the older
                            twin brother of Yoriichi Tsugikuni, the strongest
                            Demon Slayer to ever live.
                        </p>
                        <p className="text-sm">
                            Kokushibo is also the ancestor of Muichiro Tokito
                            and Yuichiro Tokito, and is responsible for turning
                            Zenitsu Agatsuma's senior, Kaigaku, into a demon,
                            who then defected to the Twelve Kizuki as the new
                            Upper Rank Six.
                        </p>
                    </div>
                </section>
                {/* Table Section */}
                <section className="grid grid-cols-1 gap-y-2">
                    <table>
                        <thead className="text-center bg-black text-lg">
                            <tr>
                                <th colSpan={4}>Names</th>
                                <th colSpan={3}>Affiliation</th>
                            </tr>
                        </thead>
                        <tbody className="bg-koku-dark-purple" id="header-2">
                            <tr>
                                <td>Kanji</td>
                                <td>Rōmaji</td>
                                <td>Alias</td>
                                <td>Race</td>
                                <td>Affiliation</td>
                                <td>Occupation</td>
                                <td>Combat Style</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <p>黒死牟 (Demon)</p>
                                    <p>継国 巌勝 (Human)</p>
                                </td>
                                <td>Kokushibō</td>
                                <td>
                                    <p>Michikatsu Tsugikuni (Human Name)</p>
                                    <p>Secretary Kokushibo (Kimetsu Academy)</p>
                                </td>
                                <td>
                                    <p>Demon</p>
                                    <p>Human (Formerly)</p>
                                </td>
                                <td>
                                    <p>Demon Slayer Corps (Formerly)</p>
                                    <p>Twelve Kizuki</p>
                                </td>
                                <td>
                                    <p>Samurai (Formerly)</p>
                                    <p>Demon Slayer (Formerly)</p>
                                </td>
                                <td>Moon Breathing</td>
                            </tr>
                        </tfoot>
                    </table>

                    <table>
                        <thead
                            className="text-center bg-black text-lg"
                            id="header"
                        >
                            <tr>
                                <th colSpan={7}>Characteristics</th>
                            </tr>
                        </thead>
                        <tbody className="bg-koku-dark-purple" id="header-2">
                            <tr>
                                <td>Race</td>
                                <td>Gender</td>
                                <td>Age</td>
                                <td>Height</td>
                                <td>Weight</td>
                                <td>Hair Color</td>
                                <td>Eye Color</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <p>Demon</p>
                                    <p>Human (Formerly)</p>
                                </td>
                                <td>Male</td>
                                <td>
                                    <p>17-24 (Human)</p>
                                    <p>&lt; 480 (Chronologically)</p>
                                </td>
                                <td>190 cm (6'3")</td>
                                <td>93 kg (205 lb)</td>
                                <td>Black with Red Tips</td>
                                <td>
                                    <p>Maroon (Human)</p>
                                    <p>Gold with Red Sclera (Demon)</p>
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                    <table>
                        <thead
                            className="text-center bg-black text-lg"
                            id="header"
                        >
                            <tr>
                                <th colSpan={2}>Debuts</th>
                                <th colSpan={3}>Portrayal</th>
                            </tr>
                        </thead>
                        <tbody className="bg-koku-dark-purple" id="header-2">
                            <tr>
                                <td>Manga Debut</td>
                                <td>Anime Debut</td>
                                <td>Japanese VA</td>
                                <td>English VA</td>
                                <td>Stage Play</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <p>Chapter 98 (Partial Appearance)</p>
                                    <p>Chapter 99 (Full Appearance)</p>
                                </td>
                                <td>Episode 45</td>
                                <td>Ryōtarō Okiayu</td>
                                <td>Jonah Scott</td>
                                <td>Kazuki Kato</td>
                            </tr>
                        </tfoot>
                    </table>

                    <table>
                        <thead
                            className="text-center bg-black text-lg"
                            id="header"
                        >
                            <tr>
                                <th colSpan={2}>Personal Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-koku-dark-purple" id="header-2">
                            <tr>
                                <td>Status</td>
                                <td>Relatives</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Deceased</td>
                                <td>
                                    <p>Unnamed Father</p>
                                    <p>Akeno Tsugikuni (Mother)</p>
                                    <p>
                                        Yoriichi Tsugikuni (Younger Twin
                                        Brother)
                                    </p>
                                    <p>Unnamed Wife</p>
                                    <p>Two Unnamed Children</p>
                                    <p>Muichiro Tokito (Descendant)</p>
                                    <p>Yuichiro Tokito (Descendant)</p>
                                    <p>Uta (Sister-in-Law)</p>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
                {/* Appearance Section */}
                <section
                    className="grid grid-cols-1 gap-2"
                    ref={refs.Appearance}
                >
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Appearance</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Appearance"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-2 show"
                        id="Appearance_content"
                    >
                        <p className="text-sm">
                            Kokushibo is a tall man of muscular build and pale
                            skin complexion. He possesses long, spiky black hair
                            with red tips that he kept in a ponytail, along with
                            two shoulder-length, flowing, wavy bangs on each
                            side that reached to his collarbone. His most
                            notable features are the three sets of eyes on his
                            face with yellow irises and red flesh sclera that
                            have black, straight lines diverging from each iris.
                            His middle set of eyes have the kanji of "Upper Rank
                            (上じょう弦げん Jōgen?)" on engraved on his left
                            eye, and daiji for "One (壱いち Ichi?)" on his
                            right. His other sets of eyes feature black pupils
                            and a cracked pattern in the irises. His top set of
                            eyes replaced his eyebrows. Kokushibo also possesses
                            flame-like Demon Slayer Marks on the top left side
                            of his forehead that extended down to his left
                            temple, and the bottom right of his cheek that
                            extended down to his neck. His appearance was
                            described as profound and majestic by Muichiro
                            Tokito.
                        </p>
                        <p className="text-sm">
                            Kokushibo adorned a purple-and-black
                            hexagonal-patterned nagagi kimono and black
                            umanori-styled hakama pants tied with a white
                            uwa-obi. He also wore a pair of zōri with purple
                            straps, and white tabi socks. He carried a fleshy
                            katana at his waist that has eyes in the space
                            between the tsuka ito wrapping of the handle of his
                            sword. The tsuba and blade were shown to have eyes
                            and veins. The scabbard was also fleshy in
                            appearance.
                        </p>
                        <p className="text-sm">
                            As a human, Kokushibo's look was almost identical to
                            his demon form, except for the number of eyes, his
                            eminent eyebrows, and his less paler skin. His eyes
                            had maroon irises and normal, white sclera. As a
                            child, he was normally seen wearing a white kimono,
                            as opposed to the purple-and-black-patterned one
                            he's seen wearing as an adult. He also tied his hair
                            in a short ponytail, unlike Yoriichi, who wore his
                            loose.
                        </p>
                        <p className="text-sm">
                            Due to being identical twins, Kokushibo greatly
                            resembled his younger brother Yoriichi. However,
                            besides their clothing, the biggest way to
                            distinguish the twins was their hair texture;
                            Kokushibo has spikier and thicker hair in comparison
                            to his brother's thinner and curlier hair.
                        </p>
                        <p className="text-sm">
                            After being beheaded by Sanemi Shinazugawa and
                            Gyomei Himejima, Kokushibo evolved into a more
                            grotesque and monstrous form, with protruding fangs
                            and mandibles, large, uneven white horns on the
                            front and back of his head, pointed nails, and red
                            outgrowths on his face. His eyes were looking in
                            multiple directions, and his hair was shorter and
                            messier. He had several thin tubes poking out of his
                            body and pinkish-red tendrils on his back, along
                            with numerous black and red scorpion tail-like
                            appendages haphazardly sprouting all across his
                            entire body.
                        </p>
                    </div>
                </section>
                {/* Gallery Section */}
                <section ref={refs.Gallery}>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Gallery</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Gallery"
                            />
                        </div>
                        <hr className=" border-2 text-black mb-2" />
                    </div>
                    <div
                        className="grid grid-cols-3 gap-x-2 gap-y-5 show"
                        id="Gallery_content"
                    >
                        <div className="flex justify-center flex-wrap">
                            <img
                                src="./src/assets/human_koku.webp"
                                alt="Human child Kokushibo"
                                className="h-60 m-auto border-3 border-black"
                            />
                            <small className="m-auto mt-0">
                                Kokushibo's appearance as a human child.
                            </small>
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <img
                                src="./src/assets/human_adult_koku.webp"
                                alt="Human adult Kokushibo"
                                className="h-60 m-auto border-3 border-black"
                            />
                            <small className="m-auto">
                                Kokushibo's appearance with his Demon Slayer
                                Mark as an adult human.
                            </small>
                        </div>

                        <div className="flex justify-center flex-wrap">
                            <img
                                src="./src/assets/koku_anime_full.webp"
                                alt="Anime full body Kokushibo"
                                className="h-60 m-auto border-3 border-black"
                            />
                            <small className="flex justify-center flex-wrap">
                                Kokushibo's full appearance as a demon.
                            </small>
                        </div>

                        <div className="flex justify-center flex-wrap">
                            <img
                                src="./src/assets/koku_blades.webp"
                                alt="Kokushibo with several blades coming out of his body"
                                className="h-60 m-auto border-3 border-black"
                            />
                            <small className="flex justify-center flex-wrap">
                                Kokushibo's appearance with dozens of katanas
                                protruding from his body.
                            </small>
                        </div>

                        <div className="flex justify-center flex-wrap">
                            <img
                                src="./src/assets/koku_monster.webp"
                                alt="Kokushibo's monster form"
                                className="h-60 m-auto border-3 border-black"
                            />
                            <small className="flex justify-center flex-wrap">
                                Kokushibo's appearance after undergoing a
                                post-decapitation transformation.
                            </small>
                        </div>
                    </div>
                </section>
                {/* Personality Section */}
                <section
                    className="grid grid-cols-1 gap-2"
                    ref={refs.Personality}
                >
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Personality</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Personality"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-3 show"
                        id="Personality_content"
                    >
                        <div>
                            <div className="float-right m-3 w-60">
                                <img
                                    src="./src/assets/koku_sit.webp"
                                    width="200px"
                                    alt=""
                                    className="m-auto border-3 border-black"
                                />
                                <small className=" m-auto text-black">
                                    Kokushibo's stoic and reserved disposition.
                                </small>
                            </div>
                            <p>
                                Kokushibo is reserved, silent, and aloof,
                                maintaining an aura of unnerving tranquility and
                                mystery that complemented his position as Upper
                                Rank One. He rarely spoke; when he did, he
                                talked in a slow and emphatic manner that gave
                                more gravitas and authority to his words. He is
                                an adamant, punctual rule-follower and shows
                                deep respect to the hierarchy of the Twelve
                                Kizuki, as seen during the Upper Ranks Meeting.
                                Kokushibo is shown to be humble as well, and is
                                not hesitant to admit his failure or complain of
                                any difficulty. He demonstrates unwavering
                                loyalty towards Muzan Kibutsuji, carrying out
                                his actions solely to fulfill his objectives.
                                However, his outward displayed of reservation,
                                dignity, and humility hide a cold and
                                unforgiving side to his personality. When
                                reprimanding individuals, his words are harsh
                                and firm, bordering on cruel and disdainful, and
                                his threats were severe and demand absolute
                                obedience.
                            </p>
                        </div>
                        <p>
                            Kokushibo is shown to be genuinely delighted when
                            the opponents he faced challenged him, such as
                            helping dress Muichiro Tokito's amputated hand over
                            his talented swordsmanship, praising Gyomei Himejima
                            and Sanemi Shinazugawa for their unparalleled human
                            abilities, and sparing Akaza because he enjoyed the
                            challenge of battling him. It is also worth noting
                            that the only time the demon visibly smiled was when
                            he examined the Stone Hashira's impeccably strong
                            physique, in genuine awe at his strength and showing
                            excitement at the prospect of facing a warrior of
                            extremely high caliber. However, due to this
                            selective respect for those he considered worthy, he
                            also felt irritation after he realized Akaza had
                            died by suicide, and he pities Gyomei for his
                            impending death from unlocking his Demon Slayer
                            Marks.
                        </p>
                        <div>
                            <div className="float-left m-3 w-60">
                                <img
                                    src="./src/assets/koku_angry.webp"
                                    width="200px"
                                    alt=""
                                    className="m-auto border-3 border-black"
                                />
                                <small className="m-auto text-black">
                                    Kokushibo curses Akaza for his
                                    self-inflicted death.
                                </small>
                            </div>
                            <p>
                                Having abandoned his humanity in the pursuit of
                                strength, Kokushibo shows a scornful view on
                                humans and their values. Following Akaza's
                                self-inflicted defeat, he derided him as
                                "exceedingly weak" for abandoning his existence
                                as a demon to reconcile with his lost humanity
                                in death. He mocks Gyomei for expressing
                                indifference at the curse of the Demon Slayer
                                Mark, believing his rejection of his fate was a
                                foolish notion, and he later taunted him and
                                Sanemi when they ripped off his kimono in an
                                attempt to attack him, deriding their efforts as
                                "not even enough to kill an infant". He also
                                showed no tolerance for Genya Shinazugawa's
                                ability to gain the power of demons by consuming
                                them, calling the boy an "imitation demon" that
                                he could not let live. He shows something of
                                warmth towards his descendant, Muichiro,
                                commending his skills and resolve and being
                                moved to offer Muichiro a chance to become a
                                demon. When their battle comes to an end,
                                Kokushibo expresses regret at having struck down
                                his descendant. At the same time, he refers to
                                Muichiro and his abilities as the natural result
                                of his cells being passed down.
                            </p>
                        </div>
                        <div>
                            <div className="float-right w-60">
                                <img
                                    src="./src/assets/koku_talk.webp"
                                    width="200px"
                                    alt=""
                                    className="m-auto border-3 border-black"
                                />
                                <small className="m-auto text-black">
                                    Kokushibo reveals Gyomei's forthcoming death
                                    to persuade him into becoming a demon.
                                </small>
                            </div>

                            <p>
                                {" "}
                                Throughout his life, Kokushibo is shown to be a
                                man that greatly values the concept of legacy.
                                As a human, he told his brother that since there
                                were no skilled warriors comparable to them,
                                their Breathing Styles would disappear without
                                successors, before becoming irritated at
                                Yoriichi's optimistic indifference. When he
                                realized that those that had awakened their
                                Demon Slayer Mark died before reaching the age
                                of 25 and grew worried that he was without a
                                future, he accepted Muzan's offer to become a
                                demon to further perfect his techniques. Even as
                                a demon, this is shown when he is pleased that
                                his lineage lived on through Muichiro, and he
                                tells Gyomei that his body and techniques would
                                go to waste because of his mark in an attempt to
                                accept becoming a demon. Additionally, in his
                                clash against him, the demon's banter suggested
                                that he feared death; when Gyomei's marks
                                appear, Kokushibo preemptively bemoans the loss
                                of a talented fighter, and he urges him to
                                become a demon to continue honing his skills. He
                                seemed surprised when Gyomei vehemently rejected
                                his offer and called his mentality pathetic.
                            </p>
                        </div>
                        <div>
                            <div className="float-left m-3 w-60">
                                <img
                                    src="./src/assets/koku_rage.webp"
                                    width="200px"
                                    alt=""
                                    className="m-auto border-3 border-black"
                                />
                                <small className="m-auto text-black">
                                    Kokushibo growing immensely envious of
                                    Yoriichi.
                                </small>
                            </div>

                            <p>
                                {" "}
                                He possessed a complex relationship with his
                                human past. It is revealed that, as a human,
                                Kokushibo, then Michikatsu, pitied Yoriichi
                                during the period of time when he was mute,
                                viewing him as a meek and callow boy dependent
                                on his mother. He gifted him a flute to use when
                                he needed his brother, and smiled at him despite
                                being bruised from his father's beatings.
                                However, he later harbored an immense sense of
                                envy towards his younger twin brother for his
                                natural talent and incredible abilities. These
                                feelings of jealousy and contempt only became
                                stronger upon seeing his brother become a
                                peerless warrior of unmatched caliber among even
                                the Demon Slayer Corps, with none of the Hashira
                                coming close to his level of strength.
                                <br />
                                <br />
                                This fostered a drive to become as strong or
                                surpass his brother, a sentiment so strong that
                                he abandoned his family to pursue becoming a
                                Demon Slayer, and later, into a demon. His envy
                                peaked when he discovers that Yoriichi is still
                                alive and in old age, completely surpassing the
                                curse of the Demon Slayer Marks that killed
                                anyone that awakened them before they turned 25.
                                Even centuries later, Yoriichi's immunity to the
                                curse haunted Kokushibo, and the usually
                                phlegmatic demon would become rattled when
                                Gyomei inadvertently reminded him of Yoriichi by
                                accusing him of lying about the curse having no
                                exceptions, which prompted him to attack.
                            </p>
                        </div>
                        <div>
                            <div className="float-right w-60">
                                <img
                                    src="./src/assets/koku_cry.webp"
                                    width="200px"
                                    alt=""
                                    className="m-auto border-3 border-black"
                                />
                                <small className="m-auto text-black">
                                    Kokushibo breaking down at the realization
                                    of his brother's love for him.
                                </small>
                            </div>

                            <p>
                                {" "}
                                However, despite this immense jealousy, spite,
                                and outright hatred he harbors for Yoriichi, he
                                still deeply cared for his brother, as seen when
                                he was touched by Yoriichi treasuring the
                                handmade flute he had made for him as a child;
                                Kokushibo shedded tears over his brother's
                                death, and went as far as keeping the flute
                                itself for the following centuries as a memento.
                                <br />
                                <br />
                                Kokushibo's fear of defeat stemmed from his
                                inferiority complex and desire for strength.
                                This fear caused him to become increasingly
                                aggressive and desperate in battle, relying on
                                his demon powers, and even killing and
                                dismembering Muichiro despite his earlier to
                                desire to turn him into a demon. However, as he
                                faced off against the Hashira, Kokushibo
                                realized the heavy cost of his pursuit of
                                strength. Becoming a grotesque monster, far from
                                his idealized vision of becoming the strongest
                                samurai, highlighted how much his ambitions and
                                resentment have twisted him.
                                <br />
                                <br />
                                In his final moments, he was filled with sorrow
                                and rage, lamenting his life choices upon seeing
                                he hasn't achieved his goals and questioning if
                                the path he chose was truly the right one. He
                                realized that his desire for a legacy had been
                                for naught and he had ended up accomplishing
                                nothing in his centuries of existence. As he
                                disintegrated, Kokushibo highlights that he just
                                wanted to become as strong and honoured like
                                Yoriichi, showing that who he despised the most
                                was also someone he looked to as an idealized
                                paragon to shape his life by. In the end, he
                                angrily asked his deceased brother why he
                                couldn't leave anything behind, why he couldn't
                                become anyone, why were they different, and why
                                he was even born, expressing his frustration at
                                not achieving his desires.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Abilities Section */}
                <section
                    className="grid grid-cols-1 gap-2"
                    ref={refs.Abilities}
                >
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Abilities</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Abilities"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-2 show"
                        id="Abilities_content"
                    >
                        {/* Overall Abilities */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Overall Abilities
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Overall"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Overall_content"
                            >
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/koku_hand.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo casually slashes off a
                                            marked Muichiro's arm before he
                                            could react.
                                        </small>
                                    </div>

                                    <p>
                                        As the highest-ranking member of the
                                        Twelve Kizuki, Kokushibo is an
                                        extraordinarily powerful demon, second
                                        only to the Demon King Muzan Kibutsuji
                                        himself. He has battled countless Demon
                                        Slayers and amassed vast experience and
                                        knowledge over his nearly 500-year-long
                                        life. His abilities are refined to the
                                        highest level, as he is not only a
                                        master of Total Concentration Breathing,
                                        but also a marked individual who has
                                        gained access to the Transparent World,
                                        as well as the demon that possesses the
                                        highest concentration of Muzan's blood
                                        amongst the Upper Ranks. <br />
                                        <br />
                                        His overwhelming power is first
                                        displayed when he slashes off the hand
                                        of Upper Rank Three, Akaza, before he
                                        could even react, and it is later stated
                                        by Doma that Akaza would never be able
                                        to surpass the both of them despite
                                        having improved his skills for 113 years
                                        prior to their meeting. During his
                                        battle in the Infinity Castle, Kokushibo
                                        effortlessly overwhelms the Mist
                                        Hashira, Muichiro Tokito, a prodigious
                                        Demon Slayer who singlehandedly defeated
                                        Upper Rank Five and had awakened his
                                        Demon Slayer Mark mid-battle. Later in
                                        the clash, he easily slices off
                                        Muichiro's hand before he can react and
                                        is able to catch his sword mid-swing,
                                        before proceeding to stab him with it.
                                    </p>
                                </div>
                                <p>
                                    Genya Shinazugawa, who played a major role
                                    in the defeat of Upper Rank Four, also stood
                                    no chance against him and was sliced to
                                    pieces without resistance. Although the Wind
                                    Hashira, Sanemi Shinazugawa, was able to
                                    fare better than the former two due to his
                                    greater experience and capabilities, he too
                                    is quickly overpowered when Kokushibo exerts
                                    himself slightly, making deep cuts all over
                                    the Hashira's body. Even when Gyomei
                                    Himejima arrived and momentarily stalled the
                                    battle with his own tremendous power and
                                    potent weaponry, Kokushibo was able to force
                                    the Stone Hashira to use his Demon Slayer
                                    Mark. Furthermore, Kokushibo could
                                    simultaneously hold back Gyomei and Sanemi,
                                    even when the latter also awakened his own
                                    Demon Slayer Mark.
                                </p>
                                <div>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/koku_moons.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className="m-auto text-black">
                                            Kokushibo simultaneously holds off
                                            three marked Hashira with a single
                                            technique.
                                        </small>
                                    </div>

                                    <p>
                                        Once he utilizes an enhanced version of
                                        his katana, it ultimately took the
                                        combined effort and full abilities of
                                        all four Demon Slayers, the three
                                        Hashira with their marks and Genya
                                        empowered with a portion of Kokushibo's
                                        own power, to even land a significant
                                        injury on him. Moreover, Gyomei and
                                        Muichiro also needed to see into the
                                        Transparent World. Nonetheless, the only
                                        way that the Demon Slayers could win was
                                        to immobilize him, which took the lives
                                        of Muichiro and Genya, the former
                                        sacrificing himself to leave Kokushibo
                                        in the open and the latter needing to
                                        utilize a new Blood Demon Art to
                                        restrain the Upper Rank. Even then, the
                                        Demon Slayers were still met with
                                        resistance due to Kokushibo's very high
                                        durability and needed to turn their
                                        blades bright red in order to behead
                                        him.
                                        <br />
                                        <br />
                                        Despite everything that they did,
                                        Kokushibo manages to regrow his head
                                        through sheer will, making him virtually
                                        invincible with the exception of the
                                        sun. In the end, along with a momentary
                                        lapse in his concentration due to seeing
                                        the extent of his pursuit of further
                                        strength transforming him into a
                                        grotesque monster, it required
                                        Muichiro's bright red blade burning
                                        Kokushibo's body from the inside,
                                        Genya's Blood Demon Art siphoning off
                                        enough of his blood to prevent him from
                                        healing and using a technique, and a
                                        joint effort by Sanemi and Gyomei using
                                        their bright red weapons to behead and
                                        destroy his body, to finally defeat the
                                        strongest member of the Twelve Kizuki.
                                    </p>
                                </div>
                                <p>
                                    All in all, Kokushibo's defeat required the
                                    combined efforts of three powerful marked
                                    Hashira, the usage of the Transparent World
                                    and Bright Red Blades, and a Demon Slayer
                                    capable of using a Blood Demon Art. Even
                                    then, the battle was narrowly won and cost
                                    the lives of Muichiro and Genya, a feat that
                                    truly exemplifies the might of Upper Rank
                                    One.
                                </p>
                                <p>
                                    <strong>Immense Willpower:</strong> Stemming
                                    solely from his goal to surpass his younger
                                    twin brother Yoriichi, Kokushibo possesses
                                    tremendous willpower and an indomitable
                                    spirit. Despite his decapitation at the
                                    hands of Gyomei and Sanemi, he forced his
                                    regeneration to evolve and regrew his own
                                    head, all because he didn't allow himself to
                                    die until he accomplished his goal.[26]
                                </p>
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/koku_suprise.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo correctly identifying
                                            Muichiro's Breathing Style just
                                            after witnessing one attack.
                                        </small>
                                    </div>

                                    <p>
                                        <strong>Tactical Intellect:</strong> As
                                        a talented swordsman who had existed for
                                        nearly five centuries, Kokushibo has
                                        experienced countless battle situations
                                        and threats, which he had learned to
                                        overcome. This was displayed during his
                                        battle with three marked Hashira and a
                                        demon-enhanced Demon Slayer, where he
                                        was able to adapt to their unique
                                        fighting styles and tactics almost
                                        instantly after witnessing it. After
                                        Muichiro unleashed his first attack
                                        against the Upper Rank, he was able to
                                        determine he was a user of Mist
                                        Breathing. This was further accentuated
                                        through Kokushibo being able to take on
                                        Sanemi and Gyomei simultaneously despite
                                        both of them being marked and being
                                        users of different Breathing Styles,
                                        showing that he was capable of
                                        understanding two vastly different
                                        opponents at once in the heat of battle.
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/* Demon Abilities */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Demon Abilities
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Demon"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Demon_content"
                            >
                                <p>
                                    <strong>Biological Absorption:</strong>
                                    Kokushibo possessed the ability to absorb
                                    human and demon bodies through physical
                                    contact. Although this trait had never been
                                    displayed, it was stated that Kokushibo
                                    would absorb the demons that challenged him
                                    and were defeated. He presumably used this
                                    method as a faster alternative of consuming
                                    humans as well.
                                </p>
                                <p>
                                    <strong>Flesh Manipulation:</strong> Like
                                    all demons, Kokushibo possesses the ability
                                    to manipulate his own flesh to a high
                                    degree. In terms of changing his body, could
                                    can alter his face to posses two more pairs
                                    of eyes while also elongating his forehead.
                                    Most notoriously, he used this ability to
                                    create an extremely durable and sharp
                                    katana, complete with a tsuba, a tsuka, and
                                    its own scabbard. Because of this, his
                                    katana could never be destroyed, as he can
                                    regenerate it like he would with normal
                                    wounds. He also displayed the ability to
                                    grow and protrude dozens of blades from his
                                    body, allowing him to perform a multitude of
                                    slashes from them without a swinging motion.
                                    From its activation alone, Kokushibo not
                                    only managed to blow away Sanemi and Gyomei,
                                    but he also sliced apart Muichiro, Genya,
                                    the trees from Genya's Blood Demon Art
                                    rooting him down, and numerous pillars in
                                    his surroundings. After being decapitated,
                                    Kokushibo greatly morphed his body to adopt
                                    a more beastly and grotesque appearance,
                                    with growing appendages, thin tubes, sharp
                                    mandibles, and horns.
                                </p>
                                <ul className="ml-10">
                                    <li className="list-disc">
                                        <div className="float-right m-3 w-60">
                                            <img
                                                src="./src/assets/koku_katana.webp"
                                                width="200px"
                                                alt=""
                                                className="m-auto border-3 border-black"
                                            />
                                            <small className=" m-auto text-black">
                                                Kokushibo's katana's altered
                                                appearance.
                                            </small>
                                        </div>
                                        <strong>Sword Manipulation:</strong> Due
                                        to his katana being made of his own
                                        living flesh, Kokushibo was able to
                                        easily regenerate parts of the blade
                                        should it be destroyed or damaged, which
                                        was shown numerous times when the blade
                                        returns to its original shape when
                                        Gyomei or Sanemi damaged it with their
                                        attacks. Furthermore, he could freely
                                        manipulate the shape of the blade, as
                                        shown when he grew three additional
                                        blades from the original blade to
                                        increase its reach and size, turning it
                                        into a weapon similar to a Shichishito
                                        or seven-branched sword.
                                    </li>
                                </ul>
                                <p>
                                    <strong>Immense Regeneration:</strong>{" "}
                                    Kokushibo possesses one of the most powerful
                                    regenerative abilities in existence, second
                                    only to the Demon King, Muzan Kibutsuji. His
                                    regeneration speed was even faster than
                                    Akaza and Doma, regrowing his ear and right
                                    shoulder almost instantaneously.
                                </p>
                                <ul className="grid grid-cols-1 gap-2 ml-10">
                                    <li className="list-disc">
                                        <strong>Decapitation Immunity:</strong>{" "}
                                        After being decapitated by two marked
                                        Hashira, Kokushibo, through sheer force
                                        of will, was able to regenerate his
                                        entire head and successfully conquer
                                        death from a decapitation via Nichirin
                                        Swords, a feat considered impossible for
                                        demons and only accomplished by two
                                        other demons: Akaza and the Demon King
                                        himself. However, while the speed at
                                        which he regrew his head was far faster
                                        than the former, his regeneration after
                                        being decapitated became unstable,
                                        causing him to take on a monstrous
                                        visage. In this state, he was only
                                        killed after being decapitated once more
                                        due to his inability to use any
                                        technique with his lack of blood or heal
                                        properly.
                                    </li>
                                    <li className="list-disc">
                                        <strong>
                                            Monstrous Transformation:{" "}
                                        </strong>
                                        After regrowing his head while battling
                                        Gyomei and Sanemi, Kokushibo undergoes a
                                        transformation that causes him to take
                                        on a more monstrous and grotesque form,
                                        with protruding fangs and mandibles,
                                        large white horns on the front and back
                                        of his head, pointed nails, red
                                        outgrowths on his face, several thin
                                        tubes poking out of his body, and
                                        numerous black and red scorpion
                                        tail-like appendages haphazardly
                                        sprouted all across his entire body.
                                        Kokushibo stated that any attacks thrown
                                        at him in this state would be
                                        meaningless, and that the sun would be
                                        the only way to defeat him.
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* Demon Slayer Abilities */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Demon Slayer Abilities
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Slayer"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Slayer_content"
                            >
                                <p>
                                    <strong>Demon Slayer Mark: </strong>
                                    Kokushibo awakened his Mark when he trained
                                    under Yoriichi. The Demon Slayer Mark
                                    drastically improves the abilities of an
                                    individual, making them much stronger and
                                    faster than what they could achieve
                                    normally, though at the cost of being cursed
                                    to die at the age of 25. However, by turning
                                    into a demon and gaining immortality,
                                    Kokushibo was no longer bounded by the
                                    curse.
                                </p>
                                <ul className="ml-10">
                                    <li className="list-disc">
                                        <div className="float-right m-3 w-60">
                                            <img
                                                src="./src/assets/koku_gyomei.webp"
                                                width="200px"
                                                alt=""
                                                className="m-auto border-3 border-black"
                                            />
                                            <small className=" m-auto text-black">
                                                Kokushibo discerns Gyomei's
                                                strength by analyzing his
                                                anatomy.
                                            </small>
                                        </div>
                                        <strong>Transparent World: </strong>
                                        Kokushibo has the ability to access the
                                        Transparent World, allowing him to see
                                        the muscles, blood flow, and joint
                                        movements of his opponents, as well as
                                        accurately predict and anticipate their
                                        movements and attacks. Through this
                                        ability, he was able to identify
                                        Muichiro as his descendant, immediately
                                        discern that Genya consumed demons to
                                        gain strength, as well as determine
                                        Muichiro, Sanemi, and Gyomei's strength,
                                        even being able to tell that the latter
                                        two's bodies and techniques are at their
                                        peak.
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* Physical Abilities */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Physical Abilities
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Physical"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Physical_content"
                            >
                                <div>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/koku_kirk.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            A marked Sanemi barely making a cut
                                            in Kokushibo's neck with his
                                            Nichirin sword.
                                        </small>
                                    </div>

                                    <p>
                                        {" "}
                                        <strong>Immense Durability: </strong>Due
                                        to having an extremely high
                                        concentration of Muzan's blood,
                                        Kokushibo possessed incredibly high
                                        durability. His neck was so resistant
                                        that a marked Sanemi barely succeeded in
                                        cutting him despite swinging his sword
                                        with all his might. Furthermore,
                                        Gyomei's massive spiked iron ball was
                                        similarly ineffective in damaging his
                                        neck, despite the Stone Hashira slamming
                                        his flail on Kokushibo's neck from
                                        above. Even when a marked Sanemi slammed
                                        his katana down onto Gyomei's spiked
                                        iron ball, the Demon Slayers only
                                        successfully sliced off Kokushibo's head
                                        when both of their weapons turned bright
                                        red.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/koku_arm.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo slicing off Genya's arm so
                                            fast he appears not to move.
                                        </small>
                                    </div>

                                    <p>
                                        {" "}
                                        <strong>
                                            Immense Speed & Reflexes:{" "}
                                        </strong>
                                        Kokushibo possesses immense levels of
                                        speed far surpassing that of the other
                                        Upper Ranks, as first shown when he
                                        slashes off Akaza's arm before he, or
                                        any of the other demons present,
                                        realized. Later on, when he departs from
                                        the Upper Rank Meeting following his
                                        reprimanding of Akaza, Kokushibo
                                        appeared as if he wisped out of view. He
                                        displays his phenomenal speed on
                                        multiple occasions while fighting.
                                        Firstly, he is able to effortlessly
                                        outpace Muichiro's Mist Breathing form,
                                        with Muichiro even remarking that
                                        Kokushibo's speed was phenomenal
                                        compared to his own, despite his
                                        abilities being amplified by his Demon
                                        Slayer Mark. When Genya fired his
                                        shotgun at the Upper Rank from a
                                        distance, Kokushibo is able to suddenly
                                        appear behind him before the pellets
                                        could reach where he initially was,
                                        before slicing his arm off the moment he
                                        arrived. He then draws his blade and
                                        slashes off his other arm and his torso
                                        so quickly, his hand didn't even appear
                                        to move.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/koku_own.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo simultaneously out-speeds
                                            a marked Gyomei and Sanemi from a
                                            distance.
                                        </small>
                                    </div>

                                    <p>
                                        {" "}
                                        Kokushibo could easily keep up with the
                                        Wind Hashira's blistering speed and
                                        forms, despite Sanemi exerting himself
                                        to the limit in order to stay alive. He
                                        evaded a surprise attempt to stab him
                                        from below the chin by tilting his head
                                        back, and later on, when Sanemi used his
                                        brother's shotgun to shoot at the Upper
                                        Rank, Kokushibo is quick enough to block
                                        the pellets even when it is fired
                                        point-blank. After feeling the need to
                                        try harder, Kokushibo subdues the Wind
                                        Hashira with a single technique that he
                                        couldn't evade in time, delivering
                                        numerous cuts and slashes all across his
                                        body. Even against Gyomei Himejima, the
                                        strongest Hashira of the Taisho era,
                                        Kokushibo is still more than capable of
                                        keeping up with his highly unorthodox
                                        fighting style. Even after both Hashira
                                        became marked, an enraged Kokushibo
                                        could unleash attacks that even they
                                        couldn't fully react to and he handily
                                        outpaced them throughout their battle.
                                        His imperceptible speed posed such a
                                        threat to his opponents that Muichiro
                                        had to sacrifice a leg in order to stop
                                        the Upper Rank from moving so that Genya
                                        could fully immobilize him with his
                                        Blood Demon Art. After transforming,
                                        Kokushibo was able to move so fast, he
                                        appeared as a blur to a marked Gyomei
                                        and Sanemi when they attempt to finish
                                        him off.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/koku_foot.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo forces Sanemi and his
                                            sword onto the ground with his foot
                                            alone.
                                        </small>
                                    </div>

                                    <p>
                                        {" "}
                                        <strong>Immense Strength: </strong>As a
                                        former Demon Slayer who has mastered
                                        Total Concentration Breathing and had
                                        gained the Demon Slayer Marks prior to
                                        becoming a demon, Kokushibo possesses
                                        immense physical strength, superior to
                                        that of all the other Upper Ranks. He is
                                        able to crack the ground just by
                                        stomping on Sanemi's sword and is
                                        capable of wielding a gigantic sword
                                        much heavier and longer than a regular
                                        katana and swinging it incessantly at
                                        incomprehensible speeds without rest or
                                        much effort. After transforming,
                                        Kokushibo was able to slice off
                                        Muichiro's arm with his bare hands, akin
                                        to a blade.
                                        <br />
                                        <br />
                                        <strong>
                                            Unlimited Stamina & Endurance:{" "}
                                        </strong>
                                        Like all demons, Kokushibo possesses
                                        virtually limitless stamina and
                                        vitality, never tiring and always
                                        remaining in optimal physical and mental
                                        condition all the time, as well as being
                                        able to endure waves of onslaught as if
                                        it were nothing. Despite having his
                                        limbs and whole chunks of his body
                                        repeatedly torn off and destroyed, he
                                        continues to heal and fight the Demon
                                        Slayers with little trouble. In fact,
                                        his only instances of expressly
                                        experiencing any discomfort in his
                                        battle are from Muichiro's bright red
                                        katana and Gyomei's sunlight-soaked
                                        flail burning his body from the inside
                                        and his neck respectively.
                                    </p>
                                </div>
                            </div>
                        </section>
                        {/* Supernatural Abilities */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Supernatural Abilities
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Supernatural"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Supernatural_content"
                            >
                                <p>
                                    <strong>Extrasensory Perception: </strong>
                                    Kokushibo possesses honed sensory abilities
                                    that allow him to detect the presence of
                                    others outside his normal range of
                                    perception, as shown when he dodges Genya's
                                    gunshots and appears directly behind him
                                    despite Kokushibo looking in the opposite
                                    direction. Kokushibo also seemed to be able
                                    to keep track of the locations of his peers
                                    around the Infinity Castle, evident as he no
                                    longer felt Akaza's presence when he died.
                                </p>
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/koku_aura.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo's presence intimidates
                                            Akaza.
                                        </small>
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>Menacing Aura: </strong>
                                        Kokushibo possesses a menacing and
                                        overwhelming presence that startled even
                                        Akaza, an extremely vindictive and
                                        aggressive demon that hated Kokushibo,
                                        into silence and temporarily made
                                        Muichiro Tokito, a Hashira who has faced
                                        and defeated Upper Rank Five on his own,
                                        temporarily lose the will to fight,
                                        causing his body to tremble
                                        uncontrollably.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                {/* Fighting Style Section*/}
                <section className="grid grid-cols-1 gap-2" ref={refs.Fighting}>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">
                                Fighting Style
                            </h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Fighting"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-2 show"
                        id="Fighting_content"
                    >
                        {/* General Skills */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        General Skills
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="General"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="General_content"
                            >
                                <div>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/koku_pillar.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo cuts down several pillars
                                            in a single draw of his sword.
                                        </small>
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>Master Swordsman: </strong>MDue
                                        to training and refining his
                                        swordsmanship skills for almost 500
                                        years and getting a major boost to his
                                        physical capabilities as a demon,
                                        Kokushibo is one of the most powerful
                                        and skilled swordsmen to have ever
                                        lived. As a Demon Slayer in the Golden
                                        Age of Demon Slayers, his swordsmanship
                                        was already outstanding, as he learned
                                        many of his techniques from Yoriichi
                                        himself in order to form his own
                                        Breathing Style. According to himself,
                                        his forms were so refined and legendary
                                        that they have no hopes of being passed
                                        down for future generations.
                                    </p>
                                </div>
                                <p>
                                    Kokushibo's skill with his sword allows him
                                    to defeat Akaza, a prodigious hand-to-hand
                                    combatant and martial artist. After sensing
                                    Akaza's death, a single draw from
                                    Kokushibo's blade was powerful enough to
                                    slash through a multitude of pillars in his
                                    room. With his exceptional swordsmanship, he
                                    could singlehandedly take on three Hashiras
                                    – Sanemi, Muichiro, and Gyomei – when they
                                    were marked, as well as Genya after he had
                                    assimilated his blood to gain a small
                                    portion of his power and develop his own
                                    Blood Demon Art. Kokushibo's swordsmanship
                                    is further empowered with the development of
                                    his own Blood Demon Art, which greatly
                                    improved the lethality and power of his
                                    techniques, making every single one of his
                                    sword swings incredibly deadly.
                                </p>
                            </div>
                        </section>
                        {/* Breathing Style */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Breathing Style
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Breathing"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Breathing_content"
                            >
                                <p>
                                    <strong>
                                        Moon Breathing (月つきの呼こ吸きゅう
                                        Tsuki no kokyū?):{" "}
                                    </strong>
                                    Kokushibo is the first demon that utilized
                                    Breathing Styles. His Breathing Style, in
                                    particular, is one of the most dangerous and
                                    powerful ones displayed thus far. Enhanced
                                    with his Blood Demon Art, he can create many
                                    chaotic crescent-moon blades when slashing
                                    that vary in length and size in crescent
                                    shaped sword attacks. Kokushibo had
                                    continued to develop this Breathing Style
                                    and had created over a dozen techniques over
                                    the centuries he had lived.
                                </p>
                            </div>
                        </section>
                        {/* Blood Demon Art */}
                        <section className="grid grid-cols-1 gap-2">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-comic">
                                        Blood Demon Art
                                    </h3>
                                    <img
                                        src="./src/assets/down.svg"
                                        alt=""
                                        width="20px"
                                        className="close"
                                        onClick={close}
                                        id="Slayer"
                                    />
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="Slayer_content"
                            >
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/koku_crescent.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                        <small className=" m-auto text-black">
                                            Kokushibo creating numerous crescent
                                            moon-shaped blades.
                                        </small>
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>Crescent Moon Blades: </strong>
                                        Complementing his Moon Breathing,
                                        Kokushibo's Blood Demon Art allows him
                                        to create and manipulate dozens of sharp
                                        blades shaped like traditional crescent
                                        moons from his flesh katana. Created
                                        from his blood, they can be either a
                                        bright yellow or a bright blue in color.
                                        These crescent moon blades are innately
                                        chaotic, constantly changing in size,
                                        direction, and speed, making Kokushibo's
                                        attacks extremely unpredictable and
                                        unreadable as they have no set pattern.
                                        This greatly enhances the power of his
                                        techniques, making every single one of
                                        his sword swings extremely deadly and
                                        dangerous. He also seems to be capable
                                        of using his Blood Demon Art as long as
                                        his katana is unsheathed, allowing him
                                        to create crescent moon blades even
                                        without swinging his sword or unleashing
                                        a technique. The volatile nature of his
                                        Blood Demon Art makes it extremely
                                        challenging for Demon Slayers to
                                        circumvent; Sanemi stated that if not
                                        for his years of experience in the field
                                        of demon hunting, he wouldn't have been
                                        able to defend himself from Kokushibo's
                                        attacks.
                                        <br />
                                        <br />
                                        Kokushibo's Blood Demon Art have a
                                        secondary ability that allows him to
                                        manipulate the shape and range of his
                                        sword slashes when unleashing his Moon
                                        Breathing techniques. His slashes
                                        usually create and are surrounded by a
                                        pink or orange crescent shape that
                                        carries his crescent moon blades.
                                        Kokushibo seems to be able to control
                                        said slashes to a certain extent,
                                        increasing their range and shape to
                                        attack his target in impossible ways
                                        under normal circumstances. When he
                                        distorted his katana into its
                                        branch-like appearance, his slashes turn
                                        into a light purple color. Kokushibo
                                        also displays the ability to
                                        exponentially increase the range of his
                                        sword slash with his Moon-Dragon
                                        Ringtail technique and shape his slashes
                                        into a circular drill-like shape with
                                        his Drilling Slashes, Moon Through
                                        Bamboo Leaves technique.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                {/* Techniques Section*/}
                <section
                    className="grid grid-cols-1 gap-2"
                    ref={refs.Techniques}
                >
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Techniques</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Techniques"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-2 show"
                        id="Techniques_content"
                    >
                        <section className="grid grid-cols-1 gap-2">
                            <div
                                className="grid grid-cols-1 gap-3 show"
                                id="General_content"
                            >
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/first.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>
                                            First Form: Dark Moon, Evening
                                            Palace
                                            (壱いちノ型かた　闇やみ月づき・宵よいの宮みや
                                            Ichi no kata: Yamizuki - Yoi no
                                            Miya?)
                                        </strong>
                                        &nbsp;- Kokushibo draws his katana and
                                        performs a singular horizontal slash
                                        following a crescent shape, creating
                                        numerous chaotic crescent blades along
                                        its path, before sheathing it back into
                                        his scabbard. This technique is
                                        extremely reminiscent of Iaijutsu.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/second.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>
                                            Second Form: Pearl Flower Moongazing
                                            (弐にの型かた　珠しゅ華かノ弄ろう月げつ
                                            Ni no kata: Shuka no Rōgetsu?)
                                        </strong>
                                        &nbsp;- Kokushibo performs three
                                        crescent-shaped slashes while releasing
                                        a multitude of crescent moon blades
                                        along with them.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/third.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>
                                            Third Form: Loathsome Moon, Chains
                                            (参さんノ型かた　厭えん忌き月づき・銷つがり
                                            San no kata: Enkizuki - Tsugari?)
                                        </strong>
                                        &nbsp;- Kokushibo performs two extremely
                                        broad crescent-shaped slashes directly
                                        in front of him, from which a storm of
                                        smaller crescent moon blades are
                                        released.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/fifth.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>
                                            Fifth Form: Moon Spirit Calamitous
                                            Eddy (伍ごノ型かた
                                            月げっ魄ぱく災さい渦か Go no kata:
                                            Geppaku Saika?)
                                        </strong>
                                        &nbsp;- Kokushibo creates multiple long
                                        and curved slashes layered over one
                                        another, essentially creating a vortex
                                        of crescent moon blades. As stated by
                                        Sanemi Shinazugawa, this technique was
                                        performed without Kokushibo swinging his
                                        katana.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/sixth.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>
                                            Sixth Form: Perpetual Night, Lonely
                                            Moon - Incessant
                                            (陸ろくノ型かた　常とこ夜よ孤こ月げつ・無む間けん
                                            Roku no kata: Tokoyo Kogetsu -
                                            Muken?)
                                        </strong>
                                        &nbsp;- Kokushibo rapidly performs a
                                        multitude of curved slashes several
                                        meters in front of him that releases a
                                        wild barrage of crescent moon blades
                                        capable of slicing up the surroundings.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/seventh.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>
                                            Seventh Form: Mirror of Misfortune,
                                            Moonlit
                                            (漆しちノ型かた　厄やっ鏡きょう・月づき映ばえ
                                            Shichi no kata: Yakkyō - Zukibae?)
                                        </strong>
                                        &nbsp;- Using his altered katana,
                                        Kokushibo performs a frontal
                                        crescent-shaped slash with couples of
                                        crescent moon blades, that unleashes
                                        numerous straight slashes with crescent
                                        moons interlaced, that expand outward
                                        through the ground.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/eighth.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>
                                            Eighth Form: Moon-Dragon Ringtail
                                            (捌はちノ型かた　月げつ龍りゆう輪りん尾び
                                            Hachi no kata: Getsuryū Rinbi?)
                                        </strong>
                                        &nbsp;- Using his altered katana,
                                        Kokushibo performs a extremely wide,
                                        long-ranged curved slash that leaves
                                        dozens of crescent moon blades along its
                                        path.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/ninth.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>
                                            Ninth Form: Waning Moonswaths
                                            (玖くノ型かた　降くだり月づき・連れん面めん
                                            Ku no kata: Kudarizuki - Renmen?)
                                        </strong>
                                        &nbsp;- Using his altered katana,
                                        Kokushibo performs multiple downward
                                        curved slashes, all in close proximity,
                                        that leave numerous crescent moon blades
                                        along its path.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/tenth.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                    </div>
                                    <p>
                                        <strong>
                                            Tenth Form: Drilling Slashes, Moon
                                            Through Bamboo Leaves
                                            (拾じゅうノ型かた　穿せん面めん斬ざん・蘿ら月げつ
                                            Jū no kata: Senmenzan - Ragetsu?)
                                        </strong>
                                        &nbsp;- Using his altered katana,
                                        Kokushibo creates three rotating
                                        circular saw-like slashes with crescent
                                        moon blades following their path.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-left m-3 w-60">
                                        <img
                                            src="./src/assets/fourteenth.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>
                                            Fourteenth Form: Catastrophe, Tenman
                                            Crescent Moon
                                            (拾じゅう肆しノ型かた　兇きょう変へん・天てん満まん繊せん月げつ
                                            Jū Shi no kata: Kyōhen - Tenman
                                            Sengetsu?)
                                        </strong>
                                        &nbsp;- Using his altered katana,
                                        Kokushibo performs a multitude of curved
                                        circular slashes which expand outward in
                                        every direction that incrementally grow
                                        in size, essentially creating an
                                        omni-directional vortex of crescent moon
                                        blades that whirls around him. This
                                        technique is visually near-identical to
                                        Fifth Form: Moon Spirit Calamitous Eddy,
                                        albeit with much greater range.
                                    </p>
                                </div>
                                <div>
                                    <div className="float-right m-3 w-60">
                                        <img
                                            src="./src/assets/sixteenth.webp"
                                            width="200px"
                                            alt=""
                                            className="m-auto border-3 border-black"
                                        />
                                    </div>
                                    <p>
                                        {" "}
                                        <strong>
                                            Sixteenth Form: Moonbow, Half Moon
                                            (拾じゅう陸ろくノ型かた　月虹げっこう・片かた割われ月づき
                                            Jū Roku no kata: Gekkō -
                                            Katawarezuki?)
                                        </strong>
                                        &nbsp;- Using his altered katana,
                                        Kokushibo swings outward, sending six
                                        curved slashes crashing down in front of
                                        him with numerous crescent moon blades,
                                        powerful enough to leave craters in
                                        their wake.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                {/* Equipment Section*/}
                <section
                    className="grid grid-cols-1 gap-2"
                    ref={refs.Equipment}
                >
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Equipment</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Equipment"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-2 show"
                        id="Equipment_content"
                    >
                        <div
                            className="grid grid-cols-1 gap-2 show"
                            id="Equipment_content"
                        >
                            {/* Equipment */}
                            <section className="grid grid-cols-1 gap-2">
                                <div>
                                    <div className="flex justify-between">
                                        <h3 className="text-lg font-comic">
                                            Equipment
                                        </h3>
                                        <img
                                            src="./src/assets/down.svg"
                                            alt=""
                                            width="20px"
                                            className="close"
                                            onClick={close}
                                            id="Equipment2"
                                        />
                                    </div>
                                </div>

                                <div
                                    className="grid grid-cols-1 gap-3 show"
                                    id="Equipment2_content"
                                >
                                    <p>
                                        <strong>Flesh Katana: </strong>As a
                                        former Demon Slayer and user of a
                                        Breathing Style, Kokushibo wields a
                                        warped version of a Nichirin katana.
                                        Created from his own flesh and blood,
                                        his body's immense durability and
                                        hardness allows it to be just as sharp,
                                        if not more so, as a normal Nichirin
                                        weapon made from Scarlet Crimson Iron
                                        Sand (猩しょう猩じょう緋ひ砂さ鐵てつ
                                        Shōjōhi Satetsu?) and Scarlet Ore
                                        (猩しょう猩じょう緋ひ鑛こう石せき
                                        Shōjōhi Kōseki?). Its blade is
                                        blood-red, with a veiny appearance, and
                                        numerous eyes cover the blade and the
                                        tsuka. However, it was unknown whether
                                        those eyes could have been used to
                                        extend his vision. His katana's tsuba is
                                        circular with four slight indentations,
                                        a fleshy red center with three eyes and
                                        several black veins, and a purple
                                        border. The tsuka is wrapped with teal
                                        cords and capped with a purple kashira.
                                        He carries it inside a saya at his waist
                                        that shares a similar red fleshy
                                        appearance. Kokushibo named his weapon
                                        Kyokokukamusari
                                        (虛きょ哭こく神かむ去さり
                                        Kyokokukamusari?, lit. "Hollow Cry of
                                        the Godless").
                                    </p>
                                    <p>
                                        <strong>
                                            Standard Nichirin Katana:{" "}
                                        </strong>
                                        During his time as a Demon Slayer, he
                                        carried around a traditional Nichirin
                                        katana that was light purple in color
                                        and had a tsuba that was rectangular
                                        shaped with four angular indentations, a
                                        black center, and a golden border. Along
                                        with it, he also carried a standard
                                        sword sheath that was black in color.
                                    </p>
                                </div>
                            </section>
                            {/* Gallery */}
                            <section>
                                <div className="mb-2">
                                    <div className="flex justify-between">
                                        <h3 className="text-lg font-comic">
                                            Gallery
                                        </h3>
                                        <img
                                            src="./src/assets/down.svg"
                                            alt=""
                                            width="20px"
                                            className="close"
                                            onClick={close}
                                            id="Gallery2"
                                        />
                                    </div>
                                </div>

                                <div
                                    className="grid grid-cols-3 gap-x-2 gap-y-5 show"
                                    id="Gallery2_content"
                                >
                                    <div className="flex justify-center flex-wrap">
                                        <img
                                            src="./src/assets/katana_anime.webp"
                                            alt="Human child Kokushibo"
                                            className="h-60 m-auto border-3 border-black"
                                        />
                                        <small className="m-auto mt-0">
                                            Kokushibo's katana as seen in the
                                            anime.
                                        </small>
                                    </div>
                                    <div className="flex justify-center flex-wrap">
                                        <img
                                            src="./src/assets/katana_manga.webp"
                                            alt="Human adult Kokushibo"
                                            className="h-60 m-auto border-3 border-black"
                                        />
                                        <small className="m-auto">
                                            Kokushibo's katana as seen in the
                                            manga.
                                        </small>
                                    </div>

                                    <div className="flex justify-center flex-wrap">
                                        <img
                                            src="./src/assets/katana_full.webp"
                                            alt="Anime full body Kokushibo"
                                            className="h-60 m-auto border-3 border-black"
                                        />
                                        <small className="flex justify-center flex-wrap">
                                            Kokushibo's full katana.
                                        </small>
                                    </div>

                                    <div className="flex justify-center flex-wrap">
                                        <img
                                            src="./src/assets/katana_og.webp"
                                            alt="Kokushibo with several blades coming out of his body"
                                            className="h-60 m-auto border-3 border-black"
                                        />
                                        <small className="flex justify-center flex-wrap">
                                            Kokushibo's original Nichirin
                                            katana.
                                        </small>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                {/* Relatives Section*/}
                <section
                    className="grid grid-cols-1 gap-2"
                    ref={refs.Relatives}
                >
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Relatives</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Relatives"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-2 show"
                        id="Relatives_content"
                    >
                        <Tree />

                        <p className="italic">
                            *The story does not indicate which child of
                            Michikatsu carries on the lineage nor the quantity
                            of generations that follow prior to the Tokito's.
                        </p>
                    </div>
                </section>
                {/* Battles Section*/}
                <section className="grid grid-cols-1 gap-2" ref={refs.Battles}>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Battles</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Battles"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-2 show"
                        id="Battles_content"
                    >
                        <p className="font-bold">Pre-Series Battles</p>
                        <ul className="list-disc ml-10">
                            <li>Yoriichi Tsugikuni vs Kokushibo</li>
                        </ul>
                        <p className="font-bold">Infinity Castle Arc</p>
                        <ul className="list-disc ml-10">
                            <li>Demon Slayers vs Kokushibo</li>
                        </ul>
                    </div>
                </section>

                {/* Trivia Section*/}
                <section className="grid grid-cols-1 gap-2" ref={refs.Trivia}>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Trivia</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Trivia"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-2 show"
                        id="Trivia_content"
                    >
                        <ul className="list-disc ml-10">
                            <li>
                                Kokushibo's alias contains the On'yomi reading
                                of the kanji for "black" (黒こく koku?), and the
                                Kun'yomi reading for "death" (死し shi?) and
                                "eye" (牟ぼう bō?).
                            </li>
                            <li className="list-disc ml-10">
                                <p>
                                    Kokushibo's human family name contains the
                                    Kun'yomi reading of the kanji for "to
                                    inherit, succeed" (継つぎ tsugi?) and
                                    "country" (国くに kuni?), while his first
                                    name contains the Nanori of the kanji for
                                    "sterness, severity" (巌みち michi?), and
                                    the Kun'yomi reading for "to prevail,
                                    victory" (勝かつ katsu?). His father was the
                                    one who named him, as he believed Michikatsu
                                    would be strong and successful.
                                </p>
                            </li>
                            <li>
                                Kokushibo has been challenged three times for
                                his position. One of these battles involved
                                Akaza. While Kokushibo would usually absorb the
                                demon he defeated, he let Akaza live because he
                                enjoyed the challenge.
                            </li>
                            <li>
                                Kaigaku shared similarities with Kokushibo. Both
                                were former Demon Slayers who betrayed the Demon
                                Slayer Corps to became demons of the Twelve
                                Kizuki in pursuit of power. Both of their Blood
                                Demon Arts were also complimentary with their
                                Breathing Styles; Kaigaku could generate
                                lightning as part of his Thunder Breathing,
                                while Kokushibo could summon crescent
                                moon-shaped projectiles in conjunction with his
                                Moon Breathing. They both also use katanas made
                                from their own flesh.
                            </li>
                            <li>
                                Kokushibo killed the then-Oyakata of the Demon
                                Slayer Corps and brought his head to Muzan as a
                                show of loyalty. This caused the Corps to put
                                extreme effort in hiding the residence of future
                                leaders. This event was also the one that caused
                                the Kakushi to be formed. The Oyakata's young
                                son was the one to eventually banish Yoriichi
                                Tsugikuni days later.
                            </li>
                            <li>
                                Kokushibo ranked 14th in the second popularity
                                poll with 2938 votes.
                            </li>
                            <li>
                                Kokushibo was considered to be a "business
                                partner" by Muzan.
                            </li>
                            <li>Kokushibo's hobby is playing igo.</li>
                            <li>
                                Kokushibo was one of the few demons, the others
                                being Rui and Susamaru, to not create clothing
                                out of their flesh, as when he died, his kimono
                                remained intact.
                            </li>
                            <li>
                                Kokushibo did not fear Muzan reading his mind.
                                He didn't intend to betray Muzan, and it was
                                actually a relief not to have his feelings
                                hidden and always try to smooth things over.
                            </li>
                            <li>
                                Kokushibo shares his Japanese and English voice
                                actors with Hiroki Kazama from Akuma-kun.
                            </li>
                            <li>
                                Kokushibo makes an appearance in Assault!!
                                Interview with the Demons from Hell, retorting
                                that Gyomei's Breathing Style had reminded him
                                of the Nio Guardians.
                            </li>
                            <li>
                                In Kimetsu Academy, Kokushibo is Muzan's
                                secretary. "Kokushibo" seems to be an alias, and
                                his real name and age are unknown. Although he's
                                a secretary, he's so muscular that he often gets
                                mistaken for a bodyguard. There are rumors that
                                he was a member of the American Special Forces,
                                a master at Iaido, and that he killed a man with
                                his bare hands. He wears sunglasses constantly.
                                He also frequently punishes subordinates like
                                Kaigaku and Kamanue for their failures by
                                attaching them to a spinning gadget.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Quotes Section*/}
                <section className="grid grid-cols-1 gap-2" ref={refs.Quotes}>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-comic">Quotes</h2>
                            <img
                                src="./src/assets/down.svg"
                                alt=""
                                width="20px"
                                className="close"
                                onClick={close}
                                id="Quotes"
                            />
                        </div>

                        <hr className=" border-2 text-black mb-2" />
                    </div>

                    <div
                        className="grid grid-cols-1 gap-2 show"
                        id="Quotes_content"
                    >
                        <ul className="list-disc ml-10">
                            <li>
                                (To Doma about Akaza) "I'm not saying this for
                                your sake. It disturbs the ranking. Even I fear
                                that cracks might form in the hierarchy."
                            </li>

                            <li>
                                (To Akaza) "Akaza... if you don't like it, then
                                request blood combat to replace us. Akaza... do
                                you understand what I'm saying to you."
                            </li>
                            <li>
                                (In regard to Akaza) "Akaza's presence is gone.
                                He has fallen. Akaza... weren't you going to
                                defeat me? A path had open for him to attain
                                further heights but he renounced it himself. How
                                exceedingly weak."
                            </li>
                            <li>
                                (To Muichiro Tokito and then Genya Shinazugawa)
                                "I will stop your bleeding. Humans are so
                                fragile. However... if you bleed to death... or
                                if his lordship doesn't approve of you... and
                                you die... then death was always your fate. In
                                that case... you were no greater a man than
                                that. Don't you... agree?"
                            </li>
                            <li>
                                (In regard to Gyomei Himejima) "Wonderful... The
                                pefect physical form developed to the upmost...
                                How long has it been since I've set my eyes on
                                such a great swordsman? Perhaps 300 years?"
                            </li>
                            <li>
                                (To Gyomei in regard to the Demon Slayer Mark)
                                "Without exception, the marked ones... die
                                before they reach the age of 25. Even if they
                                manifest the mark... and are able to improve
                                their power... it merely reduces their lifespan.
                                You showed the mark... and are past 25... so you
                                will probably die tonight. Your body and the
                                techniques you developed to their upmost
                                ability... will disappear from this world. Do
                                you not think that is lamentable?"
                            </li>
                            <li>
                                (To himself) "The old and ugly creature that was
                                once my little brother had pity for me. But... I
                                wasn't angry. Even though 60 years ago, he had
                                been such an eyesore. The voice calling me
                                "brother" was terribly hoarse. My brother had
                                never shown the slightest emotion... so at the
                                sight of him shedding tears, something welled up
                                in me for the first time since birth. I was
                                confused... at my own unexpected unrest. But I
                                must kill... this part of me from when I was
                                human... This old man of brittle flesh past his
                                prime... He was a Demon Slayer, and I must
                                cleave anyone who turns a sword upon me. But his
                                odd sentimentality... disappeared the next
                                moment."
                            </li>
                            <li>
                                (In regard to death) "Because Yoriichi died, an
                                honorable death will not visit me. Now that the
                                greatest swordsman in the long history of Demon
                                Slayers has died... I must not lose. Yes. I
                                chose to continue winning... until I became...
                                ugly like this."
                            </li>
                            <li>
                                (In response to Yoriichi Tsugikuni's statement
                                about future generations) "Yoriichi... when you
                                smiled, I couldn't help it... but I always found
                                it disturbing. And when we were talking about
                                how there were no successors for the various
                                breathing techniques you suddenly started
                                viewing things with strange optimism and you
                                smiled. In my conceit I believed that only our
                                generation was special. I felt sick with disgust
                                and irritation. What did you find so amusing?
                                [...] What is so amusing about imaging such a
                                future? Just thinking about losing makes me boil
                                with anger."
                            </li>
                            <li>
                                (To himself) "The ugliness of not admitting
                                defeat even though they took my head, chopped me
                                up and crushed me. Living in disgrace. Have I
                                lived hundreds of years for this? Was I so
                                afraid of defeat that I became a monster? Did I
                                want to be strong even if it meant eating
                                people? Did I become this miserable creature
                                because I didn't want to die? No. Yoriichi... I
                                just wanted to be you."
                            </li>
                            <li>
                                (To himself) "I could never grab hold of
                                anything. Anything at all. I abandoned my home.
                                I abandoned my wife and children. I abandoned my
                                humanity. I cut down my descendants and
                                abandoned being a samurai. But even all that
                                wasn't enough? You said that those who master
                                their paths all reach the same place. But I
                                never did. I could not see the same world that
                                you did. Why could I not leave anything behind?
                                Why could I not become someone known? Why are we
                                so different? Why in the world was I ever born?
                                Tell me... Yoriichi."
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
}
