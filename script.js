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

    document.getElementById("nome-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("numero-input").value = "";

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

        //botao excluir
        var botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList.add("excluir");
        botaoExcluir.dataset.index = i;

        botaoExcluir.onclick = function () {
            excluir_linha(this);
        };

        //botao editar
        var botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        botaoEditar.classList.add("editar");
        botaoEditar.dataset.index = i;

        botaoEditar.onclick = function () {
            editar_linha(this);
        };


        colunaAcoes.appendChild(botaoExcluir);
        colunaAcoes.appendChild(botaoEditar);
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
function editar_linha(botao2) {
    var index = botao2.dataset.index;
    objeto = dados[index]
    document.getElementById("nome-input").value = objeto.nome;
    document.getElementById("email-input").value = objeto.email;
    document.getElementById("numero-input").value = objeto.numero;
    //texto Editar 
    var titulo = document.querySelector("#titulo")
    titulo.textContent = "Editar"
    //botao atualizar
    var botaoAtualizar = document.querySelector("#botaoGravar")
    botaoAtualizar.textContent = "Atualizar"
    botaoAtualizar.onclick = function () {
        alterarCadastro(botao2);
    }
}
function alterarCadastro(botao2) {
    var index = botao2.dataset.index;
    if (index !== undefined) {
        var objeto = dados[index];

        var nomeAlterado = document.getElementById("nome-input").value;
        var emailAlterado = document.getElementById("email-input").value;
        var numeroAlterado = document.getElementById("numero-input").value;

        objeto.nome = nomeAlterado;
        objeto.email = emailAlterado;
        objeto.numero = numeroAlterado;

        var titulo = document.querySelector("#titulo")
        titulo.textContent = "Cadastro"

        var botaoAtualizar = document.querySelector("#botaoGravar")
        botaoAtualizar.textContent = "Gravar"
        botaoAtualizar.onclick = function () {
            enviar_dados();
        }
        atualizarTabela();
    }
}
// não deixa a pagina reiniciar após clicar no button
var forms = document.getElementById("forms");

forms.addEventListener("submit", function (event) {
    event.preventDefault();
});

atualizarTabela();
