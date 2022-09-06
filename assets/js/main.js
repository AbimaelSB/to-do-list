var addTarefa = document.getElementById('add');
var tarefa = document.getElementById('tarefa');
var tarefas = [];
var lista = document.getElementById('to-do');
var task = document.getElementsByTagName('p');

function novaTarefa() {
  if(tarefa.value.length == 0) {
    alert("Insira a tarefa a ser realizada!")
  }else if(tarefa.value.length < 4  || tarefa.value.length > 50) {
    alert("Insira entre 4 e 50 caracteres!")
  }else{
    let task = '<p><input type="checkbox">' + tarefa.value + '</p>'
    tarefas.push(task);
    lista.innerHTML = tarefas.join('');
    tarefa.value = "";
  }
}

addTarefa.addEventListener('click',novaTarefa);