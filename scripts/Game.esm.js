import { Common, VISIBLE_MODE } from "./Common.esm.js";
import { Gun } from "./Gun.esm.js";
import { Player } from "./Player.esm.js";
import { Statistics } from "./Statistics.esm.js";

const CYLINDER_LOAD_BUTTON = "js-gun-cylinder-load-button";
const BULLETS_NUMBER = "js-bullets-number";

const GAME_END_MODAL = "js-end-screen";

export const GAME_SCREEN = "js-game-screen";

class Game extends Common {
  constructor() {
    super(GAME_SCREEN);
    this.bindToElements();
    this.#cylinderLoadListener();
    this.activePlayer;
    this.loadedBulletsNumber;
    this.gun;
    this.statistics;
  }
  //binding standard elements, and bulletsNumber nodeList, which provides information, how many bullets are getting loaded
  bindToElements() {
    this.bulletsNumber = document.getElementsByName(BULLETS_NUMBER);
    this.cylinderLoadButton = this.bindToElement(CYLINDER_LOAD_BUTTON);
    this.endGameModal = this.bindToElement(GAME_END_MODAL);
  }
  //main method for gameflow
  playGame = () => {
    this.#checkBulletsNumber();
    if (!this.loadedBulletsNumber == 0) {
      this.#disableChoices();
      this.activePlayer = new Player();
      this.statistics = new Statistics();
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

  //for player - unlocking gun button, for AI automaticly pulling trigger
  #triggerUnlock() {
    if (this.activePlayer.number == 1) {
      this.gun.pullTrigger();
    } else {
      this.gun.triggerUnlockListener();
    }
  }

  //for player - unlocking cylinder button, for AI automaticly pulling trigger
  #spinCylinder() {
    //locking gun trigger before player turn
    this.gun.triggerUnlockToggle();
    if (this.activePlayer.number == 1) {
      this.gun.spinCylinder();
    } else {
      this.gun.cylinderUnlockListener();
    }
    //unlock spin before player's turn (after AI turn)
    this.gun.cylinderUnlockToggle();
  }

  #cylinderLoadListener() {
    this.cylinderLoadButton.addEventListener("click", this.playGame);
  }

  changeActivePlayer = () => {
    //changing active player, with use of his number
    this.activePlayer.number = Number(!this.activePlayer.number);
    console.log(this.activePlayer.number + " is now active");
    //spin cylinder before pulling trigger
    this.#spinCylinder();
    //looping game
    this.#triggerUnlock();
  };

  //game end
  endGame = () => {
    this.gun.triggerUnlockToggle();
    this.activePlayer.playersDeath();
    this.changeVisibilityScreen(this.endGameModal, VISIBLE_MODE);
    this.blurGamePlayground(this.element);
  };
}

//have to move it somewhere up
export const game = new Game();
