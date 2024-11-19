// document.addEventListener("DOMContentLoaded", () => {
//     const taskInput = document.getElementById("taskInput");
//     const dateInput = document.getElementById("dateInput");
//     const addTaskBtn = document.getElementById("addTaskBtn");
//     const taskList = document.getElementById("taskList");
//     const filter = document.getElementById("filter");
  
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     let editTaskId = null; // To track the task being edited
  
//     const renderTasks = (filterType = "all") => {
//       taskList.innerHTML = "";
  
//       const filteredTasks = tasks.filter((task) => {
//         if (filterType === "done") return task.completed;
//         if (filterType === "todo") return !task.completed;
//         return true;
//       });
  
//       filteredTasks.forEach((task) => {
//         const li = document.createElement("li");
//         li.className = `task-item ${task.completed ? "done" : ""}`;
//         li.innerHTML = `
//           <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} />
//           <div class="task-details">
//             <p class="task-name">${task.taskName}</p>
//             <p class="task-date">Due: ${task.date}</p>
//           </div>
//           <button class="edit-btn" data-id="${task.id}">Edit</button>
//           <button class="delete-btn" data-id="${task.id}">Delete</button>
//         `;
  
//         // Mark task as done
//         li.querySelector(".checkbox").addEventListener("change", (e) => {
//           task.completed = e.target.checked;
//           saveTasks();
//           renderTasks(filter.value);
//         });
  
//         // Edit task
//         li.querySelector(".edit-btn").addEventListener("click", (e) => {
//           const id = e.target.getAttribute("data-id");
//           const taskToEdit = tasks.find((t) => t.id === id);
  
//           if (taskToEdit) {
//             taskInput.value = taskToEdit.taskName;
//             dateInput.value = taskToEdit.date;
//             editTaskId = id; // Track the task being edited
//             addTaskBtn.textContent = "Update Task"; // Change button text
//           }
//         });
  
//         // Delete task
//         li.querySelector(".delete-btn").addEventListener("click", (e) => {
//           const id = e.target.getAttribute("data-id");
//           tasks = tasks.filter((task) => task.id !== id);
//           saveTasks();
//           renderTasks(filter.value);
//         });
  
//         taskList.appendChild(li);
//       });
//     };
  
//     const saveTasks = () => {
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//     };
  
//     addTaskBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       const taskName = taskInput.value.trim();
//       const date = dateInput.value;
  
//       if (!taskName || !date) {
//         alert("Please enter task details.");
//         return;
//       }
  
//       if (editTaskId) {
//         // Update the task being edited
//         const taskIndex = tasks.findIndex((task) => task.id === editTaskId);
//         if (taskIndex !== -1) {
//           tasks[taskIndex].taskName = taskName;
//           tasks[taskIndex].date = date;
//         }
//         editTaskId = null; // Clear edit mode
//         addTaskBtn.textContent = "Add Task"; // Reset button text
//       } else {
//         // Add new task
//         tasks.push({
//           id: Date.now().toString(),
//           taskName,
//           date,
//           completed: false,
//         });
//       }
  
//       taskInput.value = "";
//       dateInput.value = "";
  
//       saveTasks();
//       renderTasks(filter.value);
//     });
  
//     filter.addEventListener("change", (e) => {
//       renderTasks(e.target.value);
//     });
  
//     renderTasks();
//   });
  
  



// document.addEventListener("DOMContentLoaded", () => {
//     const taskInput = document.getElementById("taskInput");
//     const dateInput = document.getElementById("dateInput");
//     const addTaskBtn = document.getElementById("addTaskBtn");
//     const taskList = document.getElementById("taskList");
//     const filter = document.getElementById("filter");
  
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     let editTaskId = null;
  
//     const renderTasks = (filterType = "all") => {
//       taskList.innerHTML = "";
//       const filteredTasks = tasks.filter((task) => {
//         if (filterType === "done") return task.completed;
//         if (filterType === "todo") return !task.completed;
//         return true;
//       });
  
//       filteredTasks.forEach((task) => {
//         const li = document.createElement("li");
//         li.className = `task-item ${task.completed ? "done" : ""}`;
//         li.innerHTML = `
//           <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} />
//           <div class="task-details">
//             <p class="task-name">${task.taskName}</p>
//             <p class="task-date">Due: ${task.date}</p>
//           </div>
//           <button class="edit-btn" data-id="${task.id}" ${task.completed ? "disabled" : ""}>Edit</button>
//           <button class="delete-btn" data-id="${task.id}">Delete</button>
//         `;
  
//         // Toggle task completion
//         li.querySelector(".checkbox").addEventListener("change", (e) => {
//           task.completed = e.target.checked;
//           saveTasks();
//           renderTasks(filter.value);
//         });
  
//         // Edit button (disabled if task is completed)
//         li.querySelector(".edit-btn").addEventListener("click", (e) => {
//           const id = e.target.getAttribute("data-id");
//           const taskToEdit = tasks.find((t) => t.id === id);
//           if (taskToEdit) {
//             taskInput.value = taskToEdit.taskName;
//             dateInput.value = taskToEdit.date;
//             editTaskId = id;
//             addTaskBtn.textContent = "Update Task";
//           }
//         });
  
//         // Delete button (allows deletion for all tasks, including completed ones)
//         li.querySelector(".delete-btn").addEventListener("click", (e) => {
//           const id = e.target.getAttribute("data-id");
//           tasks = tasks.filter((task) => task.id !== id);
//           saveTasks();
//           renderTasks(filter.value);
//         });
  
//         taskList.appendChild(li);
//       });
//     };
  
//     const saveTasks = () => {
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//     };
  
//     addTaskBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       const taskName = taskInput.value.trim();
//       const date = dateInput.value;
  
//       if (!taskName || !date) {
//         alert("Please enter task details.");
//         return;
//       }
  
//       if (editTaskId) {
//         const taskIndex = tasks.findIndex((task) => task.id === editTaskId);
//         if (taskIndex !== -1) {
//           tasks[taskIndex].taskName = taskName;
//           tasks[taskIndex].date = date;
//         }
//         editTaskId = null;
//         addTaskBtn.textContent = "Add Task";
//       } else {
//         tasks.push({
//           id: Date.now().toString(),
//           taskName,
//           date,
//           completed: false,
//         });
//       }
  
//       taskInput.value = "";
//       dateInput.value = "";
  
//       saveTasks();
//       renderTasks(filter.value);
//     });
  
//     filter.addEventListener("change", (e) => {
//       renderTasks(e.target.value);
//     });
  
//     renderTasks();
//   });
  

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const dateInput = document.getElementById("dateInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const filter = document.getElementById("filter");
  
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let editTaskId = null;
  
    const calculateOverdue = (dueDate) => {
      const currentDate = new Date();
      const due = new Date(dueDate);
      const diffTime = currentDate - due;
  
      if (diffTime > 0) {
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return `${diffDays} day${diffDays > 1 ? "s" : ""} overdue`;
      }
      return null;
    };
  
    const renderTasks = (filterType = "all") => {
      taskList.innerHTML = "";
      const filteredTasks = tasks.filter((task) => {
        if (filterType === "done") return task.completed;
        if (filterType === "todo") return !task.completed;
        return true;
      });
  
      filteredTasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = `task-item ${task.completed ? "done" : ""}`;
        const overdueNote = calculateOverdue(task.date);
  
        li.innerHTML = `
          <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} />
          <div class="task-details">
            <p class="task-name">${task.taskName}</p>
            <p class="task-date">Due: ${task.date} ${overdueNote ? `<span class="overdue-note">(${overdueNote})</span>` : ""}</p>
          </div>
          <button class="edit-btn" data-id="${task.id}" ${task.completed ? "disabled" : ""}>Edit</button>
          <button class="delete-btn" data-id="${task.id}">Delete</button>
        `;
  
        // Toggle task completion
        li.querySelector(".checkbox").addEventListener("change", (e) => {
          task.completed = e.target.checked;
          saveTasks();
          renderTasks(filter.value);
        });
  
        // Edit button (disabled if task is completed)
        li.querySelector(".edit-btn").addEventListener("click", (e) => {
          const id = e.target.getAttribute("data-id");
          const taskToEdit = tasks.find((t) => t.id === id);
          if (taskToEdit) {
            taskInput.value = taskToEdit.taskName;
            dateInput.value = taskToEdit.date;
            editTaskId = id;
            addTaskBtn.textContent = "Update Task";
          }
        });
  
        // Delete button
        li.querySelector(".delete-btn").addEventListener("click", (e) => {
          const id = e.target.getAttribute("data-id");
          tasks = tasks.filter((task) => task.id !== id);
          saveTasks();
          renderTasks(filter.value);
        });
  
        taskList.appendChild(li);
      });
    };
  
    const saveTasks = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  
    addTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const taskName = taskInput.value.trim();
      const date = dateInput.value;
  
      if (!taskName || !date) {
        alert("Please enter task details.");
        return;
      }
  
      if (editTaskId) {
        const taskIndex = tasks.findIndex((task) => task.id === editTaskId);
        if (taskIndex !== -1) {
          tasks[taskIndex].taskName = taskName;
          tasks[taskIndex].date = date;
        }
        editTaskId = null;
        addTaskBtn.textContent = "Add Task";
      } else {
        tasks.push({
          id: Date.now().toString(),
          taskName,
          date,
          completed: false,
        });
      }
  
      taskInput.value = "";
      dateInput.value = "";
  
      saveTasks();
      renderTasks(filter.value);
    });
  
    filter.addEventListener("change", (e) => {
      renderTasks(e.target.value);
    });
  
    renderTasks();
  });
  