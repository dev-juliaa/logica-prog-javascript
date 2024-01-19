alert ("Boas vindas ao nosso site");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 a ${numeroMaximo}`);
    if (chute == numeroSecreto){
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`o numero secreto é menor que ${chute}`);
        } else {
            alert(`o numero secreto é maior que o ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ?  "tentativas" : "tentativa";
alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// 
// if(tentativas > 1){
// alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
    // alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);

// }