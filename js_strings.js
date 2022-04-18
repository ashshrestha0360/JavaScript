//string examples
let myName = "I love music";

//string length
let text = "Hetauda";
console.log(text.length); //returns 7

//escape character
let sentence = "We are the so-called \"Vikings\" from the north.";
console.log(sentence);
let sentence2 = 'I\'m fine today.';
console.log(sentence2);

//string as an object
let x = "Ram"; //type is string
let y = new String("Ram"); //type is object
// console.log(typeof(x));
// console.log(typeof(y));
console.log(x == y); //returns true because x and y have equal value
console.log(x === y); //returns false because x and y have same value but different types

//objects cannot be compared
let m = new String("Ram");
let n = new String("Ram");
console.log(m == n);
console.log(m === n);