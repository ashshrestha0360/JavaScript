//string length
let txt = "Kathmandu";
console.log(txt.length);

//slice() method slice() extracts a part of a string and returns the extracted part in a new string.
let str = "I love Nepal";
console.log(str.slice(7,12)); //returns Nepal
console.log(str.slice(-5));

//substring() method
console.log(str.substring(7, 12));

//substr() method  
//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
let fruits = "Apple, Banana, Kiwi";
console.log(fruits.substr(7, 6));


