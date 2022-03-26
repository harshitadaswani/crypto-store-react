import React from 'react';
import "./footer.css"
import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-top">
            {/* <div className="footer">
                <div className="footer-left border-bottom">
                    <a href="index.html" className="txt-l fw-black p-s m-s">Crypto&nbsp;Store</a>
                    <a href="https://github.com/harshitadaswani" target="_blank" rel="noopener noreferrer"
                        className="txt-l fw-black p-s m-s"><FaGithubSquare className="icons" /></a>
                    <a href="https://www.linkedin.com/in/harshitabdaswani/" target="_blank" rel="noopener noreferrer"
                        className="txt-l fw-black p-s m-s"><FaLinkedinIn className="icons" /></a>
                    <a href="https://twitter.com/harshi_daswani" target="_blank" rel="noopener noreferrer"
                        className="txt-l fw-black p-s m-s"><FaTwitterSquare className="icons" /></a>
                </div>
            </div> */}

            <div className="footer-copyright txt-center m-auto">
                <p>Copyright © Crypto | Designed by Harshita Daswani</p>
            </div>
        </footer>
    )
}

export { Footer };
