// Sum the elements of an array and return the average

function average(x) {
  let index;
  let sum = 0;
  for (let index = 0; index < x.length; index++) {
    sum += x[index];
  }
  return sum / x.length;
}

console.log(average((x = [20, 45, 44, 4, 1])));
