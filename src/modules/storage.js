import Tasks from './tasks.js';

const tasksObject = new Tasks();
const tasks = document.getElementById('to-do-list');
export default tasksObject;

const dataStore = () => {
  localStorage.setItem('data', JSON.stringify(tasksObject.taskList));
};

export const getCheckers = () => {
  const checkers = document.querySelectorAll('.list_checkbox');
  let check = '';
  checkers[checkers.length - 1].addEventListener('change', (e) => {
    const id = e.target.id.split('_')[0];
    const text = document.getElementById(`${id}_text`);
    if (text.style.textDecoration === 'line-through') {
      text.style.textDecoration = '';
      check = false;
    } else {
      text.style.textDecoration = 'line-through';
      check = true;
    }
    tasksObject.taskList.forEach((element) => {
      if (Number(id) === element.index) {
        element.completed = check;
      }
    });
    dataStore();
  });
};

// Funtion for editing tasks
export const editText = () => {
  const allTexts = document.querySelectorAll('.input_text');

  const changeValue = (e) => {
    const id = e.target.id.split('_')[0];
    const text = document.getElementById(`${id}_text`);
    if (e.key === 'Enter') {
      tasksObject.taskList.forEach((element) => {
        if (Number(id) === element.index) {
          element.description = text.value;
        }
      });
      dataStore();
      tasks.innerHTML = '';
      tasksObject.taskList.forEach((element) => {
        const { index, description } = element;
        tasksObject.display(index, description);
        editText();
        getCheckers();
        tasksObject.counter += 1;
      });
    }
  };

  allTexts[allTexts.length - 1].addEventListener('keydown', (e) => changeValue(e));
};

// function for Local storage retrieval
const retrieveStorage = () => {
  // Local Storage Retrieval
  const storage = JSON.parse(localStorage.getItem('data').split(','));
  document.addEventListener('DOMContentLoaded', () => {
    storage.forEach((element) => {
      const { description, completed } = element;
      tasksObject.addTask(description, completed);
      editText();
      getCheckers();
      tasksObject.counter += 1;
    });
  });
};

export { dataStore, retrieveStorage };
