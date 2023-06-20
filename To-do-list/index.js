let myInput = document.getElementById("myInput");
let myTasks = document.getElementById("tasks");
function toDo(){
    if(myInput.value.length == 0){
        alert("Please enter a task!");
    }
    else{
        myTasks.innerHTML += `
        <div class="task">
                <span id="taskname">${myInput.value}</span>
                <button class="delete"><i class="bi bi-trash3-fill"></i></button>
        </div>
        `;
        // deleting tasks
        let currentTask = document.querySelectorAll(".delete");
        for(let i=0; i<currentTask.length; i++){    
            currentTask[i].onclick = function(){  
            this.parentNode.remove();
            }
        }
        // crossing off a complete task
        let tasks = document.querySelectorAll(".task");
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle("completed");
            }
        }
        // clearing input field after each entry
        myInput.value="";
    }
}
