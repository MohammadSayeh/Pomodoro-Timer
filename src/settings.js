const defaultSettings = {
    work: 25,
    break: 5,
  };
  
  export function getWorkDuration() {
    return parseInt(localStorage.getItem('workDuration')) || defaultSettings.work;
  }
  
  export function getBreakDuration() {
    return parseInt(localStorage.getItem('breakDuration')) || defaultSettings.break;
  }
  
  export function saveSettings(work, breakDuration) {
    localStorage.setItem('workDuration', work);
    localStorage.setItem('breakDuration', breakDuration);
  }
  
  export function loadSettingsToInputs() {
    const workInput = document.getElementById('work-duration');
    const breakInput = document.getElementById('break-duration');
  
    workInput.value = getWorkDuration();
    breakInput.value = getBreakDuration();
  
    workInput.addEventListener('change', () => {
      const value = Math.min(Math.max(parseInt(workInput.value), 1), 60);
      saveSettings(value, getBreakDuration());
    });
  
    breakInput.addEventListener('change', () => {
      const value = Math.min(Math.max(parseInt(breakInput.value), 1), 30);
      saveSettings(getWorkDuration(), value);
    });
  }
  