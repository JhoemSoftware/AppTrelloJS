const form = document.querySelector('#formNewTask');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const formHTML = ev.target;

  const days = formHTML.taskName.value;

  const data = {
    title: formHTML.taskName.value,
    img: formHTML.taskImg.value,
    person: formHTML.selectTaskManager.value,
    details: formHTML.taskDescription.value,
    deadline: Number(moment().add(7, 'days').format('X')),
    created: Number(moment().add(Number(days), 'days').format('X')),
    state: 'to-do'
  };

  ApiClient.post(`${API_URL}/tasks`, data)
    .then((resp) => {
      createTask(resp.data);
      swal("Excelente!", "La tarea ha sido creada", "success");
      formHTML.reset();
    })
    .catch((e) => console.error(e));
});
