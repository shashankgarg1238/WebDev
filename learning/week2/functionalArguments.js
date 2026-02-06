function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    let val = op(a,b);
    return val;
  }
  
  console.log(doOperation(1, 2, sum))
  console.log(doOperation(10, 2, multiply))