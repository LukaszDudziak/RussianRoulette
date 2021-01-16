import { game } from "./Game.esm.js";

export class Animation {
  spinningGunAnimation(element, value) {
    document.documentElement.style.setProperty("--gun-spin-value", value);
    element.classList.toggle("spinning");
  }
  spinningCylinderAnimationToggle(element, value) {
    if (value == -1) {
      element.classList.toggle("spinning");
    }
    document.documentElement.style.setProperty("--cylinder-spin-value", value);
    element.classList.toggle("spinning");
  }
}

export const animation = new Animation();
