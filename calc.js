// var nb1 = 10;
// var nb2 = 2;
// var result = 0;


// function add() {
// var r = nb1 + nb2;
// console.log(r);

// }

// function multiply() {
//     var r = nb1 * nb2;
//     console.log(r);
// }

// function divide() {
//     var r = nb1 / nb2;
//     console.log(r);
// }

// function substract() {
//     var r = nb1 - nb2;
//     console.log(r);
// }

// add();
// multiply();
// divide();
// substract();

function btnplus() {
    Calculator.display.value += "+";

    Calculator.display.style.textAlign = "right";
}

function btnsub() {
    Calculator.display.value += "-";

    Calculator.display.style.textAlign = "right";
}

function btnmult() {
    Calculator.display.value += "*";

    Calculator.display.style.textAlign = "right";
}



function btndiv() {
    Calculator.display.value += "/";

    Calculator.display.style.textAlign = "right";
}

function btnclear() {
    Calculator.display.value = "";

    Calculator.display.style.textAlign = "right";
}