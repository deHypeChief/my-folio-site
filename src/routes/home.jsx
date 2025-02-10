import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/navbar";
import img from "../assets/images/ba.jpg"

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        // Timeline for preloader animations
        const preloaderTL = gsap.timeline({
            onStart: () => console.log("Preloader animation started"),
            onComplete: () => console.log("Preloader animation completed"),
        });

        preloaderTL
            .fromTo(
                ".textContent",
                { opacity: 1, y: -10 },
                {
                    delay: 1,
                    opacity: 0,
                    y: -80,
                    duration: 1,
                }
            )
            .fromTo(
                ".bar",
                { height: "100%" },
                {
                    height: "0%",
                    duration: 1,
                    stagger: -0.1,
                    onComplete: () => {
                        document.body.style.overflow = "auto";
                    },
                }
            );

        // Wait until preloader is done before initializing scroll animations
        preloaderTL.eventCallback("onComplete", () => {
            gsap.to(".heroImg", {
                height: "45vh",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".home",
                    start: "+=30 top",
                    end: "400 +=410",
                    scrub: 2.5,
                    pin: true,
                    pinSpacing: false,
                    // markers: true,
                    snap: {
                        snapTo: [0, 0.5, 1], // Snap only at start, mid, and end
                        duration: 0.5, // Smooth snapping
                        delay: 0.2, // Small delay to prevent jumping
                        ease: "power1.inOut",
                    },
                },
            });
        });
    }, []);

    return (
        <section className="home">
            <Navbar />

            <div className="preLoader">
                <div className="slideBars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="textContent">
                    <p className="moreInfoText">Fullstack + Blockchain Dev.</p>
                    <h1 className="montserrat-header">Okoye David</h1>
                </div>
            </div>

            <section className="hero">
                <div className="heroImg"></div>
                <h1>Just building show-stopping apps</h1>
            </section>

            <div className="bin"></div>
        </section>
    );
}
