let myTasks = [];

// Calculate the total weekly task goal for a user
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    let output = "User: " + userName + "<br>" + "Total Weekly Goal: " + totalGoal;

    document.getElementById("goal-message").innerHTML = output;
}

document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let userName = document.getElementById("name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});
const taskList = document.getElementById("task-list");

const taskInput = document.getElementById("task-name");
const userTasks = document.createElement("ul");
userTasks.id = "user-tasks";
taskList.appendChild(userTasks);
document.getElementById("add-task").addEventListener("click", function(event) {
event.preventDefault();
const task = taskInput.value.trim();
if (!task) return;
myTasks.push(task);
const item = document.createElement("li");
item.textContent = task + " ";
const removeButton = document.createElement("button");
removeButton.type = "button";
removeButton.textContent = "Remove";
removeButton.addEventListener("click", function() {
myTasks.splice(Array.from(userTasks.children).indexOf(item), 1);
item.remove();
});
item.appendChild(removeButton);
userTasks.appendChild(item);
taskInput.value = "";
taskInput.focus();
});
