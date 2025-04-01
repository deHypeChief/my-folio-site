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
        
        // Create a media match for mobile devices
        const mediaQueryMobile = window.matchMedia("(max-width: 768px)");
        
        // Function to set appropriate zoom-out animation based on screen size
        const setHeroAnimation = (isMobile) => {
            // Clear any existing animations first
            gsap.killTweensOf(".heroImg");
            
            // Start with zoomed in state
            gsap.set(".heroImg", {
                backgroundSize: isMobile ? "160%" : "80%",
                backgroundPositionX: isMobile ? "center" : "35%",
                backgroundPositionY: isMobile ? "center" : "center",
            });
            
            // Animate to zoomed out state
            gsap.to(".heroImg", {
                height: isMobile ? "40vh" : "50vh", // Smaller height on mobile
                duration: 1.2,
                ease: "power2.out",
                backgroundSize: isMobile ? "170%" : "130%", // Zoom out to smaller size
                scrollTrigger: {
                    trigger: ".heroWrap",
                    start: "30% 40%",
                    end: "60% 80%",
                    toggleActions: "play none none reverse",
                }
            });
        };
        
        // Set initial animation based on current screen size
        setHeroAnimation(mediaQueryMobile.matches);
        
        // Add listener for screen size changes
        const handleMediaChange = (e) => {
            setHeroAnimation(e.matches);
        };
        
        mediaQueryMobile.addEventListener("change", handleMediaChange);
        
        return () => {
            document.body.style.overflowY = "scroll";
            ScrollTrigger.clearMatchMedia();
            mediaQueryMobile.removeEventListener("change", handleMediaChange);
        };
    }, []);

    useEffect(() => {
        // Get reference to the testimonial container and navigation buttons
        const cardsContainer = document.getElementById("testBom");
        const prevButton = document.querySelector(".navActionTest .actionRound:first-child");
        const nextButton = document.querySelector(".navActionTest .actionRound:last-child");
        
        if (cardsContainer && prevButton && nextButton) {
            // Get all cards and calculate card width including margin/gap
            const cards = cardsContainer.querySelectorAll(".testCard");
            const cardWidth = cards[0].offsetWidth;
            const containerWidth = cardsContainer.offsetWidth;
            const visibleCards = Math.floor(containerWidth / cardWidth);
            const scrollAmount = cardWidth;
            
            // Track current index
            let currentIndex = 0;
            const maxIndex = cards.length - visibleCards;
            
            // Function to scroll to a specific index with snapping
            const scrollToIndex = (index) => {
                // Ensure index is within bounds
                index = Math.max(0, Math.min(index, maxIndex));
                currentIndex = index;
                
                // Calculate exact position to ensure perfect alignment
                const scrollPos = index * scrollAmount;
                
                // Animate scroll with GSAP
                gsap.to(cardsContainer, {
                    scrollLeft: scrollPos,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        // Update button states
                        updateButtonStates();
                    }
                });
            };
            
            // Function to scroll left
            const scrollLeft = () => {
                scrollToIndex(currentIndex - 1);
            };
            
            // Function to scroll right
            const scrollRight = () => {
                scrollToIndex(currentIndex + 1);
            };
            
            // Function to update button states (optional - for disabling at ends)
            const updateButtonStates = () => {
                prevButton.classList.toggle("disabled", currentIndex === 0);
                nextButton.classList.toggle("disabled", currentIndex >= maxIndex);
            };
            
            // Add click event listeners
            prevButton.addEventListener("click", scrollLeft);
            nextButton.addEventListener("click", scrollRight);
            
            // Optional: Handle manual scrolling with snap effect
            let scrollTimeout;
            cardsContainer.addEventListener("scroll", () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    // Calculate the closest index based on current scroll position
                    const scrollPos = cardsContainer.scrollLeft;
                    const newIndex = Math.round(scrollPos / scrollAmount);
                    
                    // Only snap if we're not already animating
                    if (!gsap.isTweening(cardsContainer)) {
                        scrollToIndex(newIndex);
                    }
                }, 150); // Delay to allow manual scrolling to finish
            });
            
            // Initial button state
            updateButtonStates();
            
            // Cleanup function to remove event listeners
            return () => {
                prevButton.removeEventListener("click", scrollLeft);
                nextButton.removeEventListener("click", scrollRight);
                cardsContainer.removeEventListener("scroll", () => {});
            };
        }
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


                <section className="aboutUs">
                    <div className="aboutWrapT">
                        <h3>Experienced developer crafting <span className="curs">innovative</span> solutions with proven expertise</h3>

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
                                <div className="expCo">
                                    <h3>Senior Developer</h3>
                                    <h2>@FirstClassPilot</h2>
                                </div>
                                <h2>2022 - Present</h2>
                            </div>
                            <div className="expBox">
                                <div className="expCo">
                                    <h3>Senior Developer</h3>
                                    <h2>@FirstClassPilot</h2>
                                </div>
                                <h2>2022 - Present</h2>
                            </div>
                            
                        </div>
                    </div>
                </section>

                <section className="testmoi">
                    <div className="testTop">
                        <div className="testTopLeft">
                            <h1>
                                What my <span className="curs">clients</span> say about me
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

                    <div className="testcards" id="testBom">
                        {[...Array(5)].map((_, i) => (
                            <div className="testCard" key={i}>
                                <div className="testCardImg"></div>
                                <div className="contentrest">
                                    <div className="tDots">
                                        <div className="tdotInfo">
                                            <div className="ddot"></div>
                                            <p>B and K Stores</p>
                                        </div>
                                        <div className="tdotInfo">
                                            <div className="ddot"></div>
                                            <p>Delware, USA</p>
                                        </div>
                                    </div>
                                    <h3>Rebeca Jones</h3>
                                </div>
                                <div className="testCardContent">
                                    <p className="testText">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus, sit amet ipsum faucibus."</p>

                                    <div className="subTstCont">
                                        <h3>Client Name</h3>
                                        <p className="testbTe">Client Position</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                <Footer />

            </section>


        </>
    );
}
