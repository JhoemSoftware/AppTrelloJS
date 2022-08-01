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

  let taskResponsible = document.createElement('p');
  taskResponsible.innerHTML = `<b>Responsable:</b> ${task.person}`;

  let taskDate = document.createElement('p');
  taskDate.innerHTML = `<b>Plazo:</b> ${dateFormat(task.deadline)}`;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskResponsible);
  newTask.appendChild(taskDate);

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
