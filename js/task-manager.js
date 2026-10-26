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
let taskId = 0;
const tasks = [];
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-name");
const priorityInput = document.getElementById("task-priority");
const importantInput = document.getElementById("task-important");
let editingId = null;

function logTasks() {
    console.log(JSON.stringify(tasks));
}

function addTask(event) {
    event.preventDefault();
    const name = taskInput.value.trim();
    if (!name) return;

    tasks.push({
        id: ++taskId,
        name,
        priority: priorityInput.value,
        isImportant: importantInput.checked,
        isCompleted: false
    });
    renderTasks();
    logTasks();
    document.getElementById("task-form").reset();
    taskInput.focus();
}

function completeTask(id) {
    const task = tasks.find(task => task.id === id);
    task.isCompleted = !task.isCompleted;
    renderTasks();
    logTasks();
}

function toggleImportant(id) {
    const task = tasks.find(task => task.id === id);
    task.isImportant = !task.isImportant;
    renderTasks();
    logTasks();
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    renderTasks();
    logTasks();
}

function deleteList() {
    tasks.splice(0, tasks.length);
    editingId = null;
    renderTasks();
    logTasks();
}

function renderTasks() {
    taskList.replaceChildren();
    if (!tasks.length) {
        const empty = document.createElement("p");
        empty.className = "task-empty";
        empty.textContent = "No tasks yet. Add one above.";
        taskList.append(empty);
        return;
    }

    tasks.forEach(task => {
        const card = document.createElement("article");
        card.className = "task-card";

        const details = document.createElement("div");
        details.className = "task-details";
        const name = document.createElement("p");
        name.className = "task-name";
        name.textContent = task.name;
        name.style.color = task.isImportant ? "red" : "";
        name.style.textDecoration = task.isCompleted ? "line-through" : "none";

        const priority = document.createElement("span");
        priority.className = "task-priority";
        priority.textContent = task.priority;
        const priorityStyles = {
            High: ["#b42318", "#fee4e2"],
            Medium: ["#805b10", "#fff3cd"],
            Low: ["#27724d", "#dcfce7"]
        };
        priority.style.color = priorityStyles[task.priority][0];
        priority.style.backgroundColor = priorityStyles[task.priority][1];
        details.append(name, priority);

        const controls = document.createElement("div");
        controls.className = "task-controls";
        if (editingId === task.id) {
            const form = document.createElement("form");
            form.className = "task-edit-form";
            const nameLabel = document.createElement("label");
            nameLabel.textContent = "Task name:";
            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.required = true;
            nameInput.value = task.name;
            nameInput.addEventListener("input", () => nameInput.setCustomValidity(""));
            nameLabel.append(nameInput);

            const priorityLabel = document.createElement("label");
            priorityLabel.textContent = "Priority:";
            const prioritySelect = document.createElement("select");
            ["High", "Medium", "Low"].forEach(value => {
                const option = document.createElement("option");
                option.value = value;
                option.textContent = value;
                option.selected = task.priority === value;
                prioritySelect.append(option);
            });
            priorityLabel.append(prioritySelect);

            const importantLabel = document.createElement("label");
            importantLabel.className = "task-important-check";
            const importantCheckbox = document.createElement("input");
            importantCheckbox.type = "checkbox";
            importantCheckbox.checked = task.isImportant;
            importantLabel.append(importantCheckbox, " Important");

            const save = document.createElement("button");
            save.type = "submit";
            save.textContent = "Save";
            const cancel = document.createElement("button");
            cancel.type = "button";
            cancel.textContent = "Cancel";
            cancel.addEventListener("click", () => {
                editingId = null;
                renderTasks();
            });
            form.append(nameLabel, priorityLabel, importantLabel, save, cancel);
            form.addEventListener("submit", event => {
                event.preventDefault();
                const nextName = nameInput.value.trim();
                if (!nextName) {
                    nameInput.setCustomValidity("Enter a task name.");
                    nameInput.reportValidity();
                    return;
                }
                nameInput.setCustomValidity("");
                task.name = nextName;
                task.priority = prioritySelect.value;
                task.isImportant = importantCheckbox.checked;
                editingId = null;
                renderTasks();
                logTasks();
            });
            card.append(details, form);
        } else {
            const edit = document.createElement("button");
            edit.type = "button";
            edit.textContent = "Edit";
            edit.addEventListener("click", () => {
                editingId = task.id;
                renderTasks();
            });
            controls.append(edit);
            card.append(details);
        }

        const important = document.createElement("button");
        important.type = "button";
        important.textContent = task.isImportant ? "Unmark important" : "Mark important";
        important.addEventListener("click", () => toggleImportant(task.id));
        const complete = document.createElement("button");
        complete.type = "button";
        complete.textContent = task.isCompleted ? "Mark active" : "Complete";
        complete.addEventListener("click", () => completeTask(task.id));
        const remove = document.createElement("button");
        remove.type = "button";
        remove.textContent = "Delete";
        remove.addEventListener("click", () => deleteTask(task.id));
        controls.append(important, complete, remove);
        card.append(controls);
        taskList.append(card);
    });
}

document.getElementById("task-form").addEventListener("submit", addTask);
document.getElementById("delete-list").addEventListener("click", deleteList);
renderTasks();
