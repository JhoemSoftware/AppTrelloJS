const form = document.querySelector('#formNewTask');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const formData = ev.target;

  const days = formData.titleTask.value;

  const data = {
    title: formData.titleTask.value,
    person: formData.responsibleTask.value,
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
