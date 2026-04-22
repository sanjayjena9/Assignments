/*(Arrays/Datatypes/Operators)

1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0*/

let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];    
let marksofStudent: number[] = [75, 80, 82];
let modifiedStudentMarks: number[] = [];
const extraMark:number = 10;

//Iterate all elements of student marks and add the extra 10 marks
for(let i:number = 0;i<marksofStudent.length;i++)
{
   let updatedMarks:number = marksofStudent[i] 
   updatedMarks = updatedMarks += extraMark;
   modifiedStudentMarks.push(updatedMarks);
}

//Modified marks of the student
console.log(`Modifed Student Marks: [${modifiedStudentMarks}]`);
console.log("Updated Marks: ");

for(let k:number = 0;k<studentNames.length;k++)
{
   console.log(`${studentNames[k]} : ${modifiedStudentMarks[k]}`);
}

//Average marks of all students
let totalMarks:number = 0;
for(let m:number = 0;m<modifiedStudentMarks.length;m++)
{
    totalMarks += modifiedStudentMarks[m];
}
let averageMarks:number = totalMarks / modifiedStudentMarks.length;
console.log(`Average Marks: ${averageMarks}`);
