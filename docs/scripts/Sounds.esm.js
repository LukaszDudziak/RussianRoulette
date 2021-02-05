import { settings } from "./Settings.esm.js";

export class Sounds {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  playSound() {
    if (!settings.isSoundMuted) {
      this.sound.play();
    }
    return;
  }

  stopMusic() {
    this.sound.pause();
  }

  startMusic = () => {
    this.sound.setAttribute("loop", "true");
    this.sound.play();
  };
}

export const loadingSound = new Sounds(
  "./assets/sounds/Cartridges_Loaded_001.mp3"
);
export const spinningCylinderSound = new Sounds(
  "https://raw.githubusercontent.com/LukaszDudziak/RussianRoulette/master/docs/assets/sounds/Spinning_Cylinder_Clicky_004.mp3"
);
export const dyingPlayer = new Sounds("./assets/sounds/wilhelmscream.mp3");
export const dryShot = new Sounds(
  "https://raw.githubusercontent.com/LukaszDudziak/RussianRoulette/master/docs/assets/sounds/Dry_Fire_003.mp3"
);
export const shot = new Sounds(
  "./assets/sounds/GUN_FIRE-GoodSoundForYou-820112263.mp3"
);
