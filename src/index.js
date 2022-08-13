
import './index.css';
const lists = document.getElementById('to-do-list');

// Create array of tasks objects
const toDoList = [
  {
    description: 'Go to Work',
    completed: false,
    index: 1,
  },
  {
    description: 'Visit the Gym',
    completed: false,
    index: 2,
  },
  {
    description: 'Call my Parents',
    completed: false,
    index: 3,
  },
  {
    description: 'Go to the Library',
    completed: false,
    index: 4,
  },
  {
    description: 'Go shopping',
    completed: false,
    index: 5,
  },
];

// Save to local storage
localStorage.setItem('data', JSON.stringify(toDoList));

// innerHtml
let innerText = '';

// Loop through array of object adding it to the toDoList innerHtml
toDoList.forEach((task) => {
    let html = `
 <li class = 'list-item' id ='${task.index}_item'>
 <input type='checkbox' value=${task.completed} class = 'list_checkbox' id = '${task.id}_input'></input>
 <div class= "label-section">
 <input type= 'text' id = '${task.index}_text' value = '${task.description}' class='input_text' disabled="disabled"></input>
 <i id='${task.index}_icon' class="list_icons fa-solid fa-ellipsis-vertical"></i>
 </div>
 </li>
 `;
    innerText += html;
});

// Add innerHTML
lists.innerHTML = innerText;