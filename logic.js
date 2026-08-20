function taskButtonMouseOver(x){
    x.innerHTML = "X";
}

function taskButtonMouseLeave(x){
    x.innerHTML = "";
}

function createNewTask(description){
    var newTask = new Task();
    newTask.description = description;
    newTask.completed = false;

    tasks.push(newTask);
}

function updateTaskButtons(){
    const taskButtons = document.querySelectorAll(".taskButton");

    for (let i = 0; i< taskButtons.length; i++){
        const e = taskButtons[i];
        e.onmouseover = function() {taskButtonMouseOver(e)};
        e.onmouseleave = function() {taskButtonMouseLeave(e)};
    }
}

class Task{
    constructor(description){
        this.description = description;
        this.completed = false;
    }
}

function createTaskElement(task){
    const newTask = taskTemplate.cloneNode(true);

    let p = newTask.querySelectorAll(".taskText");
    p[0].innerHTML = task.description;

    newTask.style.opacity = 100;

    tasksParent.appendChild(newTask);
    updateTaskButtons();
}

const taskTemplate = document.getElementById("task");
taskTemplate.style.opacity = 0;

const tasksParent = document.getElementById("tasksParent");
updateTaskButtons();

var tasks = [];

createNewTask("gym");
createNewTask("groceries");
createNewTask("task");
createNewTask("task");
createNewTask("task");
createNewTask("task");
createNewTask("task");
createNewTask("task");
createNewTask("task");
createNewTask("task");


var taskString = "";
for (let i = 0; i < tasks.length; i++) {
    createTaskElement(tasks[i]);
}