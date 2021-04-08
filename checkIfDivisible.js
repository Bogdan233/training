// Function that checks if numbers up to x are divisible by 5 and 7 and prints the number, else prints a mesage

function checkIfDivisible(x){
    let index;
    for (let index = 0; index <= x; index++) {
        if (index % 5==0 && index % 7==0) {
            console.log(index)
        } else {
            console.log("Not Divisible by 5 and 7")
        }
    }
}

checkIfDivisible(1000)
