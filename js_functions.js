//demo function
let x = product (2, 3); //function calling
console.log(x);

function product (p1, p2) //function declaration
{
	return p1 * p2;
}

//fahrenheit to celcius
function convert(fahrenheit)
{
	return (5 / 3) * (fahrenheit - 32);
}

let y = convert(20);
console.log(y);

//average
function avg (n1, n2, n3)
{
	let avg = (n1 + n2 + n3) / 3;
	return avg;
}
let z = avg(1, 5, 9);
console.log(z);