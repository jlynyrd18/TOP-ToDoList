

export function addProject (title, desc, dueDate, priority) {
    class Project {
        constructor(title, desc, dueDate, priority) {
            this.title = title;
            this.desc = desc;
            this.dueDate = dueDate;
            this.priority = priority;
        }
        projectCreate() {
            const projectDiv = document.getElementById('project-list');

            const projectContainer = document.createElement('div');
            projectContainer.style.border = '1px solid black';

            const projecth1 = document.createElement('h1');
            projecth1.textContent = `${this.title}`;

            const projectDesc = document.createElement('p');
            projectDesc.textContent = `Description: ${this.desc}`;

            const projectDueDate = document.createElement('p');
            projectDueDate.textContent = `Date Due: ${this.dueDate}`;

            const projectPriority = document.createElement('p');
            projectPriority.textContent = `Priority: ${this.priority}`;

            const completedLabel = document.createElement('label');
            completedLabel.textContent = 'Completed?';
            const completedCheck = document.createElement('input');
            completedCheck.type = 'checkbox';

            const projectEdit = document.createElement('button');
            projectEdit.textContent = 'Edit';

            const projectDelete = document.createElement('button');
            projectDelete.textContent = 'Delete';

            projectDiv.appendChild(projectContainer);
            projectContainer.appendChild(projecth1);
            projectContainer.appendChild(projectDesc);
            projectContainer.appendChild(projectDueDate);
            projectContainer.appendChild(projectPriority);
            projectContainer.appendChild(completedLabel);
            projectContainer.appendChild(completedCheck);
            projectContainer.appendChild(projectEdit);
            projectContainer.appendChild(projectDelete);

            //need to have project delete go into local storage and delete task as well
            //event listeners
            projectDelete.addEventListener('click', () => {
                const projectTitle = projecth1.textContent;
                let projects = JSON.parse(localStorage.getItem('projectData')) || [];
                projects = projects.filter(project => project.title !== projectTitle);
                localStorage.setItem('projectData', JSON.stringify(projects));
                projectContainer.remove();

            })
        }
    }
    const createProject = new Project(title, desc, dueDate, priority);
    createProject.projectCreate();
}