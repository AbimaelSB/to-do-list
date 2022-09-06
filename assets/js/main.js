var addTarefa = document.getElementById('add');
var tarefa = document.getElementById('tarefa');
var tarefas = [];
var lista = document.getElementById('to-do');

function novaTarefa() {
  if(tarefa.value.length == 0) {
    alert("Insira a tarefa a ser realizada!")
  }else if(tarefa.value.length < 4  || tarefa.value.length > 50) {
    alert("Insira entre 4 e 50 caracteres!")
  }else{
    tarefas.push('<p><input type="checkbox">' + tarefa.value + '</p>');
    lista.innerHTML = tarefas.join('');
    tarefa.value = "";
  }
}

addTarefa.addEventListener('click',novaTarefa);