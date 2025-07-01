import { addProject } from "./addProject";
import { addTask } from "./addTask";

export function loadLocal() {
    let projects = JSON.parse(localStorage.getItem('projectData')) || [];
    if (projects.length > 0) {
        projects.forEach(project => {
            addProject(project.title, project.desc, project.dueDate, project.priority, project.tag);
        })
    }else {
        addProject('Default Project', 'This is the default\'s description', '2025-12-31', 'High');
    }

    let tasks = JSON.parse(localStorage.getItem('taskData')) || [];
    if (tasks.length > 0) {
        tasks.forEach(project => {
            addTask(project.title, project.desc, project.dueDate, project.priority, project.tag);
        })
    }else {
        addTask('Default Task', 'This is the default\'s description', '2025-12-31', 'High');
    }
    
}

export function saveProjectLocal(title, desc, dueDate, priority) {
    let projects = JSON.parse(localStorage.getItem('projectData')) || [];
    
    projects.push({
        title, 
        desc,
        dueDate,
        priority, 
        
    });
            
    localStorage.setItem('projectData', JSON.stringify(projects));
}

export function saveTaskLocal(title, desc, dueDate, priority) {
    let tasks = JSON.parse(localStorage.getItem('taskData')) || [];

    tasks.push({
        title,
        desc, 
        dueDate,
        priority
        
    })
}