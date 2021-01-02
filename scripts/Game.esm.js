import { Common } from "./Common.esm.js";
import { Gun } from "./Gun.esm.js";

const CYLINDER_SPIN_BUTTON = "js-gun-cylinder-spin-button";
const CYLINDER_LOAD_BUTTON = "js-gun-cylinder-load-button";
const BULLETS_NUMBER = "js-bullets-number";

const PLAYGROUND_PLAYER_ONE = "js-game-player-one";
const PLAYGROUND_PLAYER_TWO = "js-game-player-two";
const PLAYGROUND_GUN = "js-game-gun";
const GAME_ROUNDS_COUNTER = "js-game-rounds-counter";

export const GAME_SCREEN = "js-game-screen";

class Game extends Common {
  constructor() {
    super(GAME_SCREEN);
    this.bindToElements();
    this.#cylinderLoadListener();
    this.loadedBulletsNumber = 0;
  }
  //bind used elements
  bindToElements() {
    this.bulletsNumber = document.getElementsByName(BULLETS_NUMBER);
    this.cylinderLoadButton = this.bindToElement(CYLINDER_LOAD_BUTTON);
    this.cylinderSpinButton = this.bindToElement(CYLINDER_SPIN_BUTTON);
  }

  //main method for gameflow
  playGame = () => {
    this.#checkBulletsNumber();
    if (!this.loadedBulletsNumber == 0) {
      this.#disableChoices();
      const gun = new Gun(this.loadedBulletsNumber);
      console.log(gun.cylinder);
    } else {
      alert("How many bullets?"); //in next version change to animation
    }
  };

  //check player's choice
  #checkBulletsNumber() {
    this.bulletsNumber.forEach((number) => {
      if (number.checked) {
        this.loadedBulletsNumber = number.value;
      }
    });
  }

  //disable all starting buttons (radios+loadButton)
  #disableChoices() {
    this.cylinderLoadButton.removeEventListener("click", this.playGame);
    this.cylinderLoadButton.disabled = true;
    this.bulletsNumber.forEach((radio) => {
      radio.disabled = true;
    });
  }

  #cylinderLoadListener() {
    this.cylinderLoadButton.addEventListener("click", this.playGame);
  }
}

//have to move it somewhere up
const game = new Game();
