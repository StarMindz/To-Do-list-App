import './index.css';
import tasksObject, { dataStore, retrieveStorage } from './modules/storage';
import { editText } from './modules/tasks';

const lists = document.getElementById('to-do-list');
const text = document.getElementById('to-do-list-input');
const addButton = document.getElementById('add-button');



addButton.addEventListener('click', () => {
  const description = text.value;
  if (description !== '')
    {
      tasksObject.addTask(description);
      editText();
      text.value = '';
      dataStore();
      tasksObject.counter += 1;
    }
});

retrieveStorage();
// Create array of tasks objects
// const toDoList = [];

// // Save to local storage
// localStorage.setItem('data', JSON.stringify(toDoList));

// // innerHtml
// let innerText = '';

// // Loop through array of object adding it to the toDoList innerHtml
// toDoList.forEach((task) => {
//   const html = `
//  <li class = 'list-item' id ='${task.index}_item'>
//  <input type='checkbox' value=${task.completed} class = 'list_checkbox' id = '${task.id}_input'></input>
//  <div class= 'label-section'>
//  <input type= 'text' id = '${task.index}_text' value = '${task.description}' class='input_text' disabled='disabled'></input>
//  <i id='${task.index}_icon' class='list_icons fa-solid fa-ellipsis-vertical'></i>
//  </div>
//  </li>
//  `;
//   innerText += html;
// });

// // Add innerHTML
// lists.innerHTML = innerText;
