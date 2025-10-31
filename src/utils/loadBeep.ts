import audioBeep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(audioBeep);

  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play();
  };
}
