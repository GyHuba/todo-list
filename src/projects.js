import { createList } from "./dom";
import { clearDatas, getDatas, setData } from "./localStorage";

export function setProjects() {
    let projectArray = [];

    if (getDatas() === null) {
        projectArray = [
            {
                title: 'Cleaning',
                description: 'just clean the house pls',
                date: new Date().toLocaleDateString(),
                priority: 'low',
                checked: 'false,'
            },
            {
                title: 'Gym',
                description: 'arm day',
                date: new Date().toLocaleDateString(),
                priority: 'high',
                checked: 'true',
            },
            {
                title: 'Family time',
                description: 'play with kids',
                date: new Date().toLocaleDateString(),
                priority: 'high',
                checked: 'false',
            },
            {
                title: 'Walk the doggy',
                description: 'also dont forget to pick up the shit',
                date: new Date().toLocaleDateString(),
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

export function projectSetting(idx){
    let projectArray = getDatas();
    reWriteProject(projectArray[idx].title, projectArray[idx].description, projectArray[idx].date, projectArray[idx].priority, projectArray[idx].checked)
}
