import { Common } from "./Common.esm.js";

const MUTE_MUSIC_BUTTON = "js-mute-music-button";
const MUTE_SOUNDS_BUTTON = "js-mute-sounds-button";
const BACK_TO_MENU_BUTTON = "js-settings-back-to-menu-button";

export const SETTINGS_SCREEN = "js-settings-screen";

class Settings extends Common {
  constructor() {
    super(SETTINGS_SCREEN);
    this.bindSettingsElements();
  }

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
    console.log("back");
  }
}

const settings = new Settings();
