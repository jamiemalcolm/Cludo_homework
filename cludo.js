// // Episode I - The Phantom Menace

// // declaring a constant variable 'scenario' that cannot be over written 
// // keys and values can be added, removed or edited of the object 

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
//   // declating an anonymous function here to a constant
//   // functoin returns the value stored in the key murderer of scenario 
//   // the function can look outside of the block for a variable named scenario 

//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
//   // assigning the result of the function to a constant 'verdict' and printing to console 
//   const verdict = declareMurderer();
//   console.log(verdict);

  // Episode II - Attack Of The Clones 
// initial thought is i will need to comment out the previous episode
// as declare murderer and verdict are being assigned again? 

//   const murderer = 'Professor Plum';
// // dont think that this will be allowed as murderer is already defined 
// // perhaps changing the original murderer decleration to var 
// // also inside this function murderer is trying to be declared as a Global variable 
// // Bad News! 
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
// // calling the change function 
// // and running the declare function with the "changed" murderer saving the result to verdict  
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// Episode III - The Clone Wars

/* overview of the whole snippet leads to believe that the first declaration
 of murderer is expected to be uded in secondVerdict and firstVerdict will be 
 'Mrs. Peacock */

 // the scope is not bound to a specific block
// let murderer = 'Professor Plum';

// /* the function should use the declaration inside its self instead of going to 
// look outside */
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
// // mrs Peacock 
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
// // professor plum 
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Episode Iv - A New Hope
/* three declarations using let*/ 
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
// // suspect three will be colonel musturd when the function is used 
// // suspect two and three should be looked for outside the function 
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
// // saving the result of the function to suspects 
// const suspects = declareAllSuspects();
// // the return statement of the function where suspect three will be colonel mustard
// console.log(suspects);
// // here suspect three will be mrs peacock 
// console.log(`Suspect three is ${suspectThree}.`);

// Episode V - The Empire Strickes Back 
// creating a constant storing a mutable object 
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
//   // although it is a constant the weapon will still be changed 
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
//   // this function will run fine 
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
//   // the change fucntion changes the weapon from candle stick to revolver 
//   // the function return is stored as verdict and revolver will be logged to the console  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

// Episode VI - Return of the Jedi

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);