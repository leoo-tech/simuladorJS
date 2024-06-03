

// simulador emprestimo - sem objeto
// let valorEmprestimo = 397; // valor do empréstimo
// let numeroParcelas = 12; // número de parcelas

// for (let i = 0; i < numeroParcelas; i++) {
//     let valorParcela = valorEmprestimo / (numeroParcelas - i); // calcula o valor da parcela atual
//     valorEmprestimo -= valorParcela; // diminui o valor do empréstimo pelo valor da parcela atual
//     console.log(`Parcela ${i + 1}: ${valorParcela.toFixed(2)}`); // exibe o valor da parcela atual
// };




// simulador emprestimo - com objeto
// let emprestimo = {
//     valorEmprestimo: 297, // valor do empréstimo
//     numeroParcelas: 10 // número de parcelas
// };

// for (let i = 0; i < emprestimo.numeroParcelas; i++) {
//     let valorParcela = emprestimo.valorEmprestimo / (emprestimo.numeroParcelas - i); // calcula o valor da parcela atual
//     emprestimo.valorEmprestimo -= valorParcela; // diminui o valor do empréstimo pelo valor da parcela atual
//     console.log(`Parcela ${i + 1}: ${valorParcela.toFixed(2)}`); // exibe o valor da parcela atual
// }





// //simulador - parcelas iguais - juros no valor total
// let emprestimo = {
//     valorEmprestimo: 2500, // valor do empréstimo
//     numeroParcelas: 24, // número de parcelas
//     taxaJuros: 0.02, // taxa de juros
//     limiteParcelasSemJuros: 6 // limite de parcelas sem juros
// };

// // se o número de parcelas for maior que o limite, aplica a taxa de juros ao valor total do empréstimo
// if (emprestimo.numeroParcelas > emprestimo.limiteParcelasSemJuros) {
//     emprestimo.valorEmprestimo += emprestimo.valorEmprestimo * emprestimo.taxaJuros;
// }

// let valorParcela = emprestimo.valorEmprestimo / emprestimo.numeroParcelas; // calcula o valor da parcela

// console.log(`\n valor total: ${emprestimo.valorEmprestimo.toFixed(2)}\n`);

// for (let i = 0; i < emprestimo.numeroParcelas; i++) {
//     console.log(`Parcela ${i + 1}: ${valorParcela.toFixed(2)}\n`); // exibe o valor da parcela
// }


// simulador com metodos

// criando usuario
class Usuario {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
};

let infoUsuario = new Usuario( // pega as infos do usuario no prompt
    prompt("Insira seu nome completo: "),
    parseInt(prompt("Insira sua idade: ")),
    prompt("Insira seu e-mail ")
);

const usuarios = [infoUsuario];
console.log(usuarios);
// muda a taxa dependendo da idade do usuario
if (infoUsuario.idade >= 17 && infoUsuario.idade <= 30) {
    taxaJuros = 0.02;
} else if (infoUsuario.idade > 30 && infoUsuario.idade <= 50) {
    taxaJuros = 0.04;
} else if (infoUsuario.idade > 50 && infoUsuario.idade <= 65) {
    taxaJuros = 0.05;
} else if (infoUsuario.idade > 65) {
    taxaJuros = 0.07;
} else {
    taxaJuros = 0;  // default taxa de juros se a idade não se enquadrar em nenhuma faixa
};

let emprestimo = {
    valorEmprestimo: parseFloat(prompt("Insira o valor do empréstimo: ")),
    numeroParcelas: parseInt(prompt("Insira o número de parcelas: ")),
    taxaJuros: taxaJuros,
    limiteParcelasSemJuros: parseInt(prompt("Insira o limite de parcelas sem juros: ")),
    calcularValorParcela: function () {
        let valorSemJuros = this.valorEmprestimo / this.numeroParcelas;
        let valorComJuros = (this.valorEmprestimo * this.taxaJuros) / (this.numeroParcelas - this.limiteParcelasSemJuros);

        let parcelas = [];
        for (let i = 0; i < this.numeroParcelas; i++) {
            if (i < this.limiteParcelasSemJuros) {
                parcelas.push(valorSemJuros);
            } else {
                parcelas.push(valorSemJuros + valorComJuros);
            }
        }
        return parcelas;
    }
};

let parcelas = emprestimo.calcularValorParcela();

console.log(`\nValor total do empréstimo: ${emprestimo.valorEmprestimo.toFixed(2)}\n`);

for (let i = 0; i < parcelas.length; i++) {
    console.log(`Parcela ${i + 1}: ${parcelas[i].toFixed(2)}\n`);
}
