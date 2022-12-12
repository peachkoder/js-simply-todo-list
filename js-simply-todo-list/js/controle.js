let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("area_lista");
let contador = 0;

const addTarefa = () => {
  let tarefa = input.value;
  ++contador;

  if (tarefa === "" && tarefa === null && tarefa === undefined) return;

  let novoItem = `<div id=${contador} class="item">
                    <div onclick="marcarTarefa(${contador})" class="item-icone">
                      <i id = 'icone_${contador}' class =  "mdi mdi-circle-outline"></i>
                    </div>
                    <div onclick="marcarTarefa(${contador})" class="item-nome">
                      ${tarefa}
                    </div>
                    <div class="item-botao">
                      <button class="delete" onclick="deletar(${contador})" ><i class="mdi mdi-delete">Deletar</i></button>
                    </div>
                  </div>`;
  main.innerHTML += novoItem;
  input.value = "";
  input.focus();
};

input.addEventListener("keydown", (e) => {
  if (e.keyCode !== 13) return;
  addTarefa();
});

const deletar = (id) => {
  let tarefa = document.getElementById(id);
  tarefa.remove();
};

const marcarTarefa = (id) => {
  let tarefa = document.getElementById(id);
  let clazz = tarefa.getAttribute("class");
  var icone = document.getElementById(`icone_${id}`);

  if (clazz === "item") {
    tarefa.classList.add("clicado");
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");
    tarefa.parentNode.appendChild(tarefa);
  } else {
    tarefa.classList.remove("clicado");
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
};
