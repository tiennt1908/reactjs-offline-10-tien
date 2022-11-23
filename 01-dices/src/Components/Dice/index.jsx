import React from 'react'
import { useEffect, useState } from "react";
export default function Dice() {
    const Data = [
        "dice1.png",
        "dice2@2x.png",
        "dice3@2x.png",
        "dice4@2x.png",
        "dice5@2x.png",
        "dice6@2x.png"
    ]
    const [rollValue, setRollValue] = useState([0,0]);
    useEffect(() => {
        roll();
    }, [])
    
    const roll = () => {
        const number_1 = Math.floor(Math.random() * 6);
        const number_2 = Math.floor(Math.random() * 6);
        setRollValue([number_1, number_2])
    }
    return (
        <div className="container">
            <div className="logo"><img src="/images/diceeLogo@2x.png" alt="" /></div>
            <div className="list-dice">
                <img className="dice-1" src={require("./images/" + Data[rollValue[0]])} alt="" />
                <img id="dice-2" src={require("./images/" + Data[rollValue[1]])} alt="" />
            </div>
            <button className="roll-dice" onClick={() => { roll() }}>Roll Dice</button>
        </div>
    )
}
