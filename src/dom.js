import { openDialog } from "./dialogFunctions";
import { removeProject } from "./projects";

export default function dom() {
    const container = document.querySelector('#content');

    //HEADER
    const header = document.createElement('div');
    header.classList.add('header');

    const headerLeft = document.createElement('div');
    headerLeft.classList.add('header-left');
    headerLeft.innerHTML = `TO - DO <i class="fa fa-sticky-note"></i>`;

    const headerRight = document.createElement('div');
    headerRight.classList.add('header-right');
    headerRight.innerHTML = `<i class="fa fa-plus"></i>`;

    header.append(headerLeft, headerRight)

    //DIALOG
    const dialog = document.querySelector('dialog')
    headerRight.addEventListener('click', () => {
        openDialog(dialog)
    })

    //CONTENT
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const content = document.createElement('div');
    content.classList.add('content');

    contentContainer.append(content);
    container.append(header, contentContainer);
}


export function createList() {
    const tasks = JSON.parse(localStorage.getItem('projects'))?.map(element => element)
    const content = document.querySelector('.content');
    content.innerHTML = "";

    tasks?.forEach((task, idx) => {

        const taskLine = document.createElement('div');
        taskLine.classList.add('task-line');

        if (task.priority === 'high') {
            taskLine.classList.add('high');
        }
        else if (task.priority === 'medium') {
            taskLine.classList.add('medium');
        }
        else if (task.priority === 'low') {
            taskLine.classList.add('low');
        }

        const checked = document.createElement("input");
        checked.classList.add('checked');
        checked.setAttribute("type", "checkbox");

        const title = document.createElement('div');
        title.classList.add('title');
        title.innerText = task.title;

        const description = document.createElement('div');
        description.classList.add('description');
        description.innerText = task.description;

        const date = document.createElement('div');
        date.classList.add('date');
        date.innerText = task.date

        const edit = document.createElement('i');
        edit.classList.add('fa', 'fa-pencil-square')

        const deleteBtn = document.createElement('i');
        deleteBtn.classList.add('fa', 'fa-trash')
        deleteBtn.addEventListener('click', ()=>{
            removeProject(idx)})

        taskLine.append(checked, title, date, edit, deleteBtn);
        content.append(taskLine)

    })
}
