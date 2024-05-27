let emprestimo = {
    valorEmprestimo: parseFloat(prompt("Insira o valor do empréstimo:")), // valor do empréstimo
    numeroParcelas: parseInt(prompt("Insira o número de parcelas:")), // número de parcelas
    idade: parseInt(prompt("Idade: ")), // idade para a verificação da condição ao determinar a taxa de juros
    limiteParcelasSemJuros: parseInt(prompt("Insira o limite de parcelas sem juros:")), // limite de parcelas sem juros
};

// Agora que o objeto `emprestimo` foi inicializado, podemos adicionar as propriedades que dependem de outras propriedades do objeto.
// condição para alterar taxa de juros baseado no intervalo da idade informada
if (emprestimo.idade >= 18 && emprestimo.idade <= 25) {
    emprestimo.taxaJuros = 0.01;
} else if (emprestimo.idade >= 26 && emprestimo.idade <= 35) {
    emprestimo.taxaJuros = 0.02;
} else if (emprestimo.idade >= 36 && emprestimo.idade <= 45) {
    emprestimo.taxaJuros = 0.03;
} else {
    emprestimo.taxaJuros = 0.04;
}

// Aplicar a taxa de juros ao valor total do empréstimo se o número de parcelas for maior que o limite de parcelas sem juros
if (emprestimo.numeroParcelas > emprestimo.limiteParcelasSemJuros) {
    emprestimo.valorEmprestimo += emprestimo.valorEmprestimo * emprestimo.taxaJuros;
}

emprestimo.calcularValorParcela = function () {
    return this.valorEmprestimo / this.numeroParcelas;
};

alert(`\n valor total: ${emprestimo.valorEmprestimo.toFixed(2)}\n`);
console.log(`\n valor total: ${emprestimo.valorEmprestimo.toFixed(2)}\n`);


let parcelasInfo = '';
for (let i = 0; i < emprestimo.numeroParcelas; i++) {
    let valorParcela = emprestimo.calcularValorParcela();
    parcelasInfo += `Parcela ${i + 1}: ${valorParcela.toFixed(2)}\n`; // alerta exibindo o valor da parcela
    console.log(`Parcela ${i + 1}: ${valorParcela.toFixed(2)}\n`); // exibe o valor da parcela
}

alert(parcelasInfo);