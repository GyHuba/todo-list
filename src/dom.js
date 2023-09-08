import { openDialog } from "./dialogFunctions";
import { getDatas } from "./localStorage";
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
    const tasks = getDatas()?.map(element => element)
    const content = document.querySelector('.content');
    content.innerHTML = "";

    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card', 'remove');

    const taskCardHeader = document.createElement('div');
    taskCardHeader.classList.add('task-card-header');

    const cardCloseBtn = document.createElement('i');
    cardCloseBtn.classList.add("fa", "fa-close");
    taskCardHeader.append(cardCloseBtn)
    cardCloseBtn.addEventListener('click', ()=>{
        taskCard.innerHTML = "";
        taskCard.classList.add('remove');
    })

    tasks?.forEach((task, idx) => {

        const taskLine = document.createElement('div');
        taskLine.classList.add('task-line');
        taskLine.addEventListener('click', ()=>{
            taskCard.innerHTML = "";
            taskCard.classList.remove('remove')
            taskCard.append(taskCardHeader, showSingleTask(idx))
        })

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
        content.append(taskLine, taskCard)

    })
}

function showSingleTask(idx){
    const tasks = getDatas().map(task =>task);
    const task = tasks[idx]

    const taskCardContainer = document.createElement('div');
    taskCardContainer.classList.add('task-card-container');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = `<strong>${task.title}`;

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card-description');
    cardDescription.innerHTML = `<strong>Details:</strong> ${task.description}`;

    const cardPriority = document.createElement('div');
    cardPriority.classList.add('card-priority');
    cardPriority.innerHTML = `<strong>Priority:</strong> ${task.priority}`;

    const cardDate = document.createElement('div');
    cardDate.classList.add('card-date');
    cardDate.innerHTML = `<strong>Due date:</strong> ${task.date}`;
    
    taskCardContainer.append(cardTitle, cardDescription, cardPriority, cardDate)

    return taskCardContainer;
}
