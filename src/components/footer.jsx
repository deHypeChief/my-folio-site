import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./button";
import Eye from "./eye";

export default function Footer() {
    return (
        <section className="footer">
            <div className="bigIntro">
                <div className="bigEye">
                    <Eye height={50} raduis={15} shadow/>
                </div>
                <h1>Bring Your Ideas</h1>
                <p>My creative solutions have helped clients raise $100+ mln and expand their reach.</p>
                <div className="footerCta">
                    <Button className="primary">
                        Book a call
                    </Button>

                    <Button>
                        Hire Me
                    </Button>
                </div>
            </div>

            <div className="footerLinks">
                <div className="links">
                    <div className="groupLink">
                        <p className="linkHead">Quick Links</p>
                        <p className="linkSub">Home</p>
                        <p className="linkSub">About</p>
                        <p className="linkSub">Scervices</p>
                    </div>

                    <div className="groupLink">
                        <p className="linkHead">Best Cases</p>
                        <p className="linkSub">Project</p>
                        <p className="linkSub">Jobs</p>
                        <p className="linkSub">Dance</p>
                    </div>
                </div>

                <div className="socials">
                    <div className="mailAddress">
                        <h3>dev.hype7@gmail.com</h3>
                        <div className="socialLine">
                            {/* <div className="innerLine"></div> */}
                        </div>
                    </div>
                    <div className="socialWrap">

                        <div className="socialBox">
                            <div className="socialIcon">
                                <Icon icon="basil:instagram-solid" width="24" height="24" />
                            </div>
                        </div>
                        <div className="socialBox">
                            <div className="socialIcon">
                                <Icon icon="ri:linkedin-fill" width="24" height="24" />                            </div>
                        </div>
                        <div className="socialBox">
                            <div className="socialIcon">
                                <Icon icon="prime:twitter" width="18" height="18" />
                            </div>
                        </div>
                        <div className="socialBox">
                            <div className="socialIcon">
                                <Icon icon="mdi:github" width="24" height="24" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footerBase">
                <p>Copyright © {new Date().getFullYear()} deHypeChief. All rights reserved.</p>
                <p>Enugu - Nigeria</p>
            </div>
        </section>
    )
}