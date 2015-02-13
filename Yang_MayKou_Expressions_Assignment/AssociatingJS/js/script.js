//May Kou Yang
//Feb. 12, 2015
//SDI 2330
//Section 02
//Week2_Expression_Assignment

//Adding alert to test js file
//alert("Javascript Test");

//Variables and Data Types
var startingAmount = [100];
var amountInSales = [400];
var howMuchSpent = [3, 5];
var endOfDay;
endOfDay = (startingAmount[0] + amountInSales[0]) - (howMuchSpent[0] + howMuchSpent[1]);
var actualProfit;
actualProfit = amountInSales[0] - (startingAmount[0] + (howMuchSpent[0] + howMuchSpent[1]));

//Prompts
startingAmount = prompt("Enter today's starting amount which is $100.Simply enter 100. : ", "100");
amountInSales = prompt("Made a total of $400 in sales. Please enter 400. : ", "400");
howMuchSpent = prompt("$8 was spent on lunch. Please enter in 8. : ", "8");


//Outputs
console.log("Your starting amount today is: " + startingAmount);
console.log("Your amount in sales today (rounded to the nearest hundred): " + amountInSales);
console.log("Total amount you spent today (rounded to the nearest hundred: " + howMuchSpent);
console.log("Your end of day total is: " + endOfDay);
console.log("Your actual profit today is: " + actualProfit);
