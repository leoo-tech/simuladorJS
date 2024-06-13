const formulario = document.getElementById("formularioEmprestimo");
const resultadoDiv = document.getElementById("resultadoEmprestimo");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obtém os valores do formulário
    const valorEmprestimo = parseFloat(document.getElementById("valorEmprestimo").value);
    const numeroParcelas = parseInt(document.getElementById("numeroParcelas").value);
    const limiteParcelasSemJuros = parseInt(document.getElementById("limiteParcelasSemJuros").value);
    const idade = parseInt(document.getElementById("idade").value);
    const dataPrimeiraParcela = new Date(document.getElementById("dataprimeiraparcela").value);

    // Validação das entradas (similar ao código anterior, mas agora usando os valores do formulário)
    if (isNaN(valorEmprestimo) || valorEmprestimo <= 0 ||
        isNaN(numeroParcelas) || numeroParcelas <= 0 ||
        isNaN(idade) || idade < 18 || idade > 120 ||
        isNaN(dataPrimeiraParcela)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Limita a data da primeira parcela em até 1 ano a partir da data atual
    const hoje = new Date();
    const dataMaxima = new Date();
    dataMaxima.setFullYear(hoje.getFullYear() + 1);
    if (dataPrimeiraParcela < hoje || dataPrimeiraParcela > dataMaxima) {
        alert("A data da primeira parcela deve ser entre hoje e daqui a um ano.");
        return;
    }

    // ... (cálculo de juros, valor da parcela e datas de vencimento - igual ao código anterior)

    // Cálculo da taxa de juros (com condição adicional)
    let taxaJuros = 0; // Inicializa a taxa de juros como zero
    if (idade >= 60) {
        taxaJuros = 0; // Isento de juros para maiores de 60 anos
    }
    else if (idade >= 18 && idade <= 25 && numeroParcelas <= limiteParcelasSemJuros) {
        taxaJuros = 0.01; // Taxa reduzida se a idade for entre 18 e 25 E o número de parcelas for menor ou igual ao limite
    } else if (idade >= 18 && idade <= 25) {
        taxaJuros = 0.02; // Taxa normal para a faixa de idade, se o número de parcelas exceder o limite
    } else if (idade >= 26 && idade <= 35) {
        taxaJuros = 0.03;
    } else if (idade >= 36 && idade <= 45) {
        taxaJuros = 0.04;
    } else {
        taxaJuros = 0.05;
    }




    // Aplicação da taxa de juros
    let valorEmprestimoComJuros = valorEmprestimo; // Nova variável para armazenar o valor com juros
    if (numeroParcelas > limiteParcelasSemJuros || taxaJuros > 0) {
        valorEmprestimoComJuros += valorEmprestimoComJuros * taxaJuros;
    }

    // Cálculo do valor da parcela
    const valorParcela = valorEmprestimoComJuros / numeroParcelas;



    // Cálculo das datas de vencimento das parcelas e formatação
    let parcelasInfo = '';
    let dataVencimento = new Date(dataPrimeiraParcela); // Inicializa com a data da primeira parcela

    for (let i = 1; i <= numeroParcelas; i++) {
        const dia = String(dataVencimento.getDate()).padStart(2, '0');
        const mes = String(dataVencimento.getMonth() + 1).padStart(2, '0');
        const ano = dataVencimento.getFullYear();

        const valorFormatado = valorParcela.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        parcelasInfo += `Parcela ${i}: R$ ${valorFormatado}, Vencimento: ${dia}/${mes}/${ano}\n`;

        dataVencimento.setMonth(dataVencimento.getMonth() + 1); // Adiciona um mês à data da parcela anterior
    }


    // Salvar resultados no localStorage
    const resultados = {
        valorTotal: valorEmprestimo.toFixed(2),
        valorTotalJuros: valorEmprestimoComJuros.toFixed(2),
        numParcelas: numeroParcelas,
        taxaJuros: taxaJuros,
        parcelas: parcelasInfo,
    };
    localStorage.setItem("resultadosEmprestimo", JSON.stringify(resultados));


    // Apresentação dos resultados na página
    resultadoDiv.innerHTML = `
        <h2>Resultado do Empréstimo</h2>
        <p>Valor total a ser pago: R$ ${valorEmprestimoComJuros.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <p>Valor original do empréstimo: R$ ${valorEmprestimo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <p>Número de parcelas: ${numeroParcelas}</p>
        <p>Taxa de juros aplicada: ${(taxaJuros * 100).toFixed(2)}%</p>
        <h3>Parcelas:</h3>
        <pre>${parcelasInfo}</pre>
    `;


});

// função para exibir os resultados da navegação anterior
function exibirResultadosAnteriores() {
    const resultadosSalvos = localStorage.getItem("resultadosEmprestimo");
    if (resultadosSalvos) {
        const resultados = JSON.parse(resultadosSalvos);
        resultadoDiv.innerHTML += `
      <h3>Resultados Anteriores:</h3>
      <p>Valor total: R$ ${resultados.valorTotalJuros}</p>
      <p>Valor original do empréstimo: R$ ${resultados.valorTotal}</p>
      <p>Parcelas: ${resultados.numParcelas}</p>
      <p>Taxa de juros: ${resultados.taxaJuros * 100}%</p>
      <pre>${resultados.parcelas}</pre>
    `;
    }
}

// Exibir resultados anteriores ao carregar a página
exibirResultadosAnteriores();