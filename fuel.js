/*
A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
Create a function which calculates the amount of fuel it needs, given the distance.
*/

function fuel(km){
    let sum = km * 10
    if (sum > 100) {
        console.log(sum)
        return sum
    }else{
        console.log(100)
        return 100
       
    }    
}

fuel(10)
fuel(9.9)
fuel(500)
