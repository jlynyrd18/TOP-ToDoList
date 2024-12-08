export function domDesign() {
    //getting ids
    const projectBody = document.getElementById('body');
    const projectDiv = document.getElementById('project-list');
    const taskDiv = document.getElementById('task-list');

    //project area
    const projectTitle = document.createElement('h2');
    projectTitle.textContent = 'Projects';
    projectDiv.appendChild(projectTitle);

    //task area
    const taskTitle = document.createElement('h2');
    taskTitle.textContent = 'Tasks';
    taskDiv.appendChild(taskTitle);
}