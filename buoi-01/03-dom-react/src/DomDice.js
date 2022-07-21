import React, { useState } from 'react';
import './domdice.css';

function DomDice () {
    const arrImages = [
        './images/dice1.png', // index 0 
        './images/dice2@2x.png', // index 1
        './images/dice3@2x.png', // index 2
        './images/dice4@2x.png', // index 3
        './images/dice5@2x.png', // index 4
        './images/dice6@2x.png', // index 5
    ]
    const [dice1, setDice1] = useState(arrImages[0]);
    const [dice2, setDice2] = useState(arrImages[0]);

    function randomDiceIndex() {
        return Math.floor( Math.random() * 6 )
    }

    function handleClickRollDice() {
        setDice1(arrImages[randomDiceIndex()]);
        setDice2(arrImages[randomDiceIndex()]);
    }

    return (
        <div className="container">
            <div className="logo"><img src="./images/diceeLogo@2x.png" alt="" /></div>
            <div className="list-dice">
                <img className="dice-1" src={ dice1 } alt="" />
                <img id="dice-2" src={ dice2 }   alt="" />
            </div>
            <button className="roll-dice" onClick={ (e) => handleClickRollDice() } >Roll Dice</button>
        </div>
    );
}

export default DomDice;