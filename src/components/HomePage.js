import {React, useState} from "react";
import "./HomePage.css";
import Pop from "./Pop.js";

export default function HomePage(){
    const [expanded, setExpanded] = useState(true);
    const [buttonText, setButtonText] = useState("more");

    function handleClick(){
        setExpanded(!expanded);

        if (buttonText === "more"){
            setButtonText("hide");
        }
        else{
            setButtonText("more");
        }
    }

    return (
        <div>
            <div class="information">
                <p class="introduction">Hello! My name is Arty and I am a Computer Science and Engineering student at UCLA. I am currently practicing my web development skills and want you to
                    see some of my recent projects that I managed to put here.
                </p>
                <p class = "introduction"> So, if you wish, you can take a look at the insane animation that I added here:</p>
                <button class = "fancy" onClick={()=>handleClick()}> {buttonText} </button>
            </div>
            {
                !expanded &&
                <Pop />
            }
        </div>
    );
}