import Button from "./button";
import Eye from "./eye";

export default function Navbar() {
    return (
        <nav>
            <div className="logoSection">
                <Eye />
                {/* <h1>Okoye David</h1> */}
            </div>
            <Button default>Menu</Button>
        </nav>
    )
}