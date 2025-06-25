import { addProjectForm } from "./addProjectForm";
import { addTaskForm } from "./taskForm";
import { loadLocal } from "./localStorage";

export function domDesign() {
    //getting ids
    const projectDiv = document.getElementById('project-list');
    const taskDiv = document.getElementById('task-list');

    //project area
    const projectTitle = document.createElement('h2');
    projectTitle.textContent = 'Projects';
    projectDiv.appendChild(projectTitle);

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add Project';
    projectDiv.appendChild(addBtn);

    //task area
    const taskTitle = document.createElement('h2');
    taskTitle.textContent = 'Tasks';
    taskDiv.appendChild(taskTitle);

    //task button
    const taskBtn = document.createElement('button');
    taskBtn.textContent = 'Add Task';
    taskDiv.appendChild(taskBtn);

    //load local storage or default options
    loadLocal;

    //event listeners
    addBtn.addEventListener('click', addProjectForm);
    taskBtn.addEventListener('click', addTaskForm);
}