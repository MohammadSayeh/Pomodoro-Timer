// ui.js
export function updateTimerDisplay(minutes, seconds) {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  
  export function updateModeLabel(mode) {
    const label = document.getElementById('mode-label');
    label.textContent = mode;
  }

 
  
  