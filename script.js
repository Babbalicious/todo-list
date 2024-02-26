document.getElementById('addTaskBtn').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var newTask = taskInput.value.trim();

    if (newTask !== '') {
        var li = document.createElement('li');
        li.textContent = newTask;

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.onclick = function() {
            this.parentElement.remove();
        };

        li.appendChild(deleteBtn);

        document.getElementById('todoList').appendChild(li);
        taskInput.value = ''; // Clear input field after adding
    } else {
        alert('Please enter a task!');
    }
});

// Optional: Add tasks with the "Enter" key
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('addTaskBtn').click();
    }
});
