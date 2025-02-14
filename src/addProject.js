import { addProjectForm } from "./addProjectForm";
import { domDesign } from "./dom";

export function addProject (title, desc, dueDate, priority, tag) {
    class Project {
        constructor(title, desc, dueDate, priority) {
            this.title = title;
            this.desc = desc;
            this.dueDate = dueDate;
            this.priority = priority;
            this.tag = tag;
        }
        projectCreate() {
            const projectDiv = document.getElementById('project-list');
            const taskDiv = document.getElementById('task-list');

            const projectContainer = document.createElement('div');
            projectContainer.style.border = '1px solid black';

            const tagLine = document.createElement('p');
            tagLine.textContent = `${this.tag}`;

            const projecth1 = document.createElement('h1');
            projecth1.textContent = `${this.title}`;

            const projectDesc = document.createElement('p');
            projectDesc.textContent = `${this.desc}`;

            const projectDueDate = document.createElement('p');
            projectDueDate.textContent = `${this.dueDate}`;

            const projectPriority = document.createElement('p');
            projectPriority.textContent = `${this.priority}`;

            const projectEdit = document.createElement('button');
            projectEdit.textContent = 'Edit';

            const projectDelete = document.createElement('button');
            projectDelete.textContent = 'Delete';

            if(tag !== ''){
                taskDiv.appendChild(projectContainer);
                projectContainer.appendChild(tagLine);
                projectContainer.appendChild(projecth1);
                projectContainer.appendChild(projectDesc);
                projectContainer.appendChild(projectDueDate);
                projectContainer.appendChild(projectPriority);
                projectContainer.appendChild(projectEdit);
                projectContainer.appendChild(projectDelete);
            }else {
                projectDiv.appendChild(projectContainer);
                projectContainer.appendChild(projecth1);
                projectContainer.appendChild(projectDesc);
                projectContainer.appendChild(projectDueDate);
                projectContainer.appendChild(projectPriority);
                projectContainer.appendChild(projectEdit);
                projectContainer.appendChild(projectDelete);
            }

         

            let projects = JSON.parse(localStorage.getItem('projectData')) || [];

            projects.push({
                title: this.title,
                desc: this.desc, 
                dueDate: this.dueDate,
                priority: this.priority
            });
            
            localStorage.setItem('projectData', JSON.stringify(projects));
        }
    }
    const createProject = new Project(title, desc, dueDate, priority);
    createProject.projectCreate();
}