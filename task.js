"use strict";
function solveEquation(a, b, c) {
  let arr;
  let d = Math.pow(b, 2)-4*a*c;
  if (d !== 0) {
    if (d < 0) {
      arr = [];
    } else {
      arr = [(-b + Math.sqrt(d))/(2*a), ((-b - Math.sqrt(d))/(2*a))];
    }
  } else {
    arr = [-b/2*a];
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
