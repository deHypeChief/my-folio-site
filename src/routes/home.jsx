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

                <section className="hero">
                    <div className="heroWrap">
                        <div className="heroImg"></div>
                        <h1 className="heroHeader">
                            {["J", "u", "s", "t", " ",
                                "b", "u", "i", "l", "d", "i", "n", "g", " ",
                                "s", "h", "o", "w", "-", "s", "t", "o", "p", "p", "i", "n", "g", " ",
                                "a", "p", "p", "s"].map((char, index) => (
                                    <span key={index}>{char}</span>
                                ))}
                        </h1>
                    </div>
                </section>

                <section className="aboutUs">
                    <div className="aboutWrapT">
                        <h3>Building seamless digital experiences, transforming ideas into future-ready solutions</h3>

                        <div className="aboutText">
                            <p>
                                I’m David full-stack developer, fintech enthusiast, and problem-solver.
                                I create scalable web applications with intuitive interfaces and robust backend infrastructures.
                                I thrive on pushing boundaries and unlocking new possibilities.
                            </p>
                            <Button>Download Reume</Button>
                        </div>
                    </div>

                    <div className="aboutWorkingBox">
                        <div className="abBox"></div>
                        <div className="abBox"></div>
                        <div className="abBox"></div>
                    </div>
                </section>

                <section className="porjetcs">
                    <div className="proTop">
                        <h3>Here are my</h3>
                    </div>
                    <div className="wrapProjectBase">
                        <h1>Projects</h1>
                    </div>
                </section>

                <section className="Exp">
                    <div className="expContent">
                        <div className="expTextGroup">
                            {/* <h3>03</h3> */}
                            {/* <h3>My work experience</h3> */}
                            <p>
                                I’m David full-stack developer, fintech enthusiast, and problem-solver.
                                I create scalable web applications with intuitive interfaces and robust backend infrastructures.
                                I thrive on pushing boundaries and unlocking new possibilities.
                            </p>

                            <Button>Download Reume</Button>
                        </div>
                        <div className="expWrap">
                            <div className="expBox">
                                <h3>Fullstcak tutor</h3>
                                <h2>2020 - 2021</h2>
                            </div>
                            <div className="expBox">
                                <h3>Fullstcak tutor</h3>
                                <h2>2020 - 2021</h2>
                            </div>
                            <div className="expBox">
                                <h3>Fullstcak tutor</h3>
                                <h2>2020 - 2021</h2>
                            </div>
                            <div className="expBox">
                                <h3>Fullstcak tutor</h3>
                                <h2>2020 - 2021</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />

            </section>

        </>
    );
}
