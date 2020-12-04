import { Common, HIDDEN_MODE, VISIBLE_MODE } from "./Common.esm.js";
import { START_SCREEN } from "./MainMenu.esm.js";

//DOM elements
const MUTE_MUSIC_BUTTON = "js-mute-music-button";
const MUTE_SOUNDS_BUTTON = "js-mute-sounds-button";
const BACK_TO_MENU_BUTTON = "js-settings-back-to-menu-button";

export const SETTINGS_SCREEN = "js-settings-screen";

class Settings extends Common {
  constructor() {
    super(SETTINGS_SCREEN);
    this.bindSettingsElements();
  }
  //binding elements from settings screen
  bindSettingsElements() {
    const muteMusicButton = this.bindToElement(MUTE_MUSIC_BUTTON);
    const muteSoundsButton = this.bindToElement(MUTE_SOUNDS_BUTTON);
    const backToMenuButton = this.bindToElement(BACK_TO_MENU_BUTTON);

    muteMusicButton.addEventListener("click", () => this.muteMusic());
    muteSoundsButton.addEventListener("click", () => this.muteSounds());
    backToMenuButton.addEventListener("click", () => this.backToMenu());
  }

  muteMusic() {
    console.log("muteMusic");
  }

  muteSounds() {
    console.log("muteSounds");
  }

  backToMenu() {
    this.changeVisibilityScreen(this.element, HIDDEN_MODE);
    this.changeVisibilityScreen(this.bindToElement(START_SCREEN), VISIBLE_MODE);
  }
}

const settings = new Settings();
