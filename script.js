const btnAdd = document.querySelector('.add')
const inputTask = document.querySelector('.inputTask')
const noTask = document.querySelector('.no-task')
const toDoUl = document.querySelector('.todo-ul')
const msg = document.querySelector('.message')
const status = document.querySelectorAll('.task-status')
const checkbox = document.querySelectorAll('.checkbox')
let taskCount = 0;
let counter = 0;

const checkStatus = (e) => {
    
    // console.log(document.getElementById(`status${e.target.id}`).innerText);
    if (e.target.checked == true) {
        document.getElementById(`status${e.target.id}`).innerText = 'Complete'
        document.getElementById(`status${e.target.id}`).style.color = '#22c55e'
    } else {
        document.getElementById(`status${e.target.id}`).innerText = 'Incomplete'
         document.getElementById(`status${e.target.id}`).style.color = 'rgb(219, 16, 16)'
    }
}

const deleteTask = (e) => {
    document.getElementById(`${e.target.id}`).style.display = 'none'
    counter--;
    if (counter === 0) {
         noTask.style.visibility = 'visible';
    }
}

btnAdd.addEventListener('click', (e) => {
    taskCount++;
    counter++;
    // creating li
    const contain = document.createElement('div')
    contain.classList.add('check-box-container')
    const task = document.createElement('li');
    toDoUl.appendChild(task);
    // creating checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `${taskCount}`;
    checkbox.classList.add('checkbox')
    
    
    // creating label
    const label = document.createElement('label')
    label.appendChild(document.createTextNode(inputTask.value))
    label.setAttribute("for", checkbox.id);
    checkbox.addEventListener('click',checkStatus)
  
    contain.appendChild(checkbox)
    contain.appendChild(label)
    task.appendChild(contain)
    // status
    const taskStatus = document.createElement('h3')
    taskStatus.appendChild(document.createTextNode('Incomplete'))
    taskStatus.id = `status${checkbox.id}`
    taskStatus.classList.add('task-status')
    task.appendChild(taskStatus)
    // creating icon
    const iconDel = document.createElement('button');
    iconDel.innerHTML = `<i class="fa-solid fa-trash  " id = ${taskCount}></i>`;
    task.appendChild(iconDel)
    iconDel.addEventListener('click',deleteTask)
    task.id = taskCount
    noTask.style.visibility = 'hidden';
    inputTask.value = ''
    btnAdd.disabled = true

});
inputTask.addEventListener('input', (e) => {
    console.log(inputTask.value);
    if (inputTask.value.length < 10 && inputTask.value.length !== 0 ) {
        msg.style.visibility = 'visible'
    }
    else {
        msg.style.visibility = 'hidden'
        btnAdd.disabled = false;
    }
});

 
    
