import dom, { createList } from "./dom";
import { getDatas, setData } from "./localStorage";
import { addProject, projectEdit } from "./projects";

let toDOID;

export function dialogFunctions() {

    const dialog = document.querySelector('dialog');
    const form = document.querySelector('#form')
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const date = document.querySelector('#dua-date');
    const prioritys = document.querySelectorAll('.priority-box');
    const dialogCloseBtn = document.querySelector('.fa-close');
    const submitBtn = document.querySelector('.submit-btn');

    prioritys.forEach(priority => {
        priority.addEventListener('click', (e) => {
            prioritys.forEach(priority => !priority.classList.remove('active'));
            e.target.classList.add('active');
        })
    })

    function getPriority() {
        let returnPriority;
        prioritys.forEach(priority => {
            if (priority.classList.contains('active')) {
                returnPriority = priority.innerHTML.toLowerCase();
                return returnPriority
            }
        })
        return returnPriority
    }


    function newProject(title, description, date, priority) {
        if (priority === undefined) {
            priority = 'low';
        }
        if (date === undefined) return

        return {
            title: title.value,
            description: description.value,
            date: new Date(date.value).toJSON().slice(0, 10),
            priority: priority,
            checked: 'false',
        }
    }

    form.addEventListener('submit', () => {
        if (submitBtn.innerHTML === 'ADD TO DO') {
            addProject(newProject(title, description, date, getPriority()))
        }
        else {
            const newObject = newProject(title, description, date, getPriority());
            const editedArray = setEditedTodo(newObject);
            projectEdit(editedArray)

        }
        closeDialog();
        createList();
    })

    function closeDialog() {
        dialog.close()
        title.value = "";
        description.value = "";
        date.value = "";
        submitBtn.innerHTML = 'ADD TO DO';
        prioritys.forEach(priority => !priority.classList.remove('active'));

    }

    dialogCloseBtn.addEventListener('click', closeDialog)
}

export function openDialog(dialog) {
    dialog.showModal()
}

export function editTask(dialog, idx) {
    const tasks = getDatas().map(task => task);
    const task = tasks[idx]
    const date = document.querySelector('#dua-date');
    const prioritys = document.querySelectorAll('.priority-box');
    const greenPrior = document.querySelector('.priority-low');
    const orangePrior = document.querySelector('.priority-medium');
    const redPrior = document.querySelector('.priority-high');
    const submitBtn = document.querySelector('.submit-btn');

    title.value = task.title;
    description.value = task.description;

    date.value = task.date;

    prioritys.forEach(priority => !priority.classList.remove('active'));
    if (task.priority === 'low') greenPrior.classList.add('active');
    else if (task.priority === 'medium') orangePrior.classList.add('active');
    else if (task.priority === 'high') redPrior.classList.add('active');
    submitBtn.innerHTML = 'CONFIRM EDIT'

    openDialog(dialog)
    toDOID = idx;
}

function setEditedTodo(newArray) {
    const tasks = getDatas().map(task => task);
    tasks.splice(toDOID, 1, newArray);
    return tasks
}
