// timer.js
import { updateTimerDisplay, updateModeLabel } from './ui.js';
import { getWorkDuration, getBreakDuration } from './settings.js';
import { playNotification } from './notifications.js';



export function handleSessionEnd() {
  // Get the stored sound preference from localStorage
  const selectedSound = localStorage.getItem('notificationSound') || 'default';
  
  // Play the selected notification sound
  playNotification(selectedSound);

  // Switch modes (work -> break, etc.)
  if (currentMode === 'work') {
    switchToMode('break');
  } else if (currentMode === 'break') {
    switchToMode('work');
  }
}



let intervalId;
let isRunning = false;
let currentMode = 'work'; // 'work' or 'break'
let remainingTime = getWorkDuration() * 60;
let sessionCount = 0;

function tick() {
  if (remainingTime > 0) {
    remainingTime--;

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    updateTimerDisplay(minutes, seconds);
  } else {
    // Play the selected sound from localStorage
    const selectedSound = localStorage.getItem('notificationSound') || 'default';
    playNotification(selectedSound);

    // Switch to the next mode
    switchMode();
  }
}


function switchMode() {
  if (currentMode === 'work') {
    sessionCount++;
    currentMode = (sessionCount % 4 === 0) ? 'longBreak' : 'break';
    remainingTime = (currentMode === 'longBreak' ? 15 : getBreakDuration()) * 60;
  } else {
    currentMode = 'work';
    remainingTime = getWorkDuration() * 60;
  }
  updateModeLabel(currentMode === 'work' ? 'Work' : 'Break');
  updateTimerDisplay(Math.floor(remainingTime / 60), remainingTime % 60);
}

export function startTimer() {
  if (!isRunning) {
    intervalId = setInterval(tick, 1000);
    isRunning = true;
  }
}

export function pauseTimer() {
  clearInterval(intervalId);
  isRunning = false;
}

export function resetTimer() {
  pauseTimer();
  currentMode = 'work';
  remainingTime = getWorkDuration() * 60;
  updateModeLabel('Work');
  updateTimerDisplay(Math.floor(remainingTime / 60), remainingTime % 60);
}
export function switchToMode(mode) {
    currentMode = mode;
    sessionCount = (mode === 'work') ? sessionCount : sessionCount; 
    remainingTime = (mode === 'work' ? getWorkDuration() : getBreakDuration()) * 60;
    updateModeLabel(mode === 'work' ? 'Work' : 'Break');
    updateTimerDisplay(Math.floor(remainingTime / 60), remainingTime % 60);
  }