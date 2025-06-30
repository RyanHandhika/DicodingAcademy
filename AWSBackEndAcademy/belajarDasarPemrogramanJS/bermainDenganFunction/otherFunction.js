/*

=> Selain function declaration, terdapat beberapa jenis function lain nya, seperti:
-> function expression
-> arrow function

Note: 
  Untuk masing-masing funtion ada berbeda di cara penulisan nya, selebih hampir sama dengan function declarasi

*/

// function declaratio
function declarationFunction() {
  return "Ini cara menuliskan function declaration";
}

// function expression
// menjadikan function sebagai expression dari sebuah statement
const expressionFunction = function () {
  return "Ini cara menuliskan function expression";
};

// arrow function
// mengganti keyword ( function ) dengan tanda ( => )
const arrowFunction = () => {
  return "Ini cara menuliskan function arrow";
};
