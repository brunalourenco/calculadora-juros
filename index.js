// importando o input em tela
import input from "readline-sync";

// inicia a calculadora
console.log("----- Calculadora de juros -----\n");

// entrada de dados
var valorDivida = Number(input.question("Digite o valor do boleto: "));

//processamento de dados
if (valorDivida < 0) {
  console.log("Boleto em dia, não há pendências .");
  var qtdeDiasAtraso = 0;
} else {
  var qtdeDiasAtraso = Number(
    input.question(
      "Digite a quantidade de dias que se passaram após o vencimento do boleto: "
    )
  );
  if (qtdeDiasAtraso <= 0) {
    console.log("-----------");
    console.log("O boleto está em dia .");
    console.log("-----------");
    var valorComJuros = 0;
    var valorTaxaJuros = 0;
  } else {
    if (qtdeDiasAtraso <= 15) {
      var valorTaxaJuros = 5;
      var valorComJuros = valorDivida + valorDivida * (valorTaxaJuros / 100);
    } else {
      var valorTaxaJuros = 15;
      var valorComJuros = valorDivida + valorDivida * (valorTaxaJuros / 100);
    }
  }
}

// exibe o resultado
console.log("O valor original da dívida: R$ " + valorDivida);
console.log("Dias de atraso: " + qtdeDiasAtraso);
console.log("Taxa de juros:  " + valorTaxaJuros + "%");
console.log("Valor total com juros: " + valorComJuros + "\n");
console.log("-------------");
