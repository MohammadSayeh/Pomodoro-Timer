// notifications.js

import defaultSound from './assets/default.mp3';
import chimeSound from './assets/chime.mp3';
import alarmSound from './assets/alarm.mp3';

const soundMap = {
  default: defaultSound,
  chime: chimeSound,
  alarm: alarmSound
};

export function playNotification(sound = 'default') {
  const selected = soundMap[sound] || defaultSound;
  const audio = new Audio(selected);
  audio.play();
}
