import Tasks, { editText } from './tasks';

const tasksObject = new Tasks();
export default tasksObject;

const dataStore = () => {
  localStorage.setItem('data', JSON.stringify(tasksObject.taskList));
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
