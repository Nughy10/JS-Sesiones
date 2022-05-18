
function rollDice(numCaras){
    let resultado = Math.ceil(Math.random() * numCaras);
    return resultado;
}


console.log("rollDice 6", rollDice(6)) ;
console.log("rollDice 20", rollDice(20));
console.log("rollDice 2", rollDice(2));