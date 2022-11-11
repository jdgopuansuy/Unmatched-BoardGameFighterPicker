let fighters = ["King Arthur and Merlin", "Alice and The Jabberwock", "Medusa and The Harpies", "Sinbad and The Porter"];

let battlefields = ["Cherry Blossoms", "River Bridge"];

function PickRandomFighter() {
    // Generate a random number between 1 and NumberOfWords
    const randomNumber = Math.ceil(Math.random() * fighters.length) - 1;

    // Display the word inside the text box
    document.querySelector("#fighter").value = fighters[randomNumber];
}

function PickRandomBattlefield() {
    // Generate a random number between 1 and NumberOfWords
    const randomNumber = Math.ceil(Math.random() * battlefields.length) - 1;

    // Display the word inside the text box
    document.querySelector("#battlefield").value = battlefields[randomNumber];
}