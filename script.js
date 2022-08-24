const CALC = function(operation,n1,n2) {
    return operation(n1,n2);
}
const SOMA = function(n1,n2){
    return n1 + n2;
}

const SUB = function(n1,n2){
    return n1 - n2;
}
const RESULTSOMA = CALC(SOMA,150,350);
const RESULTSUB = CALC(SUB,1500,500);
console.log(RESULTSOMA);
console.log(RESULTSUB);