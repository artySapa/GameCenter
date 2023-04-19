import {React} from "react";
import "./Footer.css";

export default function Footer () {

    return (
        <div className="footer">
            <div class="footerEntry">
                <ul>
                    <li><a href="https://www.instagram.com/sapartyom/" target ='_blank' rel="noreferrer">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/sapartyom/" target ='_blank' rel="noreferrer">LinkedIn</a></li>
                    <li>sapartyom@g.ucla.edu</li>
                </ul>
            </div>
            <div class="footerEntry">
                <ul>
                    <br />
                    <li id="resume"><a href="https://docs.google.com/document/d/1gu91ZkEtTJRdNgoU-ZLkQ9NTq8v9qHysc6uJcLynxT0/edit?usp=sharing" target ='_blank' rel="noreferrer">Resume</a></li>
                    <p class="phone">4244152827</p>
                </ul>
            </div>
        </div>
    );
}