import { createList } from "./dom";
import { clearDatas, getDatas, setData } from "./localStorage";

export function setProjects() {
    let projectArray = [];

    if (getDatas() === null) {
        projectArray = [
            {
                title: 'Cleaning',
                description: 'just clean the house pls',
                date: new Date().toJSON().slice(0, 10),
                priority: 'low',
                checked: 'false,'
            },
            {
                title: 'Gym',
                description: 'arm day',
                date: new Date().toJSON().slice(0, 10),
                priority: 'high',
                checked: 'true',
            },
            {
                title: 'Family time',
                description: 'play with kids',
                date: new Date().toJSON().slice(0, 10),
                priority: 'high',
                checked: 'false',
            },
            {
                title: 'Walk the doggy',
                description: 'also dont forget to pick up the shit',
                date: new Date().toJSON().slice(0, 10),
                priority: 'medium',
                checked: 'false',
            },
        ]
        setData(projectArray)
    }
    else if(getDatas() !== null){
        projectArray = getDatas();
    }
}

export function addProject(project) {
    const projectArray = getDatas()
    projectArray.push(project);
    setData(projectArray);
}

export function removeProject(idx) {
    let projectArray = getDatas()
    const newArray = projectArray.filter((project) => project != projectArray[idx]);
    setData(newArray);
    createList();
}

export function projectEdit(newArray){
    setData(newArray)    
}
