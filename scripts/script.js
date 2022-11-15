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

