/*Given a number n, determine whether it is a prime number or not. 
A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.*/

function checkPrimeNumberOrNot(num:number)
{
    if(num <=1)
    {
        console.log(`The given number ${num} is not a prime number`);
    }
    else
    {
        let isPrime:boolean = true;
        for(let i:number=2; i< num; i++)
        {
            if(num % i === 0)
            {
                isPrime = false;
                break;
            }
        }
        if(isPrime)
        {
            console.log(`The given number ${num} is a prime number`);
        }
        else
        {
            console.log(`The given number ${num} is not a prime number`);
        }
    }
}

//Calling the fuction
checkPrimeNumberOrNot(7);

checkPrimeNumberOrNot(25);

checkPrimeNumberOrNot(1);