const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(tasks) {
  const ulElements = document.querySelector(".tasks__list");
  ulElements.innerHTML = ""
  for (let i = 0; i < tasks.length; i++) {
    const elements = createTaskItem(tasks[i])
    ulElements.append(elements);
  }
  return ulElements
}
function createTaskItem(obj) {
  const list = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const paragraph = document.createElement("p");
  const button = document.createElement("button")

  list.classList.add("task__item")
  div.classList.add("task-info__container")
  span.classList.add("task-type")
  button.classList.add("task__button--remove-task")

  paragraph.innerText = obj.title

  if (obj.type === "Urgente") {
    span.classList.add("span-urgent")
  } else if (obj.type === "Importante") {
    span.classList.add("span-important")
  }
  else if (obj.type === "Normal") {
    span.classList.add("span-normal")

  }

  button.addEventListener("click", function(){
    const index = tasks.indexOf(obj);
    tasks.splice(index, 1);
    renderElements(tasks)
    

  })
  div.append(span, paragraph);
  list.append(div, button);

  return list;
}


function createNewTask(){
  const input = document.querySelector("#input_title")
  const select = document.querySelector(".form__input--priority")
  const button = document.querySelector(".form__button--add-task")
  button.addEventListener("click", function(event){
    event.preventDefault()
    let newTasks = {
      title: input.value,
      type: select.value
    }
    tasks.push(newTasks);
    renderElements(tasks)
  })

}
renderElements(tasks);
createNewTask()
