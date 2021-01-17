import { game } from "./Game.esm.js";

export class Animation {
  spinningGunAnimation(element = 0, value = 0) {
    document.documentElement.style.setProperty("--gun-spin-value", value);
    element.classList.toggle("spinning");
  }
  spinningCylinderAnimationToggle(element, value) {
    if (value == -1) {
      element.classList.remove("spinning");
      return;
    } else {
      document.documentElement.style.setProperty(
        "--cylinder-spin-value",
        value
      );
      element.classList.add("spinning");
    }
  }
}

export const animation = new Animation();
