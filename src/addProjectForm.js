export function addProjectForm() {
    //create container
    const formContainer = document.createElement('div');
    formContainer.id = 'form-container';

    formContainer.innerHTML = `
    <form id='task-form'>
        <h2 id='form-title'>Add Project</h2>

        <label for='title'>Title:</label>
        <input type='text' id='title' name='title' required>

        <label for='description'>Description:</label>
        <textarea = id='description' name='description'></textarea>

        <label for='dueDate'>Due Date:</label>
        <input type='date' id='dueDate' name='dueDate'>

        <label for='priority'>Priority:</label>
        <select id='priority' name='priority'>
            <option value='low'>Low</option>
            <option value='medium>Medium</option>
            <option value='high>High</option>
        </select>

        <button type='submit'>Add Project</button>
        <button type='button id='close-form'>Close</button>
    </form>
    `;
          
    document.body.appendChild(formContainer);

    document.getElementById('close-form').addEventListener('click', () => {
        formContainer.remove();
    });
}