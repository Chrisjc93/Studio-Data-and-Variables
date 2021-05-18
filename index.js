// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const input = require('readline-sync');
let numOfAstronauts = input.question("How many Astronauts are going on this mission? ");
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
// let astronautCount = 7; was used before attempting the bonus mission.
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = numOfAstronauts * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 1; // dont make a string, make a 1 so we can use it in the future 1 * 100 is 100% EG 0.9 = 90%
let weatherStatus = "clear";
let lineBar = "-------------------------------------";
let takeOffStatus = "YES";






// Write code to generate the LC04 report here:
console.log(lineBar);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(lineBar);
console.log("Date: " + date);
console.log("Time: " + time);
console.log("\n"); 
console.log(lineBar);
console.log("> ASTRONAUT INFO");
console.log(lineBar);
console.log("* count: " + numOfAstronauts);
console.log("* status: " + astronautStatus);
console.log("\n");
console.log(lineBar);
console.log("> FUEL DATA");
console.log(lineBar);
console.log("* Fuel temp celsius: " + fuelTempCelsius +" C");
console.log("* Fuel level: " + (fuelLevel * 100) + "%");
console.log("\n");
console.log(lineBar);
console.log("> Mass DATA");
console.log(lineBar);
console.log("* Crew mass: " + crewMassKg + " kg")
console.log("* Fuel mass: " + fuelMassKg +" kg")
console.log("* Shuttle mass: " + shuttleMassKg +" kg")
console.log("* Total mass: " + totalMassKg +" kg")
console.log("\n");
console.log(lineBar);
console.log("> FLIGHT PLAN");
console.log(lineBar);
console.log("Weather: " + weatherStatus)
console.log("\n");
console.log(lineBar);
console.log("> OVERALL STATUS");
console.log(lineBar);
console.log("Clear for takeoff: " + takeOffStatus);

// instead of using "string (space) + variable. you can use  just a comma "," which will add a space and append it.

// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.

