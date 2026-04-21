//Conditional statements => Statements (line of code) along with Conditions 

//There are mainly two important conditional statements available in JavaScript or TypeScript. 

//1. If-else conditional statement ==> The if-else conditional statement will be used when we don't know the result of the condition before. 
//2. Switch-case conditional statement ==> Switch case conditional statement will be used to choose one of the options among multiple. 

//if-else conditional statement

//Syntax of if-else conditional statement
/*
if(condition){
    //code to be executed when the condition is true
}else if(condition){
    //code to be executed when the condition is true
} else if(condition){
    //code to be executed when the condition is true
} else {
    //code to be executed when all the above conditions are false
}
*/

//Syntax of nested if-else conditional statement
/*
if(condition){
    //code to be executed when the condition is true
    if(condition){
        //code to be executed when the condition is true
    } else {
        //code to be executed when the condition is false
    }
} else {
    //code to be executed when the condition is false
}
*/



//Example of if-else conditional statement

let percentage: number = 35;

if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

//Example of nested if-else conditional statement

if (percentage >= 90) {
    console.log("Grade A");
    if(percentage >= 95){
        console.log("Hey Buddy, You will get gold medal");
    }else{
        console.log("Hey Buddy, You will get silver medal");
    }
} else if (percentage >= 80) {
    console.log("Grade B");
    
} else if (percentage >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

//Switch-case conditional statement

//Syntax of switch-case conditional statement
/*
switch(expression){
    case value1:    
    break;
    case value2:
    break;
    case value3:
    break;
    default:
}
*/

//Example of switch-case conditional statement

let env: string = "uat";

switch (env) {
    case "dev":
        console.log("launch the application with dev.amazon.com");
        break;
    case "qa":
        console.log("launch the application with qa.amazon.com");
        break;
    case "prod":
        console.log("launch the application with amazon.com");
        break;
    default:
        console.log("Please provide the correct environment");
}

//Practice some examples
/*
Beginner Level
Even or Odd
    Write a function that takes a number and returns "Even" if the number is even, otherwise "Odd".
Positive, Negative, or Zero
    Given a number, determine whether it is positive, negative, or zero.
Voting Eligibility
    Create a function that takes age as input and returns whether a person is eligible to vote (age ≥ 18).
Largest of Two Numbers
    Write a function that compares two numbers and returns the larger one.*/

//Write a function that takes a number and returns "Even" if the number is even, otherwise "Odd".
 
function checkEvenOrOdd(num: number): string {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let numberToCheck: number = 10;
console.log(`The number ${numberToCheck} is ${checkEvenOrOdd(numberToCheck)}.`);  

//Write a function - Given a number, determine whether it is positive, negative, or zero.
function checkNumberType(num: number): string {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

let numberToCheck2: number = -5;
console.log(`The number ${numberToCheck2} is ${checkNumberType(numberToCheck2)}.`);  

//Write a function - Create a function that takes age as input and returns whether a person is eligible to vote (age ≥ 18).
function checkVotingEligibility(age: number): string {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible to vote";
    }
}

let ageToCheck: number = 20;
console.log(`The person with age ${ageToCheck} is ${checkVotingEligibility(ageToCheck)}.`);  

//Write a function - Write a function that compares two numbers and returns the larger one. 
function findLargerNumber(num1: number, num2: number): number {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
let firstNumber: number = 15;
let secondNumber: number = 25;
console.log(`The larger number between ${firstNumber} and ${secondNumber} is ${findLargerNumber(firstNumber, secondNumber)}.`);

