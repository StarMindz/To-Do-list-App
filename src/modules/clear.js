import tasksObject, {
  dataStore,
}
from "./storage";

const clearAll = () => {
  const clear  = document.getElementById('clearlist-btn');

  clear.addEventListener('click', () => {
    tasksObject.taskList = tasksObject.taskList.filter((value) => value.completed !== true);
    console.log(tasksObject.taskList)
    tasksObject.taskList.forEach((todo, id) => {
      todo.index = id;
    });
    dataStore();
    document.location.reload();
  });
}

export default clearAll