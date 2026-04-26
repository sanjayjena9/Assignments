/*
    Write a program to perform the following tasks:

    1. Count the total number of words in the sentence.
    2. Print the sentence words in reverse order.
    3. Convert the first character of each word to uppercase and print original sentence

    String sentence = "Java programming is fun and challenging";
*/

//1. Count the total number of words in the sentence.
console.log("1. Count the total number of words in the sentence.")

let originalSentence:string = "Java programming is fun and challenging";
let splitString: string[] = originalSentence.split(" ");
console.log(splitString);
let countNoOfWords:number = splitString.length;
console.log(`The total number of words in the sentence "${originalSentence}" is ${countNoOfWords}`);

 //2. Print the sentence words in reverse order.
 console.log("2. Print the sentence words in reverse order.")
 
 console.log(reverseTheSentence(originalSentence));

 function reverseTheSentence(sentence:string):string
 {
    let splitOriginalSetence:string [] = originalSentence.split(" ")
    console.log(splitOriginalSetence);
    let reverseSentence:string[] = [];
    reverseSentence = splitOriginalSetence.reverse()
    console.log(reverseSentence);
    let reverseSentenceAfterJoin:string = reverseSentence.join(" ");
    return reverseSentenceAfterJoin;
 }

  //3. Convert the first character of each word to uppercase and print original sentence
  //Input : sentence = "Java programming is fun and challenging";
  //Output : outputSentence = "Java Programming Is Fun And Challenging";
  console.log("3. Convert the first character of each word to uppercase and print original sentence : Java programming is fun and challenging");

  let sentence:string = "Java programming is fun and challenging";
  let splitSentence:string[] = sentence.split(" ");
  let finalSentence:string[] = [] ;

  for(let i:number=0;i<=splitSentence.length-1;i++)
  {
    let eachWordInSentence = splitSentence[i];
    let firstChar:string = eachWordInSentence.charAt(0).toUpperCase();
    let restofChar:string = eachWordInSentence.substring(1);
    let finalString:string = firstChar+restofChar;
    //console.log(finalString);
    if (i===0)
    {
        finalSentence[i] =  finalString;
    }
    else
    {
        finalSentence.push(finalString);
    }
  }
  console.log(finalSentence.join(" "));

 