// const diceImages = [
//     'images/dice1.png',
//     'images/dice2@2x.png',
//     'images/dice3@2x.png',
//     'images/dice4@2x.png',
//     'images/dice5@2x.png',
//     'images/dice6@2x.png'
// ];
// const rollDice = document.querySelector('.roll-dice');
// const dice1 = document.querySelector('.dice-1');
// const dice2 = document.querySelector('#dice-2');

// function domDice() {
//     dice1.src = randomDice();
//     dice2.src = randomDice();
// }

// function randomDice(){
//     const number = getRandomIntInclusive(0, 5);
//     return diceImages[number];
// }

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// rollDice.addEventListener('click', domDice);




const btnEl = document.querySelector('.roll-dice')
const imgDice1 = document.querySelector('.dice-1')
const imgDice2 = document.querySelector('#dice-2')

const arrImages = [
  './images/dice1.png', // index 0 
  './images/dice2@2x.png', // index 1
  './images/dice3@2x.png', // index 2
  './images/dice4@2x.png', // index 3
  './images/dice5@2x.png', // index 4
  './images/dice6@2x.png', // index 5
]

function randomDiceIndex() {
  return Math.floor( Math.random() * 6 )
}

function handleClickRollDice() {
  const idx1 = randomDiceIndex()
  const idx2 = randomDiceIndex()

  const src1 = arrImages[idx1]
  const src2 = arrImages[idx2]

  imgDice1.src = src1
  imgDice2.src = src2
}

// Binding Events
btnEl.addEventListener('click', handleClickRollDice)