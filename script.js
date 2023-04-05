//STRING METHODS...

//javascript length property:gives the length of a string

let name1 ="deepu,raji";
let length = name1.length;

let java = "typescript/n";
let type = java.length;

//SPLICE() change

let val = "hello world"
val.slice(0, 2); //in 2nd index added 1 value"34"
console.log(val);

const array1=[1,2,3,4,5,6];
console.log(array1.splice(3));

// SLICE
let newval = val.slice(3);
console.log(newval);

//string to toUpperCase
let U = name1.toUpperCase();
console.log(U);

//string to lowercase
let str = "DIPIKA";
let m = str.toLowerCase();

//replace
let letters = "sam";
let newletters = letters.replace("sam", "ram");

//replaceall

let topic = "we are all going to office , so office is in raidurg";
topic = topic.replaceAll("office", "school");

//string trim()
let text1 = "   hello everyone     ";
let text2 = text1.trim();

//trimstart()

let text3 = "    hello everyone";
let text4 = text3.trimStart();

//trimend()
let l = "hjjjjjjjhgfh        ";
let tend = l.trimEnd();  

let plans = "ASAS" + "BAS" + "CAS";
console.log(plans[0]);
console.log(plans[1]);
console.log(plans[2]);
console.log(plans[7]);

//to concatinate
let num1 = "1, 2, 3, 4";
let num2 = "5, 6, 7, 8";
let num3 = "5, 6, 7, 8";
let numbers = num1.concat(num2,num3);

//2nd example
const name2 = "ram";
let frnd = "sam";
console.log(name2.concat(" ", "is a friend of", " ", frnd));

//indexof()

let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");
let result1 = text.indexOf("Welcome");

//search method
//The search() method returns the index (position) of the first match.
//The search() method returns -1 if no match is found.
//The search() method is case sensitive.

let blue = "Mr. Blue has a blue house";
let position = blue.search("Blue");

//CharAt method()
let char = "she came to hyderabad";
const A = char.charAt(10);
console.log(A);


//fromCharCode()
const value = String.fromCharCode(110);
console.log(value);

//substring()
let store = "javascript is a framework";
let give = store.substring(0, 2);
console.log("substring", give);

//substr()
let wish = "Hello world!";
let results=wish.substr(2);

// let nameTag = "some";
// console.log("substring ", nameTag.substring(9));
console.log("substring without index", nameTag.substring());

//split method

const string = "javascript is a great language";
let value2 = string.split("");
