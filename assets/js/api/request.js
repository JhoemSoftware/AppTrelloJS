API_URL = 'https://my-json-server.typicode.com/JhoemSoftware/AppTrelloJS';

const ApiClient = axios.create({
  baseURL: API_URL
});

ApiClient.get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

const showAllTasks = (data) => data.map((task) => createTask(task));

const createTask = (task) => {
  let newTask = document.createElement('article');

  let taskTitle = document.createElement('h3');
  taskTitle.innerText = task.title;
  
  let taskInfo = document.createElement('p');
  taskInfo.innerHTML = `<img src="${task.img}"><br>`
  taskInfo.innerHTML += `<b>Responsable:</b> ${task.person}<br>`;
  taskInfo.innerHTML += `<b>Detalles:</b> ${task.details}<br>`;
  taskInfo.innerHTML += `<b>Fecha:</b> ${dateFormat(task.deadline)}`;

  newTask.appendChild(taskTitle);
  newTask.innerHTML += '<hr>';
  newTask.appendChild(taskInfo);

  let divToDo = document.querySelector('#todoTasks');
  let divProgress = document.querySelector('#progressTasks');
  let divDone = document.querySelector('#doneTasks');

  if (task.state === 'to-do') divToDo.appendChild(newTask);
  if (task.state === 'in-progress') divProgress.appendChild(newTask);
  if (task.state === 'done') divDone.appendChild(newTask);
  console.log(task)
};
