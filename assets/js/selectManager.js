import { managers } from './managers.js';

let selectHTML = document.getElementById('selectEncargadoTarea')

const getManager = () => {
    for (let i = 0; i < managers.length; i++) {
        selectHTML.innerHTML += `<option value="${managers[i].id}"><b>${managers[i].profession}</b> • ${managers[i].name}</option>`
    }
}

getManager();