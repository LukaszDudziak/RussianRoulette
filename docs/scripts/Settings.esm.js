import { Common, HIDDEN_MODE, VISIBLE_MODE } from "./Common.esm.js";
import { START_SCREEN, mainMenu } from "./MainMenu.esm.js";

//DOM elements
const MUTE_MUSIC_BUTTON = "js-mute-music-button";
const MUTE_SOUNDS_BUTTON = "js-mute-sounds-button";
const BACK_TO_MENU_BUTTON = "js-settings-back-to-menu-button";

export const SETTINGS_SCREEN = "js-settings-screen";

class Settings extends Common {
  constructor() {
    super(SETTINGS_SCREEN);
    this.bindSettingsElements();
    this.isMusicMuted = true;
    this.isSoundMuted = false;
  }
  //binding elements from settings screen
  bindSettingsElements() {
    const muteMusicButton = this.bindToElement(MUTE_MUSIC_BUTTON);
    const muteSoundsButton = this.bindToElement(MUTE_SOUNDS_BUTTON);
    const backToMenuButton = this.bindToElement(BACK_TO_MENU_BUTTON);

    muteMusicButton.addEventListener("click", (e) => this.muteMusic(e));
    muteSoundsButton.addEventListener("click", (e) => this.muteSound(e));
    backToMenuButton.addEventListener("click", () => this.backToMenu());
  }

  muteMusic = (e) => {
    if (this.isMusicMuted) {
      e.target.innerHTML = "Mute music";
      mainMenu.music.startMusic();
      this.isMusicMuted = !this.isMusicMuted;
    } else {
      e.target.innerHTML = "Play music";
      mainMenu.music.stopMusic();
      this.isMusicMuted = !this.isMusicMuted;
    }
  };

  muteSound(e) {
    if (this.isSoundMuted) {
      e.target.innerHTML = "Mute sound";
      this.isSoundMuted = !this.isSoundMuted;
    } else {
      e.target.innerHTML = "Enable sound";
      this.isSoundMuted = !this.isSoundMuted;
    }
  }

  backToMenu() {
    this.changeVisibilityScreen(this.element, HIDDEN_MODE);
    this.changeVisibilityScreen(this.bindToElement(START_SCREEN), VISIBLE_MODE);
  }
}

export const settings = new Settings();
