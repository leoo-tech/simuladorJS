// function verificarPrimo() {
//     var numero;
//     do {
//         numero = prompt("Digite um número: ");
//     } while (isNaN(numero) || numero === '');

//     var ePrimo = true;

//     if (numero < 2) {
//         ePrimo = false;
//     } else if (numero > 2) {
//         var limite = Math.sqrt(numero);
//         for (var i = 2; i <= limite; i++) {
//             if (numero % i === 0) {
//                 ePrimo = false;
//                 break;
//             }
//         }
//     }

//     var resultado = numero + (ePrimo ? " é um número primo." : " não é um número primo.");

//     alert(resultado);
//     console.log(resultado);
// }

// verificarPrimo();






// function converterFahrenheitParaCelsius() {
//     var fahrenheit = prompt("Digite o valor em graus Fahrenheit:");
//     var celsius = (fahrenheit - 32) * 5 / 9;
//     var resultado = fahrenheit + " graus Fahrenheit é igual a " + celsius.toFixed(2) + " graus Celsius.";

//     alert(resultado);
//     console.log(resultado);
// }

// converterFahrenheitParaCelsius();





// function estacaoDoAno() {
//     var mes = prompt("digite o mes: ");
//     mes = mes.toLowerCase();

//     var resultado;

//     switch (mes) {
//         case 'dezembro':
//         case 'janeiro':
//         case 'fevereiro':
//             resultado = 'Verão';
//             break;
//         case 'março':
//         case 'abril':
//         case 'maio':
//             resultado = 'Outono';
//             break;
//         case 'junho':
//         case 'julho':
//         case 'agosto':
//             resultado = 'Inverno';
//             break;
//         case 'setembro':
//         case 'outubro':
//         case 'novembro':
//             resultado = 'Primavera';
//             break;
//         default:
//             resultado = 'Erro: Por favor, insira um mês válido.';
//     }

//     alert(resultado);
//     console.log(resultado);
// }

// estacaoDoAno();



// function calcularSomatorio() {
//     var numero;
//     do {
//         numero = parseInt(prompt("Digite um número:"));
//     } while (isNaN(numero) || numero === '');

//     var somatorio = (numero * (numero + 1)) / 2;

//     var resultado = "O somatório de " + numero + " é " + somatorio + ".";

//     alert(resultado);
//     console.log(resultado);
// }

// calcularSomatorio();



// function calcularCubo() {
//     var numero;
//     do {
//         numero = parseInt(prompt("Digite um número:"));
//     } while (isNaN(numero) || numero === '');

//     var cubo = Math.pow(numero, 3);

//     var resultado = "O cubo de " + numero + " é " + cubo + ".";

//     alert(resultado);
//     console.log(resultado);
// }

// calcularCubo();




// function verificarDivisibilidade() {
//     var numero1, numero2;
//     do {
//         numero1 = parseInt(prompt("Digite o primeiro número:"));
//     } while (isNaN(numero1) || numero1 === '');

//     do {
//         numero2 = parseInt(prompt("Digite o segundo número:"));
//     } while (isNaN(numero2) || numero2 === '');

//     var eDivisivel = numero1 % numero2 === 0;

//     var resultado = "O número " + numero1 + (eDivisivel ? " é" : " não é") + " divisível por " + numero2 + ".";

//     alert(resultado);
//     console.log(resultado);
// }

// verificarDivisibilidade();


// function verificarMes() {
//     var meses = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
//     var numero;
//     do {
//         numero = parseInt(prompt("Digite um número (0 para sair):"));
//         if (isNaN(numero) || numero === '') {
//             alert("Erro: entrada inválida. Por favor, digite um número.");
//         } else if (numero < 0 || numero > 12) {
//             alert("Erro: número fora da faixa de 1 a 12.");
//         } else if (numero >= 1 && numero <= 12) {
//             alert("O número " + numero + " corresponde ao mês " + meses[numero] + ".");
//         }
//     } while (numero !== 0);
// }

// verificarMes();


// const elevado = (base, expoente) => Math.pow(base, expoente);

// console.log(elevado(2, 3)); // 8


// function calculaIdade(anoNascimento, mesNascimento, diaNascimento) {
//     var dataAtual = new Date();
//     var anoAtual = dataAtual.getFullYear();
//     var mesAtual = dataAtual.getMonth() + 1;
//     var diaAtual = dataAtual.getDate();

//     var idade = anoAtual - anoNascimento;

//     if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
//         idade--;
//     }

//     return idade;
// }





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



//simulador com metodos
let emprestimo = {
    valorEmprestimo: 2500, // valor do empréstimo
    numeroParcelas: 24, // número de parcelas
    taxaJuros: 0.02, // taxa de juros
    limiteParcelasSemJuros: 6, // limite de parcelas sem juros
    calcularValorParcela: function () {
        if (this.numeroParcelas > this.limiteParcelasSemJuros) {
            this.valorEmprestimo += this.valorEmprestimo * this.taxaJuros;
        }
        return this.valorEmprestimo / this.numeroParcelas;
    }
};

let valorParcela = emprestimo.calcularValorParcela();

console.log(`\n valor total: ${emprestimo.valorEmprestimo.toFixed(2)}\n`);

for (let i = 0; i < emprestimo.numeroParcelas; i++) {
    console.log(`Parcela ${i + 1}: ${valorParcela.toFixed(2)}\n`); // exibe o valor da parcela
}