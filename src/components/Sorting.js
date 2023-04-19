import React from "react";
import "./Sorting.css";
import * as Algorithms from "./algorithms.js";



export default class Sorting extends React.Component {

    constructor(props){ 
        super(props);
        this.state = {
            array: [],
            temp: 15,
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i = 0; i < 50; i++){
            array.push(randomInt(7, 680));
        }
        this.setState({array});
        this.temp = 15;
    }

    sort() {
        if(this.temp !== 15){ alert("please reset the array first"); this.resetArray(); return; }
        const sortedArray = Algorithms.mergeSort(this.state.array);

        const array = [];
        for(let i = 0; i < 50; i++){
            array.push(sortedArray[i]);
        }

        this.setState({array});
        this.temp = 15;
    }

    average(){
        const averageTaken = Algorithms.average(this.state.array);
        const array = [];

        array.push(averageTaken);

        this.setState({array});
        this.temp = 90;
    }

    render() {
        const {array} = this.state;

        return (
            <div>
                <div class="buttons">
                    <button class="fancyB" onClick={() => this.resetArray()}>Generate a new array</button>
                    <button class="fancyB" onClick={() => this.sort()}>Sort it!</button>
                    <button class="fancyB" onClick={() => this.average()}>Take the average</button>
                </div>
                <div class="arr-cont">
                    {array.map((value, index) => (
                        <div 
                        class = "array-entry" 
                        key = {index} 
                        style={{height: `${value}px`, width: `${this.temp}px`}}>{value}</div>
            ))}
                </div>
            </div>
        );
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}