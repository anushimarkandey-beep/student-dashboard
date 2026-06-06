// Dark mode
function toggleDark() {
  document.body.classList.toggle("dark");
}

// ---------------- TO-DO ----------------
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value === "") return;

  let li = document.createElement("li");
  li.textContent = taskInput.value;

  li.onclick = function () {
    li.remove();
  };

  taskList.appendChild(li);
  taskInput.value = "";
}

// ---------------- NOTES ----------------
function saveNote() {
  let note = document.getElementById("noteInput").value;
  document.getElementById("savedNote").innerText = note;
}

// ---------------- MARKS ----------------
let marks = [];

function addMarks() {
  let input = document.getElementById("marksInput");
  let value = Number(input.value);

  if (input.value === "") return;

  marks.push(value);

  document.getElementById("marksList").innerText =
    "Marks: " + marks.join(", ");

  let sum = marks.reduce((a, b) => a + b, 0);
  let avg = sum / marks.length;

  document.getElementById("average").innerText =
    "Average: " + avg.toFixed(2);

  input.value = "";
}