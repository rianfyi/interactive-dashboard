const answers = ["Yes.", "No.", "Probably yes.", "Probably not.", "Definitely yes.", "Definitely not.", "Maybe.", "Ask again later."];

function displayAnswer() {
    const index = Math.floor(Math.random() * answers.length);
    const circle = document.getElementById("circle");

    circle.innerHTML = answers[index];
    circle.style.display = "block";
}

document.getElementById("ball").addEventListener("mousedown", function () {
    const question = document.getElementById("question").value.trim();

    if (question === "") {
        alert("Please enter a yes/no question first.");
    } else {
        displayAnswer();
    }
});

document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("circle").style.display = "none";
});
