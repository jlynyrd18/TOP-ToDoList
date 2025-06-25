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

export function saveProjectLocal() {
    let projects = JSON.parse(localStorage.getItem('projectData')) || [];
    
    projects.push({
        title: this.title,
        desc: this.desc, 
        dueDate: this.dueDate,
        priority: this.priority,
        //id: Date.now()
    });
            
    localStorage.setItem('projectData', JSON.stringify(projects));
}

export function saveTaskLocal() {
    let tasks = JSON.parse(localStorage.getItem('taskData')) || [];

    tasks.push({

    })
}