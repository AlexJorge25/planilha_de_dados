var dados = [];

function enviar_dados() {
    var nome = document.getElementById("nome-input").value;
    var email = document.getElementById("email-input").value;
    var numero = document.getElementById("numero-input").value;

    /*esse codigo serve para verificar se todos os campos do input que fiz estao prenchidos*/
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

    /*atualizar a tabela*/
    atualizarTabela();

    document.getElementById("nome-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("numero-input").value = "";
}

function atualizarTabela() {
    var tabela = document.getElementById("minha-tabela");
    var tbody = tabela.querySelector("tbody");

    // Limpa qualquer conteúdo anterior na tabela
    tbody.innerHTML = "";

    for (var i = 0; i < dados.length; i++) {
        var linha = document.createElement("tr");
        var colunas = ["nome", "email", "numero"];

        // Loop através das colunas
        for (var j = 0; j < colunas.length; j++) {
            var coluna = document.createElement("td");
            coluna.textContent = dados[i][colunas[j]];
            linha.appendChild(coluna);
        }

        tbody.appendChild(linha);
    }
}
var forms = document.getElementById("forms");

forms.addEventListener("submit", function (event) {
    event.preventDefault();
});
