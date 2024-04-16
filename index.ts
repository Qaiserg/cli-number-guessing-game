#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 5 + 1);

 const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please Guess a Number Between 1-5: ",
    },
]);

if(answers.UserGuessedNumber === randomNumber ){
    console.log("Wahoo! you won.");
} else {
    console.log("Oops you lose! Better luck next time");
}