import { useEffect, useState } from "react";
import Button from "./button";
import Eye from "./eye";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function Navbar() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function openMenu() {
        console.log(open)
        setOpen(!open)
    }

    const currentHour = new Date().getHours();
    const greeting =
        currentHour < 12
            ? "Good Morning"
            : currentHour < 18
                ? "Good Afternoon"
                : "Good Evening";

    const text = `${greeting} David, I came across your portfolio and I am interested in discussing a potential project with you. Could we schedule a call to talk further?`;

    return (
        <>
            <nav>
                <div className="logoSection">
                    <Eye />
                    {/* <h1>Okoye David</h1> */}
                </div>
                <Button className="primary" onClick={openMenu}>{open ? "Close" : "Menu"}</Button>

            </nav>

            {
                open && <div className="navMenu">
                    <div className="navList">
                        <a href="#home"><h3>Home</h3></a>
                        <a href="#about"><h3>About</h3></a>
                        <a href="#jobs"><h3>Experience</h3></a>
                        <a href="#project"><h3>Projects</h3></a>
                        <a href="#contact"><h3>Contact</h3></a>
                    </div>

                    <div className="navbox">
                        <a href={`mailto:davidchinedu.okoye@gmail.com?subject=${encodeURIComponent("Project Inquiry From <Company Name>")}&body=${encodeURIComponent(text)}`}>

                            <h3>david...okoye@gmail.com</h3>
                        </a>
                        <div className="socials">
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
                </div >
            }
        </>
    )
}