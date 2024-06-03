//simulador com metodos

const formulario = document.getElementById("formularioEmprestimo");
const resultadoDiv = document.getElementById("resultadoEmprestimo");

function calcularEmprestimo() {




    // Validação das entradas
    let valorEmprestimo, numeroParcelas, idade, limiteParcelasSemJuros;

    do {
        valorEmprestimo = parseFloat(prompt("Insira o valor do empréstimo (maior que zero):"));
    } while (isNaN(valorEmprestimo) || valorEmprestimo <= 0);

    do {
        numeroParcelas = parseInt(prompt("Insira o número de parcelas (maior que zero):"));
    } while (isNaN(numeroParcelas) || numeroParcelas <= 0);

    do {
        idade = parseInt(prompt("Insira sua idade (entre 18 e 120 anos):"));
    } while (isNaN(idade) || idade < 18 || idade > 120);

    do {
        limiteParcelasSemJuros = parseInt(prompt("Insira o limite de parcelas sem juros (maior ou igual a zero):"));
    } while (isNaN(limiteParcelasSemJuros) || limiteParcelasSemJuros < 0);






    // Cálculo da taxa de juros
    let taxaJuros;
    if (idade >= 18 && idade <= 25) {
        taxaJuros = 0.01;
    } else if (idade >= 26 && idade <= 35) {
        taxaJuros = 0.02;
    } else if (idade >= 36 && idade <= 45) {
        taxaJuros = 0.03;
    } else {
        taxaJuros = 0.04;
    }





    // Aplicação da taxa de juros
    if (numeroParcelas > limiteParcelasSemJuros) {
        valorEmprestimo += valorEmprestimo * taxaJuros;
    }

    // Cálculo do valor da parcela
    const valorParcela = valorEmprestimo / numeroParcelas;





    // Escolha da data da primeira parcela
    let dataPrimeiraParcela;
    do {
        const dataInput = prompt("Insira a data da primeira parcela (formato DD/MM/AAAA):");
        const [dia, mes, ano] = dataInput.split('/');
        dataPrimeiraParcela = new Date(ano, mes - 1, dia);
    } while (isNaN(dataPrimeiraParcela));



    // Limita a data da primeira parcela em até 1 ano a partir da data atual
    const hoje = new Date();
    const dataMaxima = new Date();
    dataMaxima.setFullYear(hoje.getFullYear() + 1);
    const dataPrimeiraParcelaInput = document.getElementById("dataPrimeiraParcela");
    dataPrimeiraParcelaInput.max = dataMaxima.toISOString().split('T')[0]; // Define o atributo max do input


    // Cálculo das datas de vencimento das parcelas e formatação
    let parcelasInfo = '';
    for (let i = 1; i <= numeroParcelas; i++) {
        const dataVencimento = new Date(dataPrimeiraParcela);
        dataVencimento.setMonth(dataVencimento.getMonth() + i - 1);

        const dia = String(dataVencimento.getDate()).padStart(2, '0'); // Garante dois dígitos no dia
        const mes = String(dataVencimento.getMonth() + 1).padStart(2, '0'); // Garante dois dígitos no mês
        const ano = dataVencimento.getFullYear();

        const valorFormatado = valorParcela.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2 // Limita para duas casas decimais
        });

        parcelasInfo += `Parcela ${i}: R$ ${valorFormatado}, Vencimento: ${dia}/${mes}/${ano}\n`;
    }

    // Apresentação dos resultados
    resultadoDiv.innerHTML = `
        <h2>Resultado do Empréstimo</h2>
        <p>Valor total a ser pago: R$ ${valorEmprestimo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <p>Número de parcelas: ${numeroParcelas}</p>
        <p>Taxa de juros aplicada: ${taxaJuros * 100}%</p>
        <h3>Parcelas:</h3>
        <pre>${parcelasInfo}</pre>
    `;

    // Exibição dos resultados em um alert
    alert(`Valor total do empréstimo: R$ ${valorEmprestimo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n\n${parcelasInfo}`);
}

calcularEmprestimo();
