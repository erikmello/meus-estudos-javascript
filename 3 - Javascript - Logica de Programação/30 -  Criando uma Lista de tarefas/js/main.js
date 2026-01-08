const inputTarefa = document.querySelector(".input-nova-tarefa");
const btnTarefa = document.querySelector(".btn-add-tarefa");
const tarefas = document.querySelector(".tarefas");



function criaLi() {
    const li = document.createElement("li");
    return li;
}

inputTarefa.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput() {
    inputTarefa.value = ""; //
    inputTarefa.focus();//Focus é para o cursor ficar piscando no input
}

function criaBotaoApagar(li) {
    li.innerText += " ";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText = "Apagar";
    botaoApagar.setAttribute("class", "apagar");// definindo uma classe para o botao
    botaoApagar.setAttribute("title", "Apagar esta tarefa"); // definindo um titulo para o botao

    li.appendChild(botaoApagar);// adicionando o botao apagar dentro da li
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

btnTarefa.addEventListener("click", function () {
    if (!inputTarefa.value) return;// serve para nao adicionar tarefa vazia
    criaTarefas(inputTarefa.value);
})

document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("apagar")) {
        el.parentElement.remove();
        salvarTarefa();
    }
});

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();






