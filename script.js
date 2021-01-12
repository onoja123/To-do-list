const addTodoItemButton = document.querySelector('#add-todo-icon-button')
const todoItemsContainer = document.querySelector('#todoItems');
  window.todoItems = [];

addTodoItemButton.addEventListener('click', showPrompt)

function showPrompt(e) {
  e.preventDefault();
  const todoItem = prompt('What do you plan on doing?');

  const todoItemDiv = document.createElement('div');
  todoItemDiv.classList.add('todoItem');
  const inputElement = document.createElement('input')
  inputElement.type = 'checkbox';
  const todoItemContentElem = document.createElement('div')
  todoItemContentElem.classList.add('todoItemContent');
  todoItemContentElem.innerHTML = todoItem;

  inputElement.addEventListener('click', function(e){
    console.log(e.target.parentNode)
    if(e.target.checked){
      e.target.parentNode.remove();
    }
  });

  todoItemDiv.appendChild(inputElement)
  todoItemDiv.appendChild(todoItemContentElem);

  if(window.todoItems && window.todoItems.length <= 0){
      todoItemsContainer.innerHTML = '';
  }
  window.todoItems.push(todoItem);
  todoItemsContainer.appendChild(todoItemDiv);
  
}
