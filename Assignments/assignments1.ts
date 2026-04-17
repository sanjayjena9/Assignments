//Assignment 1 – Data Types

//1.Temperature of a city in degrees Celsius: 25.5
let temperature:number = 25.5;
console.log(`Temperature of a city in degrees Celsius: ${temperature}`);

//2.Whether a customer has placed an order: true or false
let isOrderPlaced:boolean = true;
console.log(`Whether a customer has placed an order: ${isOrderPlaced}`);

//3.Person's phone number: "123-456-7890"
let phonenumber:string = "123-456-7890";
console.log(`Person's phone number: ${phonenumber}`);

//4.Amount of money in a customer's bank account: 1000.50
let amount:string = "1000.50";
console.log(`Amount of money in a customer's bank account: ${amount}`);

//5.Person's email address: "john.doe@example.com"
let email:string = "john.doe@example.com";
console.log(`Person's email address: ${email}`);

//6.Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let locationCordinates:string = "37.7749, -122.4194";
console.log(`Coordinates of a location (latitude, longitude): ${locationCordinates}`);

//Using Map
let locationCordinatesExample:Map<string , number> = new Map();
locationCordinatesExample.set("latitude",37.7749);
locationCordinatesExample.set("longitude",-122.4194);
console.log('Coordinates of a location (latitude, longitude):',locationCordinatesExample);

//Using object
let locationCordinatesExampleOne = {
    latitude : 37.7749,
    longitude : -122.4194
}
console.log("Coordinates of a location (latitude, longitude): "+ locationCordinatesExampleOne.latitude , locationCordinatesExampleOne.longitude);

//7.Person's marital status: true or false
let isMaritalStatus:boolean = false;
console.log(`Person's marital status: ${isMaritalStatus}`);

//8.Person's occupation: "Software Engineer"
let occupation:string = "Software Engineer";
console.log(`Person's occupation: "${occupation}"`);

//9.Person's favourite colour: "Blue"
let favouriteColor:string = "Blue";
console.log(`Person's favourite colour: "${favouriteColor}"`);

//10.Current year: 2026
let currentYear:number = 2026;
console.log(`Current year: ${currentYear}`);

//11.Number of followers on a social media platform: 1,000,000
let noOfFollowers:string = "1,000,000";
console.log(`Number of followers on a social media platform: "${noOfFollowers}"`);

//12.Rating of a movie: 7.5
let moiveRating:number = 7.5;
console.log(`Rating of a movie: ${moiveRating}`);

//13.Person's blood type: 'A'
let bloodType:string = "A";
console.log(`Person's blood type: ${bloodType}`);

//14.Title of a book: "To Kill a Mockingbird"
let bookTitle:string = "To Kill a Mockingbird";
console.log(`Title of a book: "${bookTitle}"`);

//15.Number of employees in a company: 500
let noOfEmployee:number = 500;
console.log(`Number of employees in a company: ${noOfEmployee}`);

//16.Time of an event: 2:30 PM
let eventTime:string = "2:30 PM";
console.log(`Time of an event: "${eventTime}"`);

//17.Name of a country: "United States"
let countryName:string = "United States";
console.log(`Name of a country: "${countryName}"`);

//18.Person's eye color: "Brown"
let eyeColor:string = "Brown";
console.log(`Person's eye color: "${eyeColor}"`);

//19.Person's birthplace: "New York City"
let birthPlace:string = "New York City";
console.log(`Person's birthplace: "${birthPlace}"`);

//20.Distance between two cities: 200.5
let distanceBetweenCities:number = 200.5;
console.log(`Distance between two cities: ${distanceBetweenCities}`);