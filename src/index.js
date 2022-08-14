import './index.css';
import tasksObject, { dataStore, retrieveStorage } from './modules/storage';
import { editText } from './modules/tasks';

const text = document.getElementById('to-do-list-input');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
  const description = text.value;
  if (description !== '') {
    tasksObject.addTask(description);
    editText();
    text.value = '';
    dataStore();
    tasksObject.counter += 1;
  }
});

retrieveStorage();

document.getElementById('refresh');
