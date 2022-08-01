const form = document.querySelector('#formNewTask');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const formData = ev.target;

  const days = formData.nombreTarea.value;

  const data = {
    title: formData.nombreTarea.value,
    person: formData.selectEncargadoTarea.value,
    details: formData.descripcionTarea.value,
    deadline: Number(moment().add(7, 'days').format('X')),
    created: Number(moment().add(Number(days), 'days').format('X')),
    state: 'to-do'
  };

  ApiClient.post(`${API_URL}/tasks`, data)
    .then((resp) => {
      createTask(resp.data);
      formData.reset();
    })
    .catch((e) => console.error(e));
});
