const taskForm = document.getElementById('taskForm');
const tasksContainer = document.getElementById('tasksContainer');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;

    if (taskName && dueDate) {
        const taskElement = createTaskElement(taskName, dueDate);
        tasksContainer.appendChild(taskElement);
        taskForm.reset();
    }
}

function createTaskElement(taskName, dueDate) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskInfo = document.createElement('div');
    taskInfo.innerHTML = `<strong>${taskName}</strong> - Due: ${dueDate}`;
    taskElement.appendChild(taskInfo);

    const buttonsContainer = document.createElement('div');
    const editButton = createButton('Edit', 'edit', editTask);
    const deleteButton = createButton('Delete', 'delete', deleteTask);
    
    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);
    
    taskElement.appendChild(buttonsContainer);

    return taskElement;
}

function createButton(label, className, action) {
    const button = document.createElement('button');
    button.textContent = label;
    button.classList.add(className);
    button.addEventListener('click', action);
    return button;
}

function editTask() {
    // Add logic to make task editable
}

function deleteTask() {
    // Add logic to delete task
}