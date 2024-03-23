import inquirer from "inquirer";

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function startGame() {
    // Generate a random number between 1 and 10
    const gameNumber: number = getRandomNumber(1, 10);

    const answer = await inquirer.prompt([
        {
            message: "Guess the number",
            type: "number",
            name: "guess"
        },
    ]);

    if (answer.guess === gameNumber) {
        console.log("You win!");
    } else {
        console.log(`Sorry, the correct number was ${gameNumber}. Try again.`);
    }
}

startGame();



 
 
 










