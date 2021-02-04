import { Common, HIDDEN_MODE, VISIBLE_MODE } from "./Common.esm.js";
import { GAME_SCREEN } from "./Game.esm.js";
import { SETTINGS_SCREEN } from "./Settings.esm.js";
import { Sounds } from "./Sounds.esm.js";

//DOM elements id's
const NEW_GAME_BUTTON = "js-start-button";
const SETTINGS_BUTTON = "js-settings-button";

export const START_SCREEN = "js-start-screen";

class MainMenu extends Common {
  constructor() {
    //binding start screen in common class
    super(START_SCREEN);
    this.bindMenuElements();
    this.music = new Sounds("../assets/sounds/LoungeGame2.mp3");
  }
  //binding menu elements and set listeners on buttons
  bindMenuElements() {
    const newGameButton = this.bindToElement(NEW_GAME_BUTTON);
    const settingsButton = this.bindToElement(SETTINGS_BUTTON);

    //using arrow function to stay with global this
    newGameButton.addEventListener("click", () =>
      this.toggleScreen(GAME_SCREEN)
    );
    settingsButton.addEventListener("click", () =>
      this.toggleScreen(SETTINGS_SCREEN)
    );
  }

  //compact method to toggle between menu screens
  toggleScreen(newScreen) {
    this.changeVisibilityScreen(this.element, HIDDEN_MODE);
    this.changeVisibilityScreen(this.bindToElement(newScreen), VISIBLE_MODE);
  }

  //   //changing from menu to game screen
  //   showGameScreen() {
  //     this.changeVisibilityScreen(this.element, HIDDEN_MODE);
  //     this.changeVisibilityScreen(this.bindToElement(GAME_SCREEN), VISIBLE_MODE);
  //   }
  //   //changing from menu to settings screen
  //   showSettingsScreen() {
  //     this.changeVisibilityScreen(this.element, HIDDEN_MODE);
  //     this.changeVisibilityScreen(
  //       this.bindToElement(SETTINGS_SCREEN),
  //       VISIBLE_MODE
  //     );
  //   }
}

export const mainMenu = new MainMenu();
