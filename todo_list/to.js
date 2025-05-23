document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        li.querySelector(".complete-btn").addEventListener("click", function () {
            li.firstElementChild.classList.toggle("completed");
        });

        li.querySelector(".delete-btn").addEventListener("click", function () {
            taskList.removeChild(li);
        });
    });
});
