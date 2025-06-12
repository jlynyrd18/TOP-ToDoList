import { addProjectForm } from "./addProjectForm";
import { addProject } from "./addProject";

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
    let projects = JSON.parse(localStorage.getItem('projectData')) || [];
    if (projects.length > 0) {
        projects.forEach(project => {
            addProject(project.title, project.desc, project.dueDate, project.priority, project.tag);
        })
    }else {
        addProject('Default', 'This is the default\'s description', '2025-12-31', 'High');
    }

    //event listeners
    addBtn.addEventListener('click', addProjectForm);
    //taskBtn.addEventListener('click', () => addProjectForm('task'));
}