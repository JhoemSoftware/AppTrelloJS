API_URL =
  'https://my-json-server.typicode.com/JhoemSoftware/AppTrelloJS';

const ApiClient = axios.create({
  baseURL: API_URL
});

ApiClient.get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

const showAllTasks = (data) => {
  data.map((task) => createTask(task));
  console.log(data)
};

const createTask = (task) => {
  let newTask = document.createElement('article');

  let taskTitle = document.createElement('h3');
  taskTitle.innerText = task.title;

  let taskInfo = document.createElement('p');
  taskInfo.innerHTML = `<b>Responsable:</b> ${task.person}<br>`;
  taskInfo.innerHTML += `<b>Detalles:</b> ${task.details}<br>`;
  taskInfo.innerHTML += `<b>Fecha:</b> ${dateFormat(task.deadline)}<br>`;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskInfo);

  let columnToDo = document.querySelector('#todoTasks');
  let columnInProgress = document.querySelector('#progressTasks');
  let columnDone = document.querySelector('#doneTasks');

  if (task.state === 'to-do') {
    columnToDo.appendChild(newTask);
  }
  if (task.state === 'in-progress') {
    columnInProgress.appendChild(newTask);
  }
  if (task.state === 'done') {
    columnDone.appendChild(newTask);
  }
};
