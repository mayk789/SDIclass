/*
Yang_MayKou
SDI Section 02
Week 3
Conditionals Assignment
 */

//alert("Javascript is working");


//Variables
var farmLocation = "Afton";
var acreage = "10";
var lake = "1";
var woods = "1";
var usableLand;
    usableLand = parseInt(acreage - (parseInt(lake) + parseInt(woods)));
var rainFlood = "true";


//Outputs
console.log("The farm is located in " + farmLocation + ", MN.");
console.log("It has a total of " + acreage + " acres.");
console.log("There's a lake that takes up " + lake + " acres.");
console.log("There is also " + woods + " acre of woods that is on the farm.");
console.log("Usable amount of land should be " + usableLand + ".");
console.log("It is " + rainFlood + " that rain had flooded the land.");

//Confirm
rainFlood = confirm("Did rain flood the land? Select \"OK\" for true & \"Cancel\" for false." );

//Conditional
if (rainFlood != true) {
    // If false
    console.log("No, the land has not been flooded by rain.");
    var noFlood = usableLand;
     noFlood =prompt("Confirm that the land there are 0 acres of land that have not been flooded by rain.", "0");
    console.log("Then " + noFlood + " acres have not been flooded.")
} else {
    // If true
    var landFlooded = prompt("How many acres have been flooded? Please use whole numbers.", "8");
    landFlooded = parseInt(landFlooded)
        console.log("Here is the amount of land that has been flooded: " + landFlooded + " acre(s).");
    var amountFarmable;
    amountFarmable = parseInt(usableLand) - parseInt(landFlooded)
        console.log("The actual amount of land farmable is: " + amountFarmable + " acres(s).")
}


