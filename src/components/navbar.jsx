import { useEffect, useState } from "react";
import Button from "./button";
import Eye from "./eye";

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
    return (
        <>
            <nav>
                <div className="logoSection">
                    <Eye />
                    {/* <h1>Okoye David</h1> */}
                </div>
                <Button className="primary" onClick={openMenu}>Menu</Button>

            </nav>

            {
                open && <div className="navMenu">
                    <div className="navList">
                        <h3>Home</h3>
                        <h3>About</h3>
                        <h3>Work</h3>
                        <h3>Projects</h3>
                        <h3>Contact</h3>
                    </div>

                    <div className="navbox">
                        <h3>dev.hype7@gmail.com</h3>
                    </div>
                </div>
            }
        </>
    )
}