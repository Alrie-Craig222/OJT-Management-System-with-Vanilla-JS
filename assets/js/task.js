// task.js

document.addEventListener("DOMContentLoaded", () => {
    // Sample data for tasks (you can replace this with your actual database or API data)
    let tasks = [
        { code: "101", name: "Task 1", description: "Description for Task 1", deadline: "2024-12-01" },
        { code: "102", name: "Task 2", description: "Description for Task 2", deadline: "2024-12-05" },
        { code: "103", name: "Task 3", description: "Description for Task 3", deadline: "2024-12-10" },
    ];

    // Function to display tasks in the table
    function renderTaskList() {
        const taskListContainer = document.getElementById("task-list");
        taskListContainer.innerHTML = "";

        tasks.forEach(task => {
            const taskRow = document.createElement("tr");
            taskRow.innerHTML = `
                <td class="cell">${task.code}</td>
                <td class="cell">${task.name}</td>
                <td class="cell">${task.description}</td>
                <td class="cell">${task.deadline}</td>
                <td class="text-right">
                    <button class="btn btn-info btn-sm" onclick="editTask(${task.code})">Comply</button>
                </td>
            `;
            taskListContainer.appendChild(taskRow);
        });
    }

    // Function to handle task search
    function searchTask() {
        const searchTerm = document.getElementById("search-task").value.toLowerCase();
        const filteredTasks = tasks.filter(task =>
            task.name.toLowerCase().includes(searchTerm) ||
            task.description.toLowerCase().includes(searchTerm)
        );
        tasks = filteredTasks;
        renderTaskList();
    }

    // Function to cancel the add task form
    function cancelTask() {
        document.getElementById("add-task-form").reset();
        window.location.hash = "#list"; // Back to task list view
    }

    // Function to add a new task
    function addTask(event) {
        event.preventDefault();
        
        const taskCode = document.getElementById("task-code").value;
        const taskName = document.getElementById("task-name").value;
        const taskDesc = document.getElementById("task-desc").value;
        const taskDeadline = document.getElementById("task-deadline").value;

        if (taskCode && taskName && taskDesc && taskDeadline) {
            const newTask = {
                code: taskCode,
                name: taskName,
                description: taskDesc,
                deadline: taskDeadline
            };

            tasks.push(newTask);
            renderTaskList();
            cancelTask();
        } else {
            alert("Please fill out all fields.");
        }
    }

    // Function to handle task file submission (e.g., complying task)
    function submitTaskFile(event) {
        event.preventDefault();
        
        const fileInput = document.getElementById("file-upload");
        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name;
            alert(`File "${fileName}" submitted successfully!`);
        } else {
            alert("Please upload a file.");
        }
    }

    // Function to open the "Comply Task" modal
    window.editTask = function(taskCode) {
        const task = tasks.find(t => t.code == taskCode);
        if (task) {
            document.getElementById("edit_task").classList.add("show");
        }
    };

    // Attach event listeners
    document.getElementById("add-task-form").addEventListener("submit", addTask);
    document.getElementById("comply-task-form").addEventListener("submit", submitTaskFile);
    document.getElementById("search-task").addEventListener("input", searchTask);

    // Initial rendering of task list
    renderTaskList();
});
