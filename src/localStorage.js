export function getDatas(){
   return JSON.parse(localStorage.getItem('projects'))
}

export function setData(data){
    localStorage.setItem('projects', JSON.stringify(data))
}

export function clearDatas(){
    localStorage.clear();
}