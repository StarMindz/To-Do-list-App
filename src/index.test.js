import Tasks from './modules/tasks.js';
import { clearAllFunction } from './modules/clear.js';

document.body.innerHTML = `
  <div class='to-do-list-container'>
      <div class='to-do-head'>
        <h1 id='to-do-list-title'>Today's To Do</h1>
        <!-- <span>Updating ...</span> -->
        <i id='refresh' class='fa-solid fa-arrows-rotate'></i>
      </div>

      <div class='Add-to-do-list'>
        <input
          id='to-do-list-input'
          type='text'
          name='List-name'
          placeholder='Add to your list...'
        />
        <i id='add-button' class='input-icon fas fa-hand-point-left'></i>
      </div>
      <ul id='to-do-list'>
      </ul>
      <button type='submit' id='clearlist-btn'>Clear all completed</button>
    </div>
`;

// Tests for add and remove functions
describe('Adjusting to the todo list', () => {
  const newTask = new Tasks();
  test('Add a new todo item', () => {
    newTask.addTask(' task 1');
    newTask.addTask('task 2');
    newTask.addTask('task 3');
    newTask.addTask('task 4');

    const listItems = document.querySelectorAll('.list-item');
    expect(listItems.length).toBe(4);
  });
  test('Remove some todo item', () => {
    newTask.delete(0);
    newTask.delete(1);
    expect(newTask.taskList.length).toBe(2);
  });
});

// Test for Edit functions
describe('Edit a todo item', () => {
  const newTask = new Tasks();
  test('Edit an existing todo item', () => {
    // clear the list by making it innerHtml empty
    const list = document.getElementById('to-do-list');
    list.innerHTML = '';

    // Add three new tasks
    newTask.addTask('First task');
    newTask.addTask('Second Task');
    newTask.addTask('Third task');
    // Target the second task with index '1'
    const second = document.querySelectorAll('.list-item')[1].children[1].children[0];
    // check that the value of the second element is as created
    expect(second.value).toBe('Second Task');

    // Edit the value
    second.value = 'Second Task Edited';

    // check that the value has changed as edited
    expect(second.value).toBe('Second Task Edited');

    // Expect the number of list item to still be 1
    const listItems = document.querySelectorAll('.list-item');
    expect(listItems.length).toBe(3);
  });
});

// Test for Clear functions

describe('Functions for updating completed item', () => {
  test('Test if checked items are updated as completed = true', () => {
    const newTask = new Tasks();
    // clear the list by making it innerHtml empty
    const list = document.getElementById('to-do-list');
    list.innerHTML = '';

    // Add two new tasks
    newTask.addTask('First Item');
    newTask.addTask('Second Item');
  
    // Get first item checkbox
    const firstcheckbox = document.querySelectorAll('.list-item')[0].children[0];
    expect(firstcheckbox.checked).toBe(false); // Checkbox is expected to be false by default
    firstcheckbox.checked = true;
    expect(firstcheckbox.checked).toBe(true);
  });

  // Test to check that completed tasks are removed from the list
  test('Testing function for clearing all complted tasks', () => {
    const newTask = new Tasks();
    // clear the list by making it innerHtml empty
    const list = document.getElementById('to-do-list');
    list.innerHTML = '';

    // Add Four new tasks
    newTask.addTask('First uncompleted');
    newTask.addTask('Second uncompleted');
    newTask.addTask('Third uncompleted');
    newTask.addTask('Fourth uncompleted');

    expect(newTask.taskList.length).toBe(4);

    // Get first and third item checkbox
    const firstcheckbox = document.querySelectorAll('.list-item')[0].children[0];
    const thirdcheckbox = document.querySelectorAll('.list-item')[2].children[0];

    firstcheckbox.checked = true;
    thirdcheckbox.checked = true;
    newTask.taskList[0].completed = true;
    newTask.taskList[2].completed = true;
    newTask.taskList = clearAllFunction(newTask.taskList);
    expect(firstcheckbox.checked).toBe(true);
    expect(thirdcheckbox.checked).toBe(true);
    expect(newTask.taskList.length).toBe(2);
  });
});