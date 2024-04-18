// tōdo list app 
function add() {
  const taskInput = document.getElementById('task');
  const task = taskInput.value.trim();
  
  // if
  if (task !== '') {
    const todoList = document.getElementById('todoList');
    const list = document.createElement('li');
    
    list.textContent = task;
    todoList.appendChild(list);
    
    todoList.value = '';
  }
}