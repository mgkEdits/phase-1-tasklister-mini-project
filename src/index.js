document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");


  taskForm.addEventListener('submit',  (e) => {
    e.preventDefault(); // Prevent form submission
    createToDo(taskForm.querySelector('#new-task-description').value)
    taskForm.reset()


    function createToDo(toDo) {
      let listItem = document.createElement('li')
      let btn = document.createElement('button')
      listItem.textContent=  toDo ;
      btn.textContent =' X '
      btn.addEventListener('click', handleDelete)
      
      document.querySelector('#tasks').appendChild(listItem)
      listItem.appendChild(btn)
    }

    function handleDelete(e) {
      e.target.parentNode.remove()
    }
  });
})
