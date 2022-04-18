// console.log('hello');
//alert('yooo');

//this is a comment

//variables
// var b = 'smoothie';
// console.log(b);

// var someNumber = 25;
// console.log(someNumber);

// var age = prompt('What is your age?');

// document.getElementById('text').innerHTML = age;

//numbers in Javascript
// var num1 = 10;
// num1 = num1 + 10;

//increment num1 by 1
// num1 ++;

//decrement num1 by 1
// num1 --;
// console.log(num1);
// console.log(num1);

//increment or decrement by any number
// num1 = 10;
// num1 += 10;
// console.log(num1);

/*Functions
1. create a function
2. call the function
*/

// function fun() //function create
// {
// 	console.log('This is a function');
// }

// fun(); //function call

// function greet()
// {
// 	var name = prompt('What is your name?');
// 	var result = 'Hello' + ' ' + name; //string concatenation
// 	console.log(result);

// }

//greet();

//how do arguments work in functions?
//how do we add two numbers in function?

// function sumNum(num1, num2)
// {
// 	var result = num1 + num2;
// 	console.log(result);
// }

// sumNum(10, 10);

//while loops

// var num = 0;
// while(num < 100)
// {
// 	num += 1;
// 	console.log(num);
// }

//for loop
// for(let num = 0; num <= 100; num ++)
// {
// 	console.log(num);
// }

//datatypes
// let age = 18; //number
// let yourName = 'Bob'; //string
// let name = {first: 'Hannah', last: 'Nielsen'}; //object
// let truth = false; //boolean
// let groceries = ['apple', 'banana', 'carrot']; //array
// let random; //undefined
// let nothing = null; //value null

//strings (common methods)
// let fruit = 'banana, apple, carrot, milk';
// let moreFruits = 'banana\napple'; //new line
// console.log(moreFruits);
// console.log(fruit.indexOf('nan'));
// console.log(fruit.slice(2, 6));
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.toUpperCase(fruit));
// console.log(fruit.toLowerCase(fruit));
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(',')); //split by a comma
// console.log(fruit.split('')); //split by a character

//array
// let fruits = ['banana', 'apple', 'orange', 'pineapple'];
// fruits = new Array('banana', 'apple', 'orange', 'pineapple');

// console.log(fruits[2]); //access value at index 2nd

// fruits[0] = 'pear';
// console.log(fruits);

// for(let i = 0; i < fruits.length; i ++)
// {
// 	console.log(fruits[i]);
// }

//array common methods
// console.log('to string', fruits.toString());
// console.log(fruits.pop(), fruits); //removes last item
// console.log(fruits.push('blackberry'), fruits); //appends
// console.log(fruits[4]);
// fruits[4] = 'new fruit';
// console.log(fruits);
// fruits.shift(); //removes first element from a list
// fruits.unshift('kiwi'); //add first element to an array
// console.log(fruits);

// let vegetables = ['asparagus', 'tomato', 'broccoli'];
// let allGroceries = fruits.concat(vegetables);
// console.log(allGroceries);
// console.log(allGroceries.slice(1,4));
// console.log(allGroceries.reverse());
// console.log(allGroceries.sort());

// let numbers = [5, 10, 15, 4, 8, 1, 12, 9, 1];
// console.log(numbers.sort(function(a ,b){return a - b})); //ascending order
// console.log(numbers.sort(function(a ,b){return b - a})); //descending order

// let emptyArray = new Array();
// for(let num = 0; num <= 10; num ++)
// {
// 	emptyArray.push(num);
// }
// console.log(emptyArray);

//objects in Javascript

// let student =
// {
// 	first: 'Aashish',
//     last: 'Shrestha',
//     age: 25,
//     height: 125,
//     studentInfo: function()
//     {
//     	return this.first + '\n' + this.last + '\n' + this.age;
//     }
// };

// console.log(student.first);
// console.log(student.last);
// student.first = 'notme';
// console.log(student.first);
// student.age ++;
// console.log(student.age);
// console.log(student.studentInfo());

//conditionals, control flow (if else)
//18-15 is my target demographic
// var age = prompt('What is your age?');
// if((age >= 18) && (age <= 35))
// {
//      status = 'target demo';
//      console.log(status);
// }
// else
// {
// 	status = 'not my audience';
// 	console.log(status);
// }

//switch statements
//differentiate between weekday and weekend
//day 0 --> Sunday
//day 6 --> Saturday -->
//day 4 --> Thursday -->Weekday

// switch(2)
// {
// 	case 0:
// 	    text = 'Weekend';
// 	    break;
// 	case 5:
// 	    text = 'Weekend';
// 	    break;
// 	case 6:
// 	    text = 'Weekend';
// 	    break;
// 	default:
// 	    text = 'Weekday';
// }

// console.log(text);

// var option = prompt('Enter the date');
// switch(option)
// {
// 	case 1:
// 	    text = 'Sunday';
// 	    break;
// 	case 3:
// 	    text = 'Tuesday';
// 	    break;
// 	case 6:
// 	    text = 'Friday';
// 	    break;
// 	case 7:
// 	    text = 'Saturday';
// 	    break;
// }

// console.log(text);


