let readlineSync = require('readline-sync');
let rl = require('readline-sync');
/* https://www.npmjs.com/package/readline-sync */

/*let keepPlaying = 'y';

while(keepPlaying ==='y') {
  let answer = rl.question('How are you');
  let age = rl.question("who old");

  console.log(answer,age);
  keepPlaying = rl.question("Keep playing? y\/n");
}
*/

/*
console.log("Welcome to A Very Simple Text Game!");
let name = rl.question("What is your name?");
console.log(`Welcome, ${name}! We are going on an adventure.`);

let direction = rl.question("You are in a dark dungeon. You can move to the (E)ast or (W)est. Which direction do you go?");

if (direction === "e") {
  console.log("you found a dragon. I am afraid you're dead!")
}

else if (direction === "w") {
  console.log("you found Ye Cup. Congratulations!")
}

else {
  console.log("You're just stuck in space.")
}
*/

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

defaultHealth = 10;

let enemy = {
  name: "Big Mama",
  health: defaultHealth
}

let yourstatus = {
  name: "yourname",
  health: defaultHealth,
  inventory: 0 //number of smoothies you have
}

let battleState = 0;
let spaces = 0;
//number of spaces needed to win.
winSpace = 15;
/* the "moving forward" situation. if battleState becomes 1, run the enemy battle state.*/



function greeting() {
  console.log(`Welcome to BIG MAMA! The goal is to make it through ${winSpace} spaces while surviving Big Mama's onslaughts. `)
  let userName = rl.question("What is your name?")
  console.log(`Welcome, ${userName}! I'm wishing you the best of luck against BIG MAMA.`)
}

greeting();

function smoothieRoll() {
  smoothieDice = getRandom(1,7);
  if (smoothieDice === 7) {
    console.log("You got a SMOOTHIE! If your health is low, a SMOOTHIE will heal you completely!");
    yourstatus.inventory++;
    console.log(`The number of smoothies you have is ${yourstatus.inventory}.\n`);
  }
}

while (battleState == 0) {

  if (spaces === 15) {
    console.log("Congratulations! You've reached safety and escaped the clutches of Big Mama.");
    break
  }

  let movement = rl.question("Do you want to move (f)oward?")

  if (movement==="f") {

    smoothieRoll();

    let dice = getRandom(1,5);
    if (dice<5) {
      spaces++;
      console.log(`You have moved forward! You've traveled ${spaces} spaces.`);
        if (yourstatus.inventory > 0) {
          console.log(`The number of smoothies you have is ${yourstatus.inventory}`);
        }
    }
    else if(dice===5) {
      enemyAppeared();
      if (yourstatus.health <= 0) {
        console.log("It's game over for you.");
        break;
      }
    }
    else {
      console.log("St");
    }
  }
  else {
    console.log("I don't recognize that command. Let's try again.")
  }
}

function enemyAppeared() {
  enemy.health = defaultHealth;

    while (enemy.health > 0 || yourstatus.health > 0) {
      console.log(`\nYou've come across ${enemy.name}. She has ${enemy.health} health.`);

    //a turn of 0 means you can attack. a turn of 1 means Mama attacks.

      let turn = 0;

        if (turn === 0) {
          let attack = rl.question("Do you (a)ttack ?\n");
          if (attack === "a") {
            let attack = getRandom(1,5);
            enemy.health = enemy.health - attack;
            console.log(`\nyou've inflicted ${attack} damage.`);
            turn++;
            }

        if (turn === 1) {
          let attack = getRandom(1,3);
          yourstatus.health = yourstatus.health - attack;
          console.log(`\nMama has inflicted ${attack} damage on you.`);
          console.log(`You have ${yourstatus.health} health.`)
          turn--;
          }

          if (yourstatus.health <= 0) {
            console.log("You lose.");
            break;
            }

          if (enemy.health <= 0) {
            console.log("You win!");
            break;
            battleState=0;
          }



        }

      }
}
