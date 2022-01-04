//Define our UI variable 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

//Load all event listener
loadEventListeners();

//Load all event listener
function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask)
    //Add remove event
    taskList.addEventListener('click', removeTask)
    // Clear task event
    clearBtn.addEventListener('click', clearTasks)
    //Filter tasks event
    filter.addEventListener('keyup', filterTasks)
}

//Add Task
function addTask(e){
    if (taskInput.value === '') {
        alert('Add a Task')
    }
    
    // Create li elements
    const li = document.createElement('li')
    //Add Class
    li.className = 'collection-item'
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a')
    //Add a class
    link.className = 'delete-item secondary-content'
    //Add icon HTML
    link.innerHTML = '<i class="fas fa-times-circle"></i>'
    //Append the link to li
    li.appendChild(link)
    
    //Append li to ul 
    taskList.appendChild(li);
    
    //Clear Input 
    taskInput.value = '';
    
    e.preventDefault();
}

//Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

//Clear Tasks
function clearTasks() {
  //  taskList.innerHTML = '';

  //Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  } 
} 

//Filter Tasks
function filterTasks(e){
    const text = e.target.value
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })

}