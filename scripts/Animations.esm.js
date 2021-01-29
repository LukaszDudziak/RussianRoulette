import { game } from "./Game.esm.js";

export class Animation {
  spinningGunAnimation(element = 0, value = 0) {
    document.documentElement.style.setProperty("--gun-spin-value", value);
    element.classList.toggle("spinning");
  }

  spinningCylinderAnimationToggle(element, value) {
    //case for removing initial class
    if (value == -1) {
      element.classList.remove("spinning");
      return;
      //made for situation where previous value is the same as present
    } else if (
      value ==
      document.documentElement.style.getPropertyValue("--cylinder-spin-value")
    ) {
      document.documentElement.style.setProperty(
        "--cylinder-spin-value",
        value + 1
      );
      element.classList.add("spinning");
      //made for standard situation
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
