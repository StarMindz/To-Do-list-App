import Tasks from './modules/tasks.js';

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

describe('Adjusting to the todo list', () => {
  const newTask = new Tasks();
//Edith, you can uncomment this part below. Also delete this line of comment
  // test('Add a new todo item', () => {
  //   newTask.addTask(' task 1');
  //   newTask.addTask('task 2');
  //   newTask.addTask('task 3');
  //   newTask.addTask('task 4');

  //   const listItems = document.querySelectorAll('.list-item');
  //   expect(listItems.length).toBe(4);
  // });
//Gleeny, you should uncomment this part below, also delete this line of comment once done before pushing
  // test('Remove some todo item', () => {
  //   newTask.delete(0);
  //   newTask.delete(1);
  //   expect(newTask.taskList.length).toBe(2);
  // });
});
