import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Button from "../components/button";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        document.body.style.overflowY = "hidden";

        const preloaderTL = gsap.timeline({
            onStart: () => console.log("Preloader animation started"),
        });

        preloaderTL
            .fromTo(".textContent", { opacity: 1, y: -10 }, { delay: 1, opacity: 0, y: -80, duration: 1 })
            .fromTo(".bar", { height: "100%" }, {
                height: "0%",
                duration: 1,
                stagger: -0.1,
                onComplete: () => {
                    document.body.style.overflowY = "scroll";
                    ScrollTrigger.refresh();
                    initScrollAnimations();
                },
            });

        gsap.fromTo(".heroHeader span",
            { opacity: 0, y: -40 },
            {
                opacity: 1, y: 50, duration: 0.5, stagger: 0.02, ease: "power2.out",
                scrollTrigger: {
                    trigger: ".heroWrap",
                    start: "30% 40%",
                    end: "60% 80%",
                    toggleActions: "play none none reverse",

                }
            }
        );

        gsap.to(".heroImg",
            {
                height: "50vh",
                duration: 1,
                tagger: 0.02,
                ease: "power2.out",
                backgroundSize: "150%",
                // backgroundPosition: "28% -15%",
                backgroundPositionX: "35%",
                backgroundPositionY: "140%",
                scrollTrigger: {
                    trigger: ".heroWrap",
                    start: "30% 40%",
                    end: "60% 80%",
                    toggleActions: "play none none reverse",

                }
            }
        );

        gsap.to(".wrapProjectBase",
            {
                height: "90vh",
                width: "90vw",
                borderRadius: "20px",
                duration: 1,
                tagger: 0.02,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".porjetcs",
                    start: "30% 40%",
                    end: "60% 80%",
                    toggleActions: "play none none reverse",

                }
            }
        );


        return () => {
            document.body.style.overflowY = "scroll";
            ScrollTrigger.clearMatchMedia();
        };
    }, []);

    return (
        <>
            <section className="home">

                <Navbar />
                <div className="preLoader">
                    <div className="slideBars">
                        {[...Array(6)].map((_, i) => (<div className="bar" key={i}></div>))}
                    </div>
                    <div className="textContent">
                        <p className="moreInfoText">Fullstack + Blockchain Dev.</p>
                        <h1 className="montserrat-header">Okoye David</h1>
                    </div>
                </div>

                <div className="preLoader">
                    <div className="slideBars">
                        {[...Array(6)].map((_, i) => (<div className="bar" key={i}></div>))}
                    </div>
                    <div className="textContent">
                        <p className="moreInfoText">Fullstack + Blockchain Dev.</p>
                        <h1 className="montserrat-header">Okoye David</h1>
                    </div>
                </div>

                <section className="hero">
                    <div className="heroWrap">
                        <div className="heroImg"></div>
                        <h1 className="heroHeader">
                            {["B", "u", "i", "l", "d", "i", "n", "g", " ",
                                "w", "i", "t", "h", " ",
                                "5", "+", " ", "y", "e", "a", "r", "s", " ",
                                "e", "x", "p", "e", "r", "i", "e", "n", "c", "e"].map((char, index) => (
                                    <span key={index}>{char}</span>
                                ))}
                        </h1>
                    </div>
                </section>

                <section className="wrk">
                    <h3>My Clients</h3>
                    <div className="workedWith">
                        <div className="workImages"></div>
                        <div className="workImages"></div>
                        <div className="workImages"></div>
                        <div className="workImages"></div>
                        <div className="workImages"></div>
                        <div className="workImages"></div>
                        <div className="workImages"></div>
                        <div className="workImages"></div>
                        <div className="workImages"></div>
                        <div className="workImages"></div>
                        <div className="workImages"></div>
                    </div>
                </section>

                <section className="aboutUs">
                    <div className="aboutWrapT">
                        <h3>Experienced developer crafting innovative solutions with proven expertise</h3>

                        <div className="aboutText">
                            <p>
                                With over 5 years of experience, I specialize in building robust full-stack applications
                                and blockchain solutions. My expertise spans modern web technologies, distributed systems,
                                and enterprise architectures. I've successfully delivered projects for startups and established companies.
                            </p>
                            <Button>View Resume</Button>
                        </div>
                    </div>
                </section>



                <section className="porjetcs">
                    <div className="proTop">
                        <h3>Here are my</h3>
                        <h1>Projects</h1>
                    </div>

                    <div className="prowrap">
                        <div className="proBox">
                            <div className="pimage">

                            </div>
                            <div className="pContent">
                                <div className="con">
                                    <h3>Project Title</h3>
                                    <p className="hash">#EduTech</p>
                                    <div className="pills">
                                        <div className="pillIn">
                                            Express
                                        </div>
                                        <div className="pillIn">
                                            Express
                                        </div>
                                        <div className="pillIn">
                                            Express
                                        </div>
                                    </div>
                                </div>
                                <Button>View Project</Button>
                            </div>
                        </div>
                        <div className="proBox">
                            <div className="pimage">

                            </div>
                            <div className="pContent">
                                <h3>Project Title</h3>
                                <Button>View Project</Button>
                            </div>
                        </div>
                        <div className="proBox">
                            <div className="pimage">

                            </div>
                            <div className="pContent">
                                <h3>Project Title</h3>
                                <Button>View Project</Button>
                            </div>
                        </div>
                        <div className="proBox">
                            <div className="pimage">

                            </div>
                            <div className="pContent">
                                <h3>Project Title</h3>
                                <Button>View Project</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="aboutUsv">

                    <div className="aboutWorkingBox">
                        <div className="abBox"></div>
                        <div className="abBox"></div>
                        <div className="abBox"></div>
                    </div>
                </section>



                {/* Rest of your code remains the same */}

                <section className="Exp">
                    <div className="expContent">
                        <div className="expTextGroup">
                            <p>
                                Throughout my career, I've led technical teams, architected scalable solutions,
                                and mentored junior developers. My experience includes working with Fortune 500 companies
                                and contributing to open-source projects.
                            </p>
                            <Button>Download Resume</Button>
                        </div>
                        <div className="expWrap">
                            <div className="expBox">
                                <div className="expCo">
                                    <h3>Senior Developer</h3>
                                    <h2>@FirstClassPilot</h2>
                                </div>
                                <h2>2022 - Present</h2>
                            </div>
                            <div className="expBox">
                                <h3>Tech Lead</h3>
                                <h2>2020 - 2022</h2>
                            </div>
                            <div className="expBox">
                                <h3>Full Stack Developer</h3>
                                <h2>2019 - 2020</h2>
                            </div>
                            <div className="expBox">
                                <h3>Frontend Developer</h3>
                                <h2>2018 - 2019</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testmoi">
                    <div className="testTop">
                        <div className="testTopLeft">
                            <h1>
                                What my <span>clients</span> say about me
                            </h1>
                            <p>
                                Attention to detail has earned me positive feedback from clients across various industries.
                            </p>
                        </div>

                        <div className="navActionTest">
                            <div className="actionRound">
                                <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 16 9">
                                    <path fill="#fff" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"></path>
                                    <path fill="#fff" d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"></path>
                                </svg>
                            </div>
                            <div className="actionRound">
                                <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 16 9">
                                    <path fill="#fff" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"></path>
                                    <path fill="#fff" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="testcards">
                        {[...Array(5)].map((_, i) => (
                            <div className="testCard" key={i}>

                            </div>
                        ))}
                    </div>
                </section>


                <Footer />

            </section>


        </>
    );
}
