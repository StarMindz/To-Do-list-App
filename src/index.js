import './index.css';

import tasksObject, {
  dataStore, retrieveStorage, editText, getCheckers,
}
from './modules/storage.js';

import clearAll from './modules/clear.js';

const text = document.getElementById('to-do-list-input');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
  const description = text.value;
  if (description !== '') {
    tasksObject.addTask(description);
    editText();
    getCheckers();
    text.value = '';
    dataStore();
    tasksObject.counter += 1;
  }
});

retrieveStorage();

clearAll();

document.getElementById('refresh');
