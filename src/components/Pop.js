import {React} from "react";
import "./popUps.css";
import battleship from "../assets/battleship.png";
import sorting from "../assets/sorting.png";
import mini from "../assets/mini.jpeg";

export default function popUps(){
    return (
        <div class = "entries">
            <div class="entry1"><a href="/battleship"><img class="cover" src={battleship} alt="cover"></img></a></div>
            <div class="entry2"><a href="/sorting"><img class="cover" src={sorting} alt="cover"></img></a></div>
            <div class="entry3"><a href="/rps"><img class="cover" src={mini} alt="cover"></img></a></div>
        </div>
    );
}