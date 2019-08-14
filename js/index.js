//2) Crie uma função que receba um valor e diga se é nulo ou não.

var value = parseFloat(prompt("Digite um valor"));
console.log(value);
function result (value){
  if (isNaN(value)) {
    document.body.append("Este valor é nulo");
  } else {
    document.body.append("Este valor não é nulo");
  }
}
result(value);
