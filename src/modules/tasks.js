const tasks = document.getElementById('to-do-list');

class Tasks {
    constructor() {
        this.tasks = [];
        this.counter = 0;
        this.delcounter = 0;
      }
    
      addTask(description) {
        const taskItem = {};
        taskItem.index = this.counter;
        taskItem.description = description;
        this.tasks.push(taskItem);
        this.display(this.counter, description);
      }
    
      display(index, description, completed='false') {
        const html = `
        <input type='checkbox' value=${completed} class = 'list_checkbox' id = '${index}_input'></input>
        <div class= 'label-section'>
        <input type= 'text' id = '${index}_text' value = '${description}' class='input_text' disabled='disabled'></input>
        <i id='${index}_icon' class='list_icons fa-solid fa-ellipsis-vertical'></i>
        </div>
        `;
        const li = document.createElement('li');
        li.className = 'list-item';
        li.setAttribute('id', index+'_item');
        li.innerHTML = html;
        tasks.appendChild(li);
      }
    
    //   removeBook() {
    //     const buttons = document.querySelectorAll('.removebuttons');
    //     buttons[buttons.length - 1].addEventListener('click', (e) => {
    //       e.preventDefault();
    //       const elid = e.target.parentNode.id;
    //       const remotion = e.target.parentNode;
    //       const localcount = elid - this.delcounter;
    //       list.removeChild(remotion);
    //       this.bookArray.splice(localcount, 1);
    //       this.delcounter += 1;
    //       this.dataLog();
    //     });
    //   }
    
      dataLog() {
        localStorage.setItem('data', JSON.stringify(this.tasks));
      }
}

export default Tasks;