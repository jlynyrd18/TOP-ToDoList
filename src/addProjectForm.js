import { addProject } from "./addProject";

export function addProjectForm(arg) {
    //create container
    const formContainer = document.createElement('div');
    formContainer.id = 'form-container';

    //form element
    const projectForm = document.createElement('form');
    projectForm.id = 'form';

    //form title
    const h2Title = document.createElement('h2');
    h2Title.textContent = 'Add Project';

    //title field
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.required = true;

    //description field
    const descLabel = document.createElement('label');
    descLabel.textContent = 'Description:';
    const descInput = document.createElement('textarea');
    descInput.id = 'description';
    descInput.name = 'description';

    //Due Date field
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due Date:';
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'dueDate';
    dateInput.name = 'dueDate';

    //priority field
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    priorityLabel.name = 'priority';
    ['Low', 'Medium', 'High'].forEach(level => {
        const option = document.createElement('option');
        option.value = level.toLowerCase();
        option.textContent = level;
        prioritySelect.appendChild(option);
    });

    //submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Add Project';
    

    //close button
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.id = 'close-form';
    closeBtn.textContent = 'Close';

    //append elements to form 
    projectForm.appendChild(h2Title);
    projectForm.appendChild(titleLabel);
    projectForm.appendChild(titleInput);
    projectForm.appendChild(descLabel);
    projectForm.appendChild(descInput);
    projectForm.appendChild(dateLabel);
    projectForm.appendChild(dateInput);
    projectForm.appendChild(priorityLabel);
    projectForm.appendChild(prioritySelect);
    projectForm.appendChild(submitBtn);
    projectForm.appendChild(closeBtn);

    //append form to container
    formContainer.appendChild(projectForm);
    document.body.appendChild(formContainer);

    //event listener to close form
    closeBtn.addEventListener('click', () => {
        formContainer.remove();
    });

    //event listener for submit
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = titleInput.value.toUpperCase();
        const desc = descInput.value;
        const dueDate = dateInput.value;
        const priority = prioritySelect.value;
        
        addProject(title, desc, dueDate, priority);
        
        formContainer.remove();
    })
}