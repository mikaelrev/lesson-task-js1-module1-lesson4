const sports = ["golf", "football", "cricket"];

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];


// Question 1

function printSeason(season) {
    console.log(season);
}

printSeason("summer");



// Question 2

function printNumbers(firstNumber, secondNumber) {
    console.log("First: " + firstNumber, "Second: " + secondNumber);
}

printNumbers(2,3);



// Question 3

function addNumbers(firstNumber, secondNumber, thirdNumber) {
    const result = firstNumber + secondNumber + thirdNumber;
    return result;
}

const total = addNumbers(3,6,18);

const totalContainer = document.querySelector(".total");

totalContainer.innerHTML = total;



// Question 4

function createGreeting(name) {
    const greeting = "Hello, my name is " + name + "."; 
    return greeting;
}

const greeting = createGreeting("Mikael");

const nameContainer = document.querySelector("#name");
nameContainer.innerHTML = greeting;



// Question 5




// Question 6

