import { Common } from "./Common.esm.js";
import { animation, Animation } from "./Animations.esm.js";
import { game } from "./Game.esm.js";

const CYLINDER_SPIN_BUTTON = "js-gun-cylinder-spin-button";

export const PLAYGROUND_GUN = "js-game-gun";

const MAX_CYLINDER_SPINS = 6;
const MAX_GUN_SPINS = 6;
const CHAMBERS_NUMBER = 6;

export class Gun extends Common {
  constructor(loadedBulletsNumber) {
    super();
    this.bindToElements();
    //first state of new gun's cylinder
    (this.cylinder = []).length = CHAMBERS_NUMBER;
    this.loadedBulletsNumber = loadedBulletsNumber;
    this.#createNewGun();
  }

  bindToElements() {
    this.cylinderSpinButton = this.bindToElement(CYLINDER_SPIN_BUTTON);
    this.gunButton = this.bindToElement(PLAYGROUND_GUN);
  }
  //creating new gun at game start
  #createNewGun() {
    this.#loadCylinder();
    this.spinCylinder();
  }

  //load at the start
  #loadCylinder = () => {
    //cylinder without any bullets
    this.cylinder.fill(0);
    //choosing bullets slots
    for (let i = 0; i < this.loadedBulletsNumber; i++) {
      let suggestedBulletPosition = Math.floor(Math.random() * 6);
      if (this.cylinder[suggestedBulletPosition] == 0) {
        this.cylinder[suggestedBulletPosition] = 1;
        //in next version change to animation of loading + sound
      } else {
        i--;
      }
    }
    console.log(this.cylinder);
    console.log("gun loaded, now spin"); //in next version change to sound
  };

  //method to spin cylinder, must be arrow function to get this.cylinder form right scope for cylinder unlock listener
  spinCylinder = () => {
    //add animation for spinning cylinder
    let cylinderSpins = Math.floor(Math.random() * MAX_CYLINDER_SPINS + 1);
    animation.spinningCylinderAnimationToggle(
      this.cylinderSpinButton,
      cylinderSpins
    );
    //overwritting "cylinder" can cause error, where existing bullet (1) is overwritten, that's why i create new variable
    console.log(this.cylinder + " in spinning");
    let spinnedCylinder = this.cylinder.slice(0);
    //cylinder spin
    for (let i = 0; i < spinnedCylinder.length; i++) {
      spinnedCylinder[(i + cylinderSpins) % CHAMBERS_NUMBER] = this.cylinder[i];
    }
    this.cylinder = spinnedCylinder;
    console.log("cylinder spinned " + this.cylinder);
    //unlocking gun
    this.triggerUnlockToggle();
    //lock cylinder after first player's use
    this.cylinderUnlockToggle();
  };
  //gun spinning method
  spinGun() {
    //initial randoms for number of spins, and number that decides from whom spinning starts
    let startingPlayer = Math.floor(Math.random() * 2);
    let gunSpins = Math.floor(Math.random() * MAX_GUN_SPINS);

    //setting animation for spinning gun
    animation.spinningGunAnimation(this.gunButton, gunSpins);

    if (
      (startingPlayer == 0 && gunSpins % 2 == 0) ||
      (startingPlayer == 1 && gunSpins % 2 == 1)
    ) {
      this.gunButton.classList.add("gun_player_one");
      return 0;
    } else {
      this.gunButton.classList.add("gun_player_two");
      return 1;
    }
  }

  //pulling trigger by player
  pullTrigger = () => {
    //remove 'spinningCylinder' class from button
    animation.spinningCylinderAnimationToggle(this.cylinderSpinButton, -1);
    const { gun, endGame, changeActivePlayer, statistics } = game;
    if (gun.cylinder[0] == 1) {
      //creating new mark on stats bar (sent with chamber value)
      statistics.newRoundMark(1);
      endGame();
    } else {
      //creating new mark on stats bar (sent with chamber value)
      statistics.newRoundMark(0);
      //copy of original cylinder
      let cylinderAfterEmptyChamber = gun.cylinder.slice();
      //remove first position
      cylinderAfterEmptyChamber.splice(0, 1);
      //add empty chamber on last position
      cylinderAfterEmptyChamber.push(0);
      //override game gun's cylinder
      gun.cylinder = cylinderAfterEmptyChamber;
      console.log("pulling trigger");
      console.log(gun.cylinder);
      //change active player
      changeActivePlayer();
    }
  };

  //add event listener on gunButton
  triggerUnlockListener() {
    this.gunButton.addEventListener("click", this.pullTrigger);
  }

  //toggiling trigger button (safe for using this button, when player must spin cylinder first)
  triggerUnlockToggle() {
    this.gunButton.disabled = !this.gunButton.disabled;
  }

  cylinderUnlockToggle() {
    this.cylinderSpinButton.disabled = !this.cylinderSpinButton.disabled;
  }

  cylinderUnlockListener() {
    this.cylinderSpinButton.addEventListener("click", this.spinCylinder);
  }
}
