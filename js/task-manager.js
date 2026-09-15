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