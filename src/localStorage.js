import { addProject } from "./addProject";
import { addTask } from "./addTask";
export function loadLocal() {
    let projects = JSON.parse(localStorage.getItem('projectData')) || [];
    if (projects.length > 0) {
        projects.forEach(project => {
            addProject(project.title, project.desc, project.dueDate, project.priority, project.tag);
        })
    }else {
        addProject('Default', 'This is the default\'s description', '2025-12-31', 'High');
    }
}

export function saveLocal() {
    
}