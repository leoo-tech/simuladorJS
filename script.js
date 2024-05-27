//simulador com metodos
let emprestimo = {
    valorEmprestimo: parseFloat(prompt("Insira o valor do empréstimo:")), // valor do empréstimo
    numeroParcelas: parseInt(prompt("Insira o número de parcelas:")), // número de parcelas
    idade: parseInt(prompt("Idade: ")), // idade para a verificação da condição ao determinar a taxa de juros
    taxaJuros: emprestimo.taxaJuros, // taxa de juros
    limiteParcelasSemJuros: parseInt(prompt("Insira o limite de parcelas sem juros:")), // limite de parcelas sem juros
    calcularValorParcela: function () {
        if (this.numeroParcelas > this.limiteParcelasSemJuros) {
            this.valorEmprestimo += this.valorEmprestimo * this.taxaJuros;
        }
        return this.valorEmprestimo / this.numeroParcelas;
    }
};


// condição para alterar taxa de juros baseado no intervalo da idade informada
if (idade >= 18 && idade <= 25) {
    emprestimo.taxaJuros = 0.01;
} else if (idade >= 26 && idade <= 35) {
    emprestimo.taxaJuros = 0.02;
} else if (idade >= 36 && idade <= 45) {
    emprestimo.taxaJuros = 0.03;
} else {
    emprestimo.taxaJuros = 0.04;
}


let valorParcela = emprestimo.calcularValorParcela();

alert(`\n valor total: ${emprestimo.valorEmprestimo.toFixed(2)}\n`);
console.log(`\n valor total: ${emprestimo.valorEmprestimo.toFixed(2)}\n`);

for (let i = 0; i < emprestimo.numeroParcelas; i++) {
    alert(`\n valor total: ${emprestimo.valorEmprestimo.toFixed(2)}\n`); // alerta exibindo o valor da parcela
    console.log(`Parcela ${i + 1}: ${valorParcela.toFixed(2)}\n`); // exibe o valor da parcela
}