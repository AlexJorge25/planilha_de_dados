var dados = [];

function enviar_dados() {
    var nome = document.getElementById("nome-input").value;
    var email = document.getElementById("email-input").value;
    var numero = document.getElementById("numero-input").value;


    if (!nome || !email || !numero) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var objeto = {
        nome: nome,
        email: email,
        numero: numero
    };

    dados.push(objeto);


    atualizarTabela();


    document.getElementById("nome-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("numero-input").value = "";
}

function atualizarTabela() {
    var tabela = document.getElementById("minha-tabela");
    var tbody = tabela.querySelector("tbody");


    tbody.innerHTML = "";

    for (var i = 0; i < dados.length; i++) {
        var linha = document.createElement("tr");
        var colunas = ["nome", "email", "numero"];

        for (var j = 0; j < colunas.length; j++) {
            var coluna = document.createElement("td");
            coluna.textContent = dados[i][colunas[j]];
            linha.appendChild(coluna);
        }

        var colunaAcoes = document.createElement("td");
        var botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList.add("excluir");
        botaoExcluir.dataset.index = i;

        botaoExcluir.onclick = function () {
            excluir_linha(this);
        };

        colunaAcoes.appendChild(botaoExcluir);
        linha.appendChild(colunaAcoes);

        tbody.appendChild(linha);
    }
}

function excluir_linha(botao) {
    var index = botao.dataset.index;
    if (index !== undefined) {
        dados.splice(index, 1);
        atualizarTabela();
    }
}

var forms = document.getElementById("forms");

forms.addEventListener("submit", function (event) {
    event.preventDefault();
});

atualizarTabela();
