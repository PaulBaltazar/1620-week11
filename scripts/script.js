// function greet(user)
// {
//     console.log(`Hello ${user}`)
//     console.log('Hello' + user);
// }

// greet("Paul");

// const greet = function (user)
// {
//     console.log(`Hello ${user}`)
// }

// greet("Paul")


const greet = function (user, time = "day")
{
    console.log(`Good ${time} ${user}`)
    // console.log(`Hello ${user}`)
}
greet("Paul");
greet("Paul", "Night", "Morning")
// greet("Paul", "Night"); order matters


// return statement activity
// let r = prompt("Enter a radius.");
// console.log(r)

// function circleArea (radius)
// {
//     return Math.PI * radius * radius;
// }

// let area = circleArea(r).toFixed(2); 
// // Math.round
// alert(`The area of a circle with a radius ${r} is ${area}`)

//document.getElementId() - text content
let r = prompt("Enter a radius.");
console.log(r)

function circleArea (radius)
{
    const radiusP = document.querySelector("#radius");
    const resultP = document.querySelector("#result");
    radius.textContent =radius;
    let calculatedArea = Math.PI * radius * radius;
    resultP.textContent = calculatedArea
    return calculatedArea;
}

let area = circleArea(r).toFixed(2); 

alert(`The area of a circle with a radius ${r} is ${area}`)

