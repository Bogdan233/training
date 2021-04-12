// Remove even numbers from an array and return the new array

const x = [10, 44, 45, 77, 81, 20, 70];

function removeitems(x) {
  let y = [];
  for (let index = 0; index < x.length; index++) {
    if (x[index] % 2 !== 0) {
      y.push(x[index]);
    }
  }
  console.log(y);
  return y;
}
removeitems(x);

export { removeitems };
