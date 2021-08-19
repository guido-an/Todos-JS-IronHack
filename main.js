document.addEventListener('DOMContentLoaded', function () {
   const list = document.getElementById('display-todos')
   const todoInput = document.getElementById('input-todo')
   const addBtn = document.getElementById('add-todo-btn')

   function createTodo(){
       // Create elements
       const div = document.createElement('div')
       const li = document.createElement('li')
       const span = document.createElement('span')

       // Adding HTML
       li.innerHTML = todoInput.value
       span.innerHTML = 'x'
         
       // Append elements
       div.appendChild(li)
       div.appendChild(span)
       list.appendChild(div)

       // Add CSS
       div.classList.add('my-todo')
       span.classList.add('remove')
       
       handleSubmit()

   }

   function handleSubmit(){
        todoInput.value = ''
        removeElements()
   }

   function removeElements(){
       const elements = document.getElementsByClassName('remove')
       const lastAddedSpan = elements[elements.length - 1]
       
       lastAddedSpan.addEventListener('click', () => {
           lastAddedSpan.parentNode.remove()
       })
   }


//    const fruits = ['banana', 'mango', 'papaya']
//    console.log(fruits[fruits.length - 1])


   addBtn.addEventListener('click', createTodo)
  




})
