
//store all values of employee details in an Array from employee table

let empName: string[] = ["Alice Johnson","Bob Smith","Carol Davis","David Brown","Eva Green"];
let baseSalary: number[] = [75000, 68000,82000,90000,60000];
let experienceInYears: number[] = [5.1, 3.2, 7.1, 10.2, 2.4];
let yearEndRating: number[] = [4.2, 3.8, 4.5,2.5, 3.5];

let employeeHikeAndPercentage: Map<string,string>= new Map();

for(let i=0;i<empName.length;i++)
{
    let variablePay:number = 0;
    let bonus = 0;

    let extraPerks:number = 0;

    if(yearEndRating[i]>=4.0)
    {
        variablePay = 15;
        bonus = 1500;
    }
    else if(yearEndRating[i]>=3.0 && yearEndRating[i]<4.0)
    {
        variablePay = 10;
        bonus = 1200; 
    }
    else
    {
        variablePay = 3;
        bonus = 300; 
    }

    //Extra Perks
    if(experienceInYears[i] >= 5)
    {
        extraPerks = 5000;
    }

    //calculate Hike = ( Base Salary * variable pay % ) + Bonus + Reward
    let hike:number = 0;
    hike = (baseSalary[i] * variablePay/100) + bonus + extraPerks;
    //console.log(hike);

    //Calculate Hike % = Hike / Base Salary .
    let hikePercentage:number = 0;
    hikePercentage = ((hike / baseSalary[i])*100);

    //Set the value of Employee Hike in a Map
    employeeHikeAndPercentage.set(empName[i] , hikePercentage.toFixed(2));
}

//Print the Employee Name and Hike Percentage
console.log("EmployeeName and Hike Percentage Value")
console.log("***************************************")
 for(const [EmpName ,hikePercentageValue] of employeeHikeAndPercentage)
    {
        console.log(`${EmpName} : ${hikePercentageValue}`);
    }

