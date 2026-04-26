/*

Write a program to print * in triangle pattern
1. If I will pass int rows = 5 then it should print triangle with 5 Rows.

        *
      * *
    * * *
  * * * *
* * * * *

*/
const rows:number = 5;
printStarTriange(rows);

function printStarTriange(rows:number):void
{
    for(let i:number=1; i<=rows; i++)
    {
        const stars = "* ".repeat(i);
        console.log(stars);
    }
}
