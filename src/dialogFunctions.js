import dom, { createList } from "./dom";
import { getDatas, setData } from "./localStorage";
import { addProject } from "./projects";


export function dialogFunctions() {

    const dialog = document.querySelector('dialog');
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const date = document.querySelector('#dua-date');
    const prioritys = document.querySelectorAll('.priority-box');
    const submitBtn = document.querySelector('.submit-btn');
    const dialogCloseBtn = document.querySelector('.fa-close');

    prioritys.forEach(priority => {
        priority.addEventListener('click', (e) => {
            prioritys.forEach(priority => !priority.classList.remove('active'));
            e.target.classList.add('active');
        })
    })

    function bazdmeg(){
        return "bazdmeg!!!"
    }

    function getPriority() {
        prioritys.forEach(priority => {
            if (priority.classList.contains('active')) {
                console.log(priority.innerHTML);
                const value = priority.innerHTML;
                return value
            }
        })
    }

    function closeDialog() {
        dialog.close()
    }

    function newProject(title, description, date, priority) {
        // if(title === undefined || description === undefined || date === undefined || priority === undefined) return;
 
        return {
            title: title.value,
            description: description.value,
            date: date.value,
            priority: priority,
            checked: 'false',
        }
    }

    submitBtn.addEventListener('click', () => {
        addProject(newProject(title, description, date, getPriority()))
        createList();
    })

    dialogCloseBtn.addEventListener('click', closeDialog)
}

export function openDialog(dialog) {
    dialog.showModal()
}
