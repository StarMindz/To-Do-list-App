const tasks = document.getElementById('to-do-list');
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
    taskItem.completed = completed;
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
    li.setAttribute('id', `${index}_item`);
    li.innerHTML = html;
    tasks.appendChild(li);
    this.edit();
    this.remove();
    this.getCheckers();
  }

  edit() {
    const buttons = document.querySelectorAll('.list_icons');
    buttons[buttons.length - 1].addEventListener('click', (e) => {
      this.itemid = e.target.id.split('_')[0];
      const trash = document.getElementById(`${this.itemid}_delete`);
      const textInput = document.getElementById(`${this.itemid}_text`);
      trash.className = 'display fa-solid fa-trash-can';
      e.target.className = 'no-display list_icons fa-solid fa-ellipsis-vertical';
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
    checkers[checkers.length - 1].addEventListener('change', (e) => {
      this.id = e.target.id.split('_')[0];
      const text = document.getElementById(`${this.id}_text`);
      if (text.style.textDecoration === 'line-through') {
        text.style.textDecoration = '';
      } else {
        text.style.textDecoration = 'line-through';
      }
    });
  }

  dataLog() {
    localStorage.setItem('data', JSON.stringify(this.taskList));
  }
}

export default Tasks;
