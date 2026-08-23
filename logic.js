function onTaskButtonMouseClick(x){
    if (x.description == "")
        return;

    x.completed = !x.completed;

    const t = x.text;
    if (x.completed){
        t.style.textDecoration = "line-through";
        x.button.innerHTML = "X";
    }else{
        t.style.textDecoration = "none";
        x.button.innerHTML = "";
    }
}

// function updateTasksOrder(){
//     for (let i = 0; i < tasks.length; i++) {
//         const t = tasks[i];
//         t.text.style.opacity = 100;
//         t.button.style.opacity = 100;
//     }
// }

function createNewTask(description = ""){
    var newTask = new Task(description);
    createTaskElement(newTask);
    
    tasks.push(newTask);
}

class Task{
    constructor(description){
        this.description = description;
        this.completed = false;
        this.button = false;
        this.text = null;
    }
}

function onTaskTextChanged(task){
    task.description = task.text.value;
}

function createTaskElement(task){
    const newTask = taskTemplate.cloneNode(true);

    let p = newTask.querySelectorAll(".taskText");
    const t = p[0];
    t.value = task.description;
    t.onchange = function() {onTaskTextChanged(task)};
    task.text = t;

    let b = newTask.querySelectorAll(".taskButton");
    const e = b[0];
    e.onmousedown = function() {onTaskButtonMouseClick(task)};

    task.button = e;

    tasksParent.appendChild(newTask);
    newTask.style.opacity = 100;
}

const taskTemplate = document.getElementById("task");
taskTemplate.style.opacity = 0;

const tasksParent = document.getElementById("tasksParent");

var tasks = [];