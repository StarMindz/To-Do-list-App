const tasks = document.getElementById('to-do-list');
import tasksObject, { dataStore } from './storage';


class Tasks {
  constructor() {
    this.taskList = [];
    this.counter = this.taskList.length;
    this.delcounter = 0;
  }

  addTask(description, completed = 'false') {
    const taskItem = {};
    taskItem.index = this.counter;
    taskItem.description = description;
    taskItem.completed = false;
    this.taskList.push(taskItem);
    this.display(this.counter, description, completed);
  }

  display(index, description, completed) {
    const html = `
        <input type='checkbox' value=${completed} class = 'list_checkbox' id = '${index}_input'></input>
        <div class= 'label-section'>
        <input type= 'text' id = '${index}_text' value = '${description}' class='input_text' disabled='disabled'></input>
        <i id='${index}_delete' class='no-display trash_icons fa-solid fa-trash-can'></i>
        <i id='${index}_icon' class='display list_icons fa-solid fa-ellipsis-vertical'></i>
        </div>
        `;
    const li = document.createElement('li');
    li.className = 'list-item';
    const address = index + '_item'
    li.setAttribute('id', address);
    li.innerHTML = html;
    tasks.appendChild(li);
    this.edit();
    this.remove();
    this.getCheckers();
  }

  edit() {
    const buttons = document.querySelectorAll('.list_icons');
    buttons[buttons.length - 1].addEventListener('click', (e) => {
      const itemid = e.target.id.split('_')[0];
      const trash = document.getElementById(itemid + '_delete');
      const textInput = document.getElementById(itemid + '_text');
      trash.className = 'display fa-solid fa-trash-can';
      e.target.className =
        'no-display list_icons fa-solid fa-ellipsis-vertical';
      textInput.disabled = false;
    });
  }

  remove() {
    const buttons = document.querySelectorAll('.trash_icons');
    buttons[buttons.length - 1].addEventListener('click', (e) => {
      const parent = e.target.parentNode;
      const mainParent = parent.parentNode;
      const id = e.target.id.split('_')[0];
      const localcount = id - this.delcounter;
      tasks.removeChild(mainParent);
      this.taskList.splice(localcount, 1);
      this.delcounter += 1;
      this.dataLog();
    });
  }

  getCheckers() {
    const checkers = document.querySelectorAll('.list_checkbox');
    let check = false;
    checkers[checkers.length - 1].addEventListener('change', (e) => {
      const id = e.target.id.split('_')[0];
      const text = document.getElementById(id + '_text');
      if (text.style.textDecoration === 'line-through') {
        text.style.textDecoration = '';
        check = false;
      } else {
        text.style.textDecoration = 'line-through';
        check = true;
      }
    });
  }

  dataLog() {
    localStorage.setItem('data', JSON.stringify(this.taskList));
  }
}

export const editText = () => {
  const allTexts = document.querySelectorAll('.input_text');

  const changeValue = (e) => {
    const id = e.target.id.split('_')[0];
    const text = document.getElementById(id + '_text');
    if (e.key === 'Enter') {
      tasksObject.taskList.map((element) => {
        if (Number(id) === element.index) {
          element.description = text.value;
        }
      });
      dataStore();
      tasks.innerHTML = '';
      tasksObject.taskList.forEach((element) => {
        const { index, description, completed } = element;
        tasksObject.display(index, description);
        editText();
        tasksObject.counter += 1;
      });
    }
  };

  allTexts[allTexts.length - 1].addEventListener('keydown', (e) =>
    changeValue(e)
  );
};

export default Tasks;
