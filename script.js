document.addEventListener("DOMContentLoaded",function (){
    const todoForm = document.querySelector('.todo-form');
    const todoInput = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');
    const todoSubmit = document.querySelector('.todo-submit');
    let editMode = false;
    let editItem = null;

    todoForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const todotext = todoInput.value.trim();

        if(todotext !== ""){
            if(editMode){
                editItem.firstChild.textContent = todotext;
                todoSubmit.innerText = "Add Todo";
                editMode = false;
                editItem = null;
                
            }else{
                //add todo
                addTodoItem(todotext)
            }
            todoInput.value = ''
        }else{
            alert("Please enter the valid Task")
        }
    });

    todoList.addEventListener("click",function(event){
            const target = event.target;
            if(target.tagName === "BUTTON"){
                const todoItem = target.parentNode;
                if(target.innerText === '❌'){
                    todoItem.remove();
                }else{
                    editMode = true;
                    editItem = todoItem;
                    todoSubmit.innerText = "Edit Todo";
                    todoInput.value = todoItem.firstChild.textContent;
                    todoInput.focus()

                }
            }
    })

    function addTodoItem(todotext){
        const todoItem = document.createElement('li')
        const editButton = document.createElement('button')
        const removeButton = document.createElement('button');

        todoItem.innerHTML = `<span>${todotext}</span>`;
        editButton.innerText = "✏️";
        removeButton.innerText = "❌";

        todoItem.appendChild(editButton)
        todoItem.appendChild(removeButton);
        todoList.appendChild(todoItem);
        todoInput.value = ""

        

    }
})