alert ("Boas vindas ao nosso site");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número de 1 a 10");
    if (chute == numeroSecreto){
        alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if(chute > numeroSecreto){
            alert(`o numero secreto é menor que ${chute}`);
        } else {
            alert(`o numero secreto é maior que o ${chute}`);
        }
        tentativas++;
    }
}