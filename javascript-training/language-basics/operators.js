// Syntex to store data : Declaration variable = Data;

//Operators =>> Operators are special characters Used to perform operations in javascript.

// There are five types of operators in javascript.

//1. Arithmetic operators
//2. Assignment operators
//3. Comparison operators
//4. Logical operators
//5. Ternary operators

//1. Arithmetic operators : The special characters used to perform mathematical operations in javascript (+ , - , * , / , % , ++ , --)
// + Addition operator
// - Subtraction operator 
// * Multiplication operator
// / Division operator 
// % Modulus operator [Returns the remainder of a division operation]
// ++ Increment Operator (Increases A variable by 1)
// -- Decrement operator (Decreases a variable value by 1)

let a = 10;
let b = 20;

//a++ => post-increment  ==> post execution of current line , increase the value by 1
console.log("Post Increment: "+ (a++));
console.log("Next line of Post Increment: "+ (a));

//++b => pre-increment  ==> increase the value by 1 before execution of current line
console.log("Pre Increment: "+ (++b));
console.log("Next line of Pre Increment: "+ (b));

//a-- => post-decrement  ==> post execution of current line , decrease the value by 1
console.log("Post Decrement: "+ (a--));
console.log("Next line of Post Decrement: "+ (a));

//--b => pre-decrement  ==> decrease the value by 1 before execution of current line
console.log("Pre Decrement: "+ (--b));
console.log("Next line of Pre Decrement: "+ (b));

//2. Assignment Operators : special characters used to assign values to the variable. (= , += , -= , *= , /= , %=)
let c = 20;
console.log("Initial value of c: "+ c);

c+=10; // c = c + 10 => c = 20 + 10 => c = 30
console.log("After using += operator: "+ c);

c-=10; // c = c - 10 => c = 30 - 10 => c = 20
console.log("After using -= operator: "+ c);

c*=10; // c = c * 10 => c = 20 * 10 => c = 200
console.log("After using *= operator: "+ c);

c/=10; // c = c / 10 => c = 200 / 10 => c = 20
console.log("After using /= operator: "+ c);

//3. Comparison Operators : special characters used to compare two values and return a boolean value (true or false) (== , === , != , > , < , >= , <=)
//== represents loose equality. => loose equality means it is going to compare value only, but it is not going to compare the type of the data. 
//=== represents strict equality. ==> Strict equality will compare both value as well as type. 
let x = 10; 
let y = "10"; // when we use quotes (single/double/back tick) , it will be treated as text
console.log("Loose Equality with == :"+(x==y));
console.log("Strict Equality with === :"+(x===y));
console.log("Not Equal with != :"+(x!=y));
console.log("Greater than with > :"+(x>y));
console.log("Less than with < :"+(x<y));
console.log("Greater than or equal to with >= :"+(x>=y));
console.log("Less than or equal to with <= :"+(x<=y));

//4. Logical Operators : special characters used to perform logical operations on boolean values (&& , || , !)
//&& represents logical AND. => it returns true if both operands are true, otherwise it returns false
//|| represents logical OR. => it returns true if at least one of the operands is true, otherwise it returns false
//! represents logical NOT. => it returns true if the operand is false, and it returns false if the operand is true

let i = 10;
let j = 20;
console.log((i<j) && (i==j)); // true and false => false
console.log((i<j) || (i==j)); // true or  false => true
console.log(!((i<j) && (i==j))); // not (true and false )=> not (false) => true

//5. Ternary Operator => The special character used to perform a conditional operation. (?)
//let result = (condition) ? valueIfTrue : valueIfFalse ;
let age = 37;
let result = (age>=18) ? "Eligible to Vote" : "Not Eligible to Vote";
console.log(result);