import tasksObject, {
  dataStore,
}
from './storage.js';

export const clearAllFunction = (obj) => {
  obj = obj.filter((value) => value.completed !== true);
  obj.forEach((todo, id) => {
    todo.index = id;
  });
  return obj
}

const clearAll = () => {
  const clear = document.getElementById('clearlist-btn');

  clear.addEventListener('click', () => {
    tasksObject.taskList = clearAllFunction(tasksObject.taskList);
    dataStore();
    document.location.reload();
  });
};

export default clearAll;