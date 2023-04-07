// question # 1

// let userInput1 = +prompt("Enter First Number");
// let userInput2 = +prompt("Enter Second Number");

// if (userInput1 > userInput2) {
//     console.log(userInput1 + " is greter than " + userInput2)
// }
// else if (userInput2 > userInput1) {
//     console.log(userInput2 + " is greter than " + userInput1)
// }


// question # 2

// let userInput = +prompt("Enter a number");

// if (userInput > 0) {
//     alert("The sign is +")
// }
// else if (userInput < 0) {
//     alert("The sign is -")
// }


// question # 3

// let userInput1 = +prompt("Enter First Number");
// let userInput2 = +prompt("Enter Second Number");
// let userInput3 = +prompt("Enter Third Number");
// let userInput4 = +prompt("Enter Fourth Number");
// let userInput5 = +prompt("Enter Fifth Number");

// if (userInput1 > userInput2) {
//     console.log(userInput1 + " is greter than " + userInput2)
// }
// else if (userInput2 > userInput3) {
//     console.log(userInput2 + " is greter than " + userInput3)
// }
// else if (userInput3 > userInput4) {
//     console.log(userInput3 + " is greter than " + userInput4)
// }
// else if (userInput5 > userInput1) {
//     console.log(userInput5 + " is greter than " + userInput1)
// }
// else if (userInput1 > userInput4) {
//     console.log(userInput1 + " is greter than " + userInput4)
// }


// question # 4

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        document.write(i + " is even", "<br>")
    }
    else if (i % 2 !== 0) {
        document.write(i + " is odd", "<br>")

    }
}
document.write("<br>" + "<br>")

// question # 5


// let stdUser = +prompt("Enter your marks");

// if (stdUser > 90 && stdUser <= 100) {
//     console.log("A Grade")
// }
// else if (stdUser > 80 && stdUser <= 90) {
//     console.log("B Grade")
// }
// else if (stdUser > 70 && stdUser <= 80) {
//     console.log("C Grade")
// }
// else if (stdUser >= 60 && stdUser <= 70) {
//     console.log("D Grade")
// }
// else if (stdUser < 60) {
//     console.log("Fail")
// }
// else {
//     console.log("Please enter your marks in number")
// }


// question # 6

for (let i = 1; i <= 100; i++) {

    if (i % 3 !== 0 && i % 5 !== 0) {
        document.write(i, "<br>");
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        document.write("FizzBuzz", "<br>");
    }

    else if (i % 3 === 0) {
        document.write("Fizz", "<br>");

    }
    else if (i % 5 === 0) {
        document.write("Buzz", "<br>");
    }

}


// question # 7

for(let i =1; i<=5; i++){
for(let j = 1; j<=i; j++){
  document.write("*" + " ")
}
document.write( "<br>")
}