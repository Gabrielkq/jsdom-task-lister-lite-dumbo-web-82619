let taskForm = document.getElementById("create-task-form")
let tasksUL = document.getElementById("tasks")
let priorityLevel = document.getElementById("priority")
let sortAButton = document.getElementById("sortA")
let sortDButton = document.getElementById("sortD")


taskForm.addEventListener("submit", function(evt){
  evt.preventDefault()
  let newTaskLI = document.createElement("li")
  let removeCheck = " ☑️";
  let level = priorityLevel.value
  let newTask = (document.getElementById("new-task-description").value + removeCheck)
  newTaskLI.innerText = newTask
    if (level == 1) {newTaskLI.className = "high"}
    if (level == 2) {newTaskLI.className = "medium"}
    if (level == 3) {newTaskLI.className = "low"}
    
  tasksUL.append(newTaskLI)
  taskForm.reset()
 })

tasksUL.addEventListener("click", function(evt){
  if (evt.target.tagName == "LI") {evt.target.remove()}
})

sortAButton.addEventListener("click", function(evt){
  let taskList = document.querySelectorAll("#tasks li")
  taskList.forEach(sortA)

})


function sortA(li){
  if (li.className == "high") {tasksUL.prepend(li)}
  if (li.className == "low") {tasksUL.append(li)}
}

sortDButton.addEventListener("click", function(evt){
  let taskList = document.querySelectorAll("#tasks li")
  taskList.forEach(sortD)

})

function sortD(li){
  if (li.className == "high") {tasksUL.append(li)}
  if (li.className == "low") {tasksUL.prepend(li)}
}






document.addEventListener("DOMContentLoaded", () => {
  // your code here
});












