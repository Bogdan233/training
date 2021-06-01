// Convert a given age to the number of days, take in consideration leap years

function ageToDays(age) {
  let days = 365;
  let partial = age * days;
  let result = Math.floor(age / 4) + partial;
  console.log(result);
  return result;
}

ageToDays(74);
