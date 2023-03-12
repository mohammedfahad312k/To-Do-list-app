let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-Counter');
console.log("app is working")

function renderList(){
    taskList.innerHTML= '';
    for(let i=0; i<tasks.length; i++){
        addtasksToDOM(tasks[i]);
    }
    tasksCounter.innerHTML= tasks.length;

    
}

function toggleTask(){

}

function deleteTask(taskID){
    const newTask= tasks.filter(
        (task)=>{
            return task.id !==Number(taskId);
        });
    tasks=newTask;
    renderList();
    showNotification('Item deleted successfully!');
}

function addtasksToDOM(task){
    const li= document.createElement('li');
    li.innerHTML= `
    <input type= "checkbox" id="${task.id}" ${task.completed ? 'checked':" "} class="custom-checkbox">
    <label for="${task.id}">${task.title}</label>
    <img src="C:/Users/fahad/Downloads/rubbish-bin-svgrepo-com.svg" class="delete"  data-id="${task.id}"/>
    `;
    taskList.append(li);
    
}

function addTask(task){
    if(task){
        tasks.push(task);
        renderList();
        showNotification('task added successfully');
        return;
    }
    else{
        showNotification('task can not be added');
    }
}

function showNotification(text){
    alert(text);
}

function handleInputPress(e){
    // console.log(e.target.value)
    if(e.key === 'Enter'){
        const text = e.target.value;
        if(!text){
            showNotification('Task can not be empty');
            return;
        }
        const task = {
            title: text,
            id: Date.now(),
            completed: false
        }
        e.target.value='';
        addTask(task);
    }
    
}
addEventListener('keyup', handleInputPress);
