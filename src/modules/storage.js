import Tasks from './tasks.js';

const tasksObject = new Tasks();
const tasks = document.getElementById('to-do-list');
export default tasksObject;

const dataStore = () => {
  localStorage.setItem('data', JSON.stringify(tasksObject.taskList));
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
      tasksObject.counter += 1;
    });
  });
};

export { dataStore, retrieveStorage };
