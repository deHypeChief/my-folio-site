import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./button";
import Eye from "./eye";

export default function Footer() {
    const currentHour = new Date().getHours();
    const greeting =
        currentHour < 12
            ? "Good Morning"
            : currentHour < 18
                ? "Good Afternoon"
                : "Good Evening";

    const text = `${greeting} David, I came across your portfolio and I am interested in discussing a potential project with you. Could we schedule a call to talk further?`;

    return (
        <section className="footer" id="contact">
            <div className="bigIntro">
                <div className="bigEye">
                    <Eye height={50} raduis={15} shadow />
                </div>
                <h1>Bring Your Ideas</h1>
                <p>My creative solutions have helped clients raise $100+ mln and expand their reach.</p>
                <div className="footerCta">

                    <a href={`http://wa.me/2349013903813?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer">
                        <Button className="primary">
                            Book a call
                        </Button>
                    </a>

                    <a href={`mailto:davidchinedu.okoye@gmail.com?subject=${encodeURIComponent("Project Inquiry From <Company Name>")}&body=${encodeURIComponent(text)}`}>
                        <Button>
                            Hire Me
                        </Button>
                    </a>
                </div>
            </div>

            <div className="footerLinks">
                <div className="links">
                    <div className="groupLink">
                        <p className="linkHead">Quick Links</p>
                        <a href="#home">
                            <p className="linkSub">Home</p>
                        </a>
                        <a href="#about">
                            <p className="linkSub">About</p>
                        </a>
                        <a href="#service">
                            <p className="linkSub">Service</p>
                        </a>
                    </div>

                    <div className="groupLink">
                        <p className="linkHead">Best Cases</p>
                        <a href="#project">
                            <p className="linkSub">Project</p>
                        </a>
                        <a href="#jobs">
                            <p className="linkSub">Jobs</p>
                        </a>
                        <a href="#caff">
                            <p className="linkSub">Buy Coffee ☕</p>
                        </a>
                    </div>
                </div>

                <div className="socials">
                    <div className="mailAddress">
                        <a href={`mailto:davidchinedu.okoye@gmail.com?subject=${encodeURIComponent("Project Inquiry From <Company Name>")}&body=${encodeURIComponent(text)}`}>
                            <h3>david...@gmail.com</h3>
                        </a>
                        <div className="socialLine">
                            {/* <div className="innerLine"></div> */}
                        </div>
                    </div>
                    <div className="socialWrap">
                        <a href="https://www.instagram.com/dehypechief/">
                            <div className="socialBox">
                                <div className="socialIcon">
                                    <Icon icon="basil:instagram-solid" width="24" height="24" />
                                </div>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/david-chinedu-okoye/">
                            <div className="socialBox">
                                <div className="socialIcon">
                                    <Icon icon="ri:linkedin-fill" width="24" height="24" />                            </div>
                            </div>
                        </a>
                        <a href="https://x.com/deHypeChief/">
                            <div className="socialBox">
                                <div className="socialIcon">
                                    <Icon icon="prime:twitter" width="18" height="18" />
                                </div>
                            </div>
                        </a>
                        <a href="http://github.com/deHypeChief">
                            <div className="socialBox">
                                <div className="socialIcon">
                                    <Icon icon="mdi:github" width="24" height="24" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footerBase">
                <p>Copyright © {new Date().getFullYear()} deHypeChief. All rights reserved.</p>
                <p>Enugu - Nigeria</p>
            </div>
        </section >
    )
}