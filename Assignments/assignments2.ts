/*
A bank evaluates loan applicants based on the following criteria:

1. Credit Score:
    If the credit score is above 750, the loan is automatically approved.
    If the credit score is between 650 and 750, additional checks are performed.
    If the credit score is below 650, the loan is denied.

2. Income: 
    For credit scores between 650 and 750, the customer’s income must be at least $50,000 for the loan to be considered.

3. Employment Status: 
    If the customer’s income is at least 50,000, the system checks whether the customer is employed.
    If the customer is unemployed, the loan is denied.

4. Debt-to-Income Ratio:
    If the customer is employed, the system checks the debt-to-income (DTI) ratio.
    If the DTI ratio is less than 40%, the loan is approved.
    If the DTI ratio is 40% or greater, the loan is denied.

Create common function and then based on below details, print whether user is eligible to get the loan or not
customerName = "John Doe";
creditScore = 720;
income = 55000.0;
isEmployed = true;
debtToIncomeRatio = 35.0; */

//Solution

let customerName:string = "John Doe";
let creditScore:number = 720;
let income:number = 55000;
let isEmployed:boolean = true;
let debtToIncomeRatio:number = 35;

let isEligibleForLoan:string =  isCustomerEligibleForLoan(customerName, creditScore, income, isEmployed, debtToIncomeRatio);
console.log(`Customer is : ${isEligibleForLoan}`);

function isCustomerEligibleForLoan(customerName: string, creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number): string {
        //Credit score check
        if (creditScore > 750)
        {
            return `${customerName} : Loan is approved. You have a good credit score.`;
        }
        else if(creditScore < 650)
        {
            return `${customerName} : Loan is denied. You have not a good credit score.`;
        }
        else //If the credit score is between 650 and 750, additional checks are performed.
        {
            if(income < 50000)
            {
                 return `${customerName} : Loan is denied. Income must be at least $50,000 for the loan to be considered.`;
            }
            else if(income >= 50000)
            {
                if(isEmployed)
                {
                    if(debtToIncomeRatio<40)
                    {
                        return `${customerName} : Loan is approved.`;
                    }
                    else
                    {
                        return `${customerName} : Loan is denied.`;
                    }
                }
                else
                {
                     return `${customerName} : Loan is denied. Employee is unemployed.`;
                }
            }
        }
        return `${customerName} : Loan decision could not be determined.`;
}
