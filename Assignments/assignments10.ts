
//array prices for the stock
const prices:number[] = [7,1,5,3,6,4];  //output : The maximum profit is 5.
//const prices:number[] = [7,6,4,3,1]; //output : The maximum profit is 0.
//const prices:number[] = [7]; //output : The maximum profit is 0.

let maxProfitAfterSelling:number = calculateMaxProfit(prices);
console.log(`The maximum profit is ${maxProfitAfterSelling}.`);

//Logic of the calculateMaxProfit() function

function calculateMaxProfit(prices:number[]):number
{
    //if only 1 day price is given then not able to derive the profit/loss
    if (prices.length <2)
    {
        return 0;
    }

    let maxProfit:number = 0;

    //Lets always consider the first element of the prices array as buy price
    let buyPrice:number = prices[0];

    //Traverse the prices array from 2nd day - price and compare to calculate the profit
    //and change the buy price as minimum price from the array
    for(let i:number=1 ; i<prices.length;i++)
    {
        let currentDayPrice:number = prices[i];
        let profit:number = currentDayPrice - buyPrice;

        //Assign profit to the MaxProfit if the profit is positive
        if (profit > maxProfit)
        {
            maxProfit = profit;
        }

        //Update the minimum price to buyPrice
        if (currentDayPrice < buyPrice)
        {
            buyPrice = currentDayPrice;
        }
    }


    return maxProfit;
}
