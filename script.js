// ==========================
// UPDATE TITLE
// ==========================
document.getElementById("modifyTitle").addEventListener("click", function () {
    const title = document.getElementById("mainTitle");
    title.textContent = "Updated JavaScript Practice Page";
});

// ==========================
// BUTTON INTERACTION
// ==========================
document.getElementById("pressBtn").addEventListener("click", function () {
    document.getElementById("feedback").textContent = "Button was clicked!";
});

// ==========================
// MATH TOOL
// ==========================
const firstValue = document.getElementById("firstValue");
const secondValue = document.getElementById("secondValue");
const resultText = document.getElementById("calcOutput");

document.querySelectorAll("[data-op]").forEach(button => {
    button.addEventListener("click", function () {
        const a = parseFloat(firstValue.value);
        const b = parseFloat(secondValue.value);
        const operation = this.getAttribute("data-op");

        if (isNaN(a) || isNaN(b)) {
            resultText.textContent = "Please enter valid numbers!";
            return;
        }

        let result;

        if (operation === "add") {
            result = a + b;
        } else if (operation === "sub") {
            result = a - b;
        } else if (operation === "mul") {
            result = a * b;
        } else if (operation === "div") {
            if (b === 0) {
                resultText.textContent = "Cannot divide by zero!";
                return;
            }
            result = a / b;
        }

        resultText.textContent = "Result: " + result;
    });
});

// ==========================
// TODO LIST
// ==========================
const taskInput = document.getElementById("taskText");
const taskContainer = document.getElementById("taskContainer");
const addBtn = document.getElementById("insertTask");

// Add Task
addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    // Create task box
    const taskDiv = document.createElement("div");
    taskDiv.className = "bg-gray-100 p-3 rounded-lg flex justify-between items-center shadow";

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Buttons container
    const btnGroup = document.createElement("div");
    btnGroup.className = "flex gap-2";

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.className = "bg-green-500 text-white px-2 rounded";

    completeBtn.addEventListener("click", function () {
        span.classList.toggle("line-through");
        span.classList.toggle("text-gray-400");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "bg-red-500 text-white px-2 rounded";

    deleteBtn.addEventListener("click", function () {
        taskDiv.remove();
    });

    // Append everything
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);

    taskDiv.appendChild(span);
    taskDiv.appendChild(btnGroup);

    taskContainer.appendChild(taskDiv);

    // Clear input
    taskInput.value = "";
});