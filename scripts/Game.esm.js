import { Common } from "./Common.esm.js";
import { Gun } from "./Gun.esm.js";
import { Player } from "./Player.esm.js";

const CYLINDER_SPIN_BUTTON = "js-gun-cylinder-spin-button";
const CYLINDER_LOAD_BUTTON = "js-gun-cylinder-load-button";
const BULLETS_NUMBER = "js-bullets-number";

const GAME_ROUNDS_COUNTER = "js-game-rounds-counter";

export const GAME_SCREEN = "js-game-screen";

class Game extends Common {
  constructor() {
    super(GAME_SCREEN);
    this.bindToElements();
    this.#cylinderLoadListener();
    // this.playerOne = new Player();
    // this.playerTwo = new Player();
    this.activePlayer = new Player();
    this.loadedBulletsNumber;
    this.gun;
  }
  //binding standard elements, and bulletsNumber nodeList, which provides information, how many bullets are getting loaded
  bindToElements() {
    this.bulletsNumber = document.getElementsByName(BULLETS_NUMBER);
    this.cylinderLoadButton = this.bindToElement(CYLINDER_LOAD_BUTTON);
    this.cylinderSpinButton = this.bindToElement(CYLINDER_SPIN_BUTTON);
  }

  //main method for gameflow
  playGame = () => {
    console.log("players connected");
    this.#checkBulletsNumber();
    if (!this.loadedBulletsNumber == 0) {
      this.#disableChoices();
      this.gun = new Gun(this.loadedBulletsNumber);
      console.log(`In game cylinder [${this.gun.cylinder}]`);
      this.activePlayer.number = this.gun.spinGun();
      console.log(`active player is ` + this.activePlayer.number);
      this.#triggerUnlock();
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

  //for player - unlocking gun button, for AI playing whole round !!!
  #triggerUnlock() {
    this.gun.triggerUnlockListener();
  }

  #cylinderLoadListener() {
    this.cylinderLoadButton.addEventListener("click", this.playGame);
  }

  //game end
  endGame = () => {
    this.activePlayer.playersDeath();
  };
}

//have to move it somewhere up
export const game = new Game();
