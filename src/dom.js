import { addProjectForm } from "./addProjectForm";

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

    //event listeners
    addBtn.addEventListener('click', addProjectForm);
    taskBtn.addEventListener('click', () => addProjectForm('task'));
}