import { addTask } from "./addTask";


export function addTaskForm () {
    //create container
    const taskContainer = document.createElement('div');
    taskContainer.id = 'task-container';

    //form element
    const taskForm = document.createElement('form');
    taskForm.id = 'task';

    //task title
    const h2Title = document.createElement('h2');
    h2Title.textContent = 'Add Task';

    //task field
    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.textContent = 'Title: ';
    const taskTitleInput = document.createElement('input');
    taskTitleInput.type = 'text';
    taskTitleInput.id = 'title';
    taskTitleInput.name = 'title';
    taskTitleInput.required = true;

    //task description
    const taskDescLabel = document.createElement('label');
    taskDescLabel.textContent = 'Description: ';
    const taskDescInput = document.createElement('textarea');
    taskDescInput.id = 'description';
    taskDescInput.name = 'description';

    //task due date
    const taskDDLabel = document.createElement('label');
    taskDDLabel.textContent = 'Due Date: ';
    const taskDDInput = document.createElement('input');
    taskDDInput.type = 'date';
    taskDDInput.id = 'dueDate';
    taskDDInput.name = 'dueDate';

    //task priority
    const taskPriorityLabel = document.createElement('label');
    taskPriorityLabel.textContent = 'Priority: ';
    const taskPrioritySelect = document.createElement('select');
    taskPrioritySelect.id = 'priority';
    taskPrioritySelect.name = 'priority';
    ['Low', 'Medium', 'High'].forEach(level => {
        const option = document.createElement('option');
        option.value = level.toLowerCase();
        option.textContent = level;
        taskPrioritySelect.appendChild(option);
    });

    //submit button
    const taskSubmit = document.createElement('button');
    taskSubmit.type = 'submit';
    taskSubmit.textContent = 'Add Task';

    //close button
    const taskClose = document.createElement('button');
    taskClose.type = 'button';
    taskClose.id = 'close-task';
    taskClose.textContent = 'Close';

    //append elements to form
    taskForm.appendChild(h2Title);
    taskForm.appendChild(taskTitleLabel);
    taskForm.appendChild(taskTitleInput);
    taskForm.appendChild(taskDescLabel);
    taskForm.appendChild(taskDescInput);
    taskForm.appendChild(taskDDLabel);
    taskForm.appendChild(taskDDInput);
    taskForm.appendChild(taskPriorityLabel);
    taskForm.appendChild(taskPrioritySelect);
    taskForm.appendChild(taskSubmit);
    taskForm.appendChild(taskClose);

    //appench form to container
    taskContainer.appendChild(taskForm);
    document.body.appendChild(taskContainer);

    //event listeners
    taskClose.addEventListener('click', () => {
        taskContainer.remove();
    });

    taskSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const title = taskTitleInput.value.toUpperCase();
        const desc = taskDescInput.value;
        const dueDate = taskDDInput.value;
        const priority = taskPrioritySelect.value;

        addTask(title, desc, dueDate, priority);

        taskContainer.remove();
    })
}