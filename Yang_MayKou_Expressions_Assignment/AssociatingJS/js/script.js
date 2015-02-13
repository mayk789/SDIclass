//May Kou Yang
//Feb. 12, 2015
//SDI 2330
//Section 02
//Week2_Expression_Assignment

//Adding alert to test js file
//alert("Javascript Test");

//Variables and Data Types
var startingAmount = [100, 200, 300, 400, 500];
var amountInSales = [];
var howMuchSpent = [];
var endOfDay = howMuchSpent + amountInSales; // adds startingAmount and amountInSales




//Prompts
startingAmount = prompt("Enter today's starting amount. Please round to the nearest hundred.: ");
amountInSales = prompt("Enter today's amount in sales. Please round to the nearest hundred.: ")
howMuchSpent = prompt("Enter the amount spent today. Please round to the nearest hundred.: ")


//Outputs
console.log("Your starting amount today is: " + startingAmount);
console.log("Your amount in sales today (rounded to the nearest hundred): " + amountInSales)
console.log("Total amount you spent today (rounded to the nearest hundred: " + howMuchSpent)





