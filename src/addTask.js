//import { addTaskForm } from "./taskForm";

export function addTask(title, desc, dueDate, priority) {
    class Task {
        constructor(title, desc, dueDate, priority) {
            this.title = title;
            this.desc = desc;
            this.dueDate = dueDate;
            this.priority = priority;
        }
        taskCreate () {
            const taskDiv = document.getElementById('task-list');

            const taskContainer = document.createElement('div');
            taskContainer.style.border = '1px solid black';

            const taskH2 = document.createElement('h2');
            taskH2.textContent = `${this.title}`;

            const taskDesc = document.createElement('p');
            taskDesc.textContent = `Description: ${this.desc}`;

            const taskDD = document.createElement('p');
            taskDD.textContent = `Date Due: ${this.dueDate}`;
            
            const taskPriority = document.createElement('p');
            taskPriority.textContent = `Priority: ${this.priority}`;

            const completedLabel = document.createElement('label');
            completedLabel.textContent = 'Completed?';
            const completedCheck = document.createElement('input');
            completedCheck.type = 'checkbox';

            const taskDelete = document.createElement('button');
            taskDelete.textContent = 'Delete';

            taskDiv.appendChild(taskContainer);
            taskContainer.appendChild(taskH2);
            taskContainer.appendChild(taskDesc);
            taskContainer.appendChild(taskDD);
            taskContainer.appendChild(taskPriority);
            taskContainer.appendChild(completedLabel);
            taskContainer.appendChild(completedCheck);
            taskContainer.appendChild(taskDelete);
        }
    }
    const createTask = new Task(title, desc, dueDate, priority);
    createTask.taskCreate();
}