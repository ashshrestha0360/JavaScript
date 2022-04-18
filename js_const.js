//This gives syntax error 
// const pi;
// pi = 3.14;
// console.log(pi);

//This is correct the way using const
const pi = 3.14;
console.log(pi);

//block scope
const a = 5;
{
    const a = 10;
}
console.log(a);
