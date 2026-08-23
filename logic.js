function onTaskButtonMouseOver(x){
    x.button.innerHTML = "X";
    //since you click on the button, the X should already be there
    //so no need (i think) to permanently place the X
}

function onTaskButtonMouseLeave(x){
    if (!x.completed)
        x.button.innerHTML = "";
}

function onTaskButtonMouseClick(x){
    x.completed = !x.completed; //see note at onTaskButtonMouseOver, this function handles that logic
    
    let t = x.text;
    t.style.textDecoration = x.completed ? "line-through" : "none";
}

function createNewTask(description){
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

function createTaskElement(task){
    const newTask = taskTemplate.cloneNode(true);

    let p = newTask.querySelectorAll(".taskText");
    task.text = p[0];
    task.text.innerHTML = task.description;

    let b = newTask.querySelectorAll(".taskButton");

    const e = b[0];
    e.onmouseover = function() {onTaskButtonMouseOver(task)};
    e.onmouseleave = function() {onTaskButtonMouseLeave(task)};
    e.onmousedown = function() {onTaskButtonMouseClick(task)};

    task.button = e;

    newTask.style.opacity = 100;

    tasksParent.appendChild(newTask);
}

const taskTemplate = document.getElementById("task");
taskTemplate.style.opacity = 0;

const tasksParent = document.getElementById("tasksParent");

var tasks = [];

createNewTask("gym");
createNewTask("groceries");