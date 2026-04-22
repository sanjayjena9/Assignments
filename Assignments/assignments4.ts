
/* Assignment#4
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1            50000
2           -2000
3            3000
4           -15000
5           -200
6           -300
7            4000
8           -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions
*/

//Map collection to store all back transactions
let bankTransaction:Map<number , number> = new Map();

//Storing the back transaction in Map.
bankTransaction.set(1,50000);
bankTransaction.set(2,-2000);
bankTransaction.set(3,3000);
bankTransaction.set(4,-15000);
bankTransaction.set(5,-200);
bankTransaction.set(6,-300);
bankTransaction.set(7,4000);
bankTransaction.set(8,-3000);

//Initilization of variables
let totalNoOfCreditTnx:number = 0;
let totalNoOfDebitTnx:number = 0;

let totalCreditAmount:number = 0;
let totalDebitAmount:number = 0;

let totalAmountInAccount:number = 0

let countTotSuspiciousCredit:number = 0;
let countTotSuspiciousdebit:number = 0;

let totalSuspiciousCreditAmt:number = 0;
let totalSuspiciousDebitAmt:number = 0;

//Iterating through the bank transaction Map and checking the debit and credit amount
for(const [txnNum,amount] of bankTransaction)
{
   // console.log([txnNum,amount]);

   //credit check
    if(amount > 0)
    {
        totalNoOfCreditTnx += 1;
        totalCreditAmount +=amount;

        //Suspicious credit check
        if(amount > 10000)
        {
            countTotSuspiciousCredit +=1;
            totalSuspiciousCreditAmt +=amount;    
        }
    }
    //debit check
    else(amount < 0)
    {
        totalNoOfDebitTnx += 1;
        totalDebitAmount += amount;

        //Suspicious debit check
        if(amount < -10000)
        {
            countTotSuspiciousdebit +=1;
            totalSuspiciousDebitAmt +=amount;    
        }
    }
}
//Print total number of credit and debit transactions completed
console.log("Total Number of credit transaction is : " + totalNoOfCreditTnx);
console.log("Total Number of debit transaction is : " + totalNoOfDebitTnx);

//Print the total amount credited and debited in account
console.log("Total credit amount is : " + totalCreditAmount);
console.log("Total debit amount is : " + totalDebitAmount);

//Print total amount remaining at the end in Bank Account
totalAmountInAccount = totalCreditAmount + totalDebitAmount;
console.log(`Total amount remaining at the end in Bank Account is ${totalAmountInAccount}`);

/*If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions.*/
console.log(`Total Suspicious credit Transaction is ${countTotSuspiciousCredit} And Total Suspicious credit amount is ${totalSuspiciousCreditAmt}`);
console.log(`Total Suspicious credit Transaction is ${countTotSuspiciousdebit} And Total Suspicious credit amount is ${totalSuspiciousDebitAmt}`);
