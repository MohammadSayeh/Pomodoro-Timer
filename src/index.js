// index.js
import './style.css';
import { startTimer, pauseTimer, resetTimer, switchToMode } from './timer.js';
import { playNotification } from './notifications.js';
import { loadSettingsToInputs } from './settings.js';
loadSettingsToInputs();

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('pause-btn').addEventListener('click', pauseTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
document.getElementById('work-mode-btn').addEventListener('click', () => {
    switchToMode('work');
  });
  
  document.getElementById('break-mode-btn').addEventListener('click', () => {
    switchToMode('break');
  });

  const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task !== '') {
      const li = document.createElement('li');
  
      const span = document.createElement('span');
      span.textContent = task;
      span.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '❌';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
        li.remove();
      });
  
      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = '';
    }
  });
  
  const soundSelect = document.getElementById('sound-select');

// Check if there is a stored sound preference in localStorage
const storedSound = localStorage.getItem('notificationSound') || 'default';
soundSelect.value = storedSound;

// Update sound preference when user changes it
soundSelect.addEventListener('change', (event) => {
  const selectedSound = event.target.value;
  localStorage.setItem('notificationSound', selectedSound);
});

