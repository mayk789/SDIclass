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
var howMuchSpent = [10];
var endOfDay = (amountInSales - howMuchSpent);



//Prompts
startingAmount = prompt("Enter today's starting amount which is $100.Simply enter 100.: ", "100");
amountInSales = prompt("Made a total of $400 in sales. Please enter 400.: ", "400")
howMuchSpent = prompt("$10 was spent on lunch. Please enter in 10.: ", "10")


//Outputs
console.log("Your starting amount today is: " + startingAmount);
console.log("Your amount in sales today (rounded to the nearest hundred): " + amountInSales)
console.log("Total amount you spent today (rounded to the nearest hundred: " + howMuchSpent)
console.log("Your end of day total is: " + endOfDay)



