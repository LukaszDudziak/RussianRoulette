export class Sounds {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  playSound() {
    this.sound.play();
  }

  stopSound() {
    this.sound.pause();
  }

  startMusic = () => {
    this.sound.setAttribute("loop", true);
    this.sound.play();
  };
}
