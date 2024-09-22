var emptyList = window.document.getElementById('task-empty-div');
var modal = document.getElementById("task-modal");
var btn = document.getElementById("add-task-button");
var span = document.getElementsByClassName("close-button")[0];
var closeBtnForm = document.getElementsByClassName("close-button-form")[0];
var saveTaskBtn = document.getElementById("submit-button")
var p3 = document.getElementById("p3")


const tasksContent = document.getElementById("task-list")
const taskList = []
var currentId = null
// localStorage.clear();

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.width = '0'
        currentId = null
        document.getElementById("task-name").value = ""
        document.getElementById("task-desc").value = ""
    }
}

function openTaskForm(){
    p3.innerText = "Salvar"
    saveTaskBtn.innerText = "Salvar tarefa"
    currentId = null
    modal.style.width = '100%'
}

function openEditTaskForm(id){
    p3.innerText = "Editar"
    saveTaskBtn.innerText = "Atualizar tarefa"
    currentId = id
    modal.style.width = '100%'
}

function closeTaskForm(){
    modal.style.width = '0'
    currentId = null
    document.getElementById("task-name").value = ""
    document.getElementById("task-desc").value = ""
}

function saveTask() {
    const title = document.getElementById("task-name").value;
    const description = document.getElementById("task-desc").value;
    
    if (currentId != null) {
        updateTask(currentId)
    } else {
        taskList.push({
            taskName: title,
            taskDescription: description,
            isChecked: false,
            });
        
        if(title === null || title === undefined || title === "") {
            console.log('Não pode salvar');
        }else{
            taskListAsString = localStorage.getItem('taskList');
            
            if(taskListAsString === null || taskListAsString === undefined || taskListAsString === "") {
                var jsonString = JSON.stringify(taskList);
                localStorage.setItem('taskList', jsonString);
            }else{
                var tasksArray= JSON.parse(taskListAsString);
                tasksArray.push({
                    taskName: title,
                    taskDescription: description,
                    isChecked: false,
                    })
                var jsonString = JSON.stringify(tasksArray);
                localStorage.setItem('taskList', jsonString);
            }
            
            modal.style.width = '0'
    
        }
    }
    
  }

function getTaskListFromLocalStorage(){
    taskListAsString = localStorage.getItem('taskList');
    var tasksArray= JSON.parse(taskListAsString);
    return tasksArray
}

function deleteTask(index){
    const confirmDelete = window.confirm("Deseja excluir esta tarefa?");
    if (confirmDelete) {
        var tasksArray = getTaskListFromLocalStorage()
        tasksArray.splice(index, 1);
        var jsonString = JSON.stringify(tasksArray);
        localStorage.setItem('taskList', jsonString);
        renderTaskList()
    }
}

function updateTask(index){
    var tasksArray = getTaskListFromLocalStorage()

    var title = tasksArray[index].taskName
    if(title === null || title === undefined || title === "") {
        console.log('Não pode salvar');
    }
    else{
        tasksArray[index].taskName = document.getElementById("task-name").value
        tasksArray[index].taskDescription = document.getElementById("task-desc").value

        var jsonString = JSON.stringify(tasksArray);
        localStorage.setItem('taskList', jsonString);
        renderTaskList()
    }
}

 
function editTest(id){
    var title = document.getElementsByClassName("task-title")[id];
    var description = document.getElementsByClassName("task-desc")[id];
    
    document.getElementById("task-name").value = title.innerText
    document.getElementById("task-desc").value = description.innerText

    openEditTaskForm(id)
}

function renderTaskList() {
    tasksContent.innerHTML = "";

    taskListAsString = localStorage.getItem('taskList');
    console.log(taskListAsString);

    if(taskListAsString === null || taskListAsString === undefined || taskListAsString === "") {
        console.log('Dados Null');
    }else{
        const taskListAsArray = JSON.parse(taskListAsString);
        console.log(taskListAsArray.length);
        if (taskListAsArray.length > 0) {
            emptyList.style.display = "none";
        
            taskListAsArray.forEach((task, index) => {
              const taskElement = document.createElement("div");
              taskElement.classList.add("task-item");
              taskElement.innerHTML = `
                <input type="checkbox" id="${index}">
                <div class="task-text">
                    <label for="task1" class="task-title">${task.taskName}</label>
                    <p class="task-desc">${task.taskDescription}</p>
                </div>
                <button class="edit-task" aria-label="Editar tarefa" task-id="${index}" onclick="editTest(${index})"><img src="edit.png" alt="Editar tarefa" class="icon"></img></button>
                <button class="delete-task" aria-label="Deletar tarefa" task-id="${index}" onclick="deleteTask(${index})"><img src="trash.png" alt="Deletar tarefa" class="icon"></img></button>
              `;
              tasksContent.appendChild(taskElement);
            });
          } else {
            emptyList.style.display = "";
            tasksContent.style.width = '0'
          }
    }
}


