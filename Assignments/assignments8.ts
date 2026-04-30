/*
Write a program to search for all occurrences of a “Java” word in the paragraph and print their indexes.

1. Find total number of occurrences
2. Print count and Indexes of the word

String paragraph = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
*/

//1. Find total number of occurrences of word "Java" in the paragraph

const paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let countWord:number = 0;
let searchWord:string = "Java";
countWord = countWordsInParagrah(paragraph);

console.log(`Total number of occurrences of word "${searchWord}" is ${countWord}.`);

function countWordsInParagrah(paragraph:string):number{
    let splitParagraph:string[] = paragraph.split(" ");
    console.log(splitParagraph);
    for(const word of splitParagraph)
    {
        if(word === searchWord || "java")
        {
            countWord +=1;
        }
    }
    return countWord;
}

//2. Print count and Indexes of the word

console.log("Print count and Indexes of the word in the paragraph : Java is a popular programming language. Java is used for web development, mobile applications, and more.")
const paragraph1:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let splitParagraph1:string[] = paragraph1.split(" ");
//console.log(splitParagraph1);
let countofWord:number = 0;
let indexOfWord:number = 0;

for (let i:number = 0;i<=splitParagraph1.length-1;i++)
{
    countofWord = countofWord + 1;
    indexOfWord = splitParagraph1.indexOf(splitParagraph1[i]);
    console.log(`Indexes of the word "${splitParagraph1[i]}" is ${indexOfWord}.`);
}
console.log(`The count of index is ${countofWord}.`);

/*
const paragraph: string =
    "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

const words: string[] = paragraph.split(" ");

// Get total count and index of 'Java' words
let count: number = 0;

for (let i: number = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "java") {
        console.log("Java word is present in Array with Index : " + i);
        count++;
    }
}

console.log("Total words with Java are : " + count);

export {};
*/


