import { Common } from "./Common.esm.js";
import { game } from "./Game.esm.js";

const CYLINDER_SPIN_BUTTON_DESCRIPTION =
  "js-gun-cylinder-spin-button-description";

export const PLAYGROUND_GUN = "js-game-gun";

const MAX_CYLINDER_SPINS = 6;
const MAX_GUN_SPINS = 6;

export class Gun extends Common {
  constructor(loadedBulletsNumber) {
    super();
    this.bindToElements();
    //first state of new gun's cylinder
    this.cylinder = [0, 0, 0, 0, 0, 0];
    this.loadedBulletsNumber = loadedBulletsNumber;
    this.#createNewGun();
  }

  bindToElements() {
    this.cylinderSpinButtonDescription = this.bindToElement(
      CYLINDER_SPIN_BUTTON_DESCRIPTION
    );
    this.gunButton = this.bindToElement(PLAYGROUND_GUN);
  }
  //creating new gun at game start
  #createNewGun() {
    this.#loadCylinder();
    this.spinCylinder();
  }

  //load at the start
  #loadCylinder = () => {
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

  //method to spin cylinder
  spinCylinder() {
    //
    let cylinderSpins = Math.floor(Math.random() * MAX_CYLINDER_SPINS);
    //overwritting "cylinder" can cause error, where existing bullet (1) is overwritten, that's why i create new variable
    let spinnedCylinder = this.cylinder.slice(0);
    for (let i = 0; i < spinnedCylinder.length; i++) {
      spinnedCylinder[(i + cylinderSpins) % 6] = this.cylinder[i];
    }
    this.cylinder = spinnedCylinder;
    console.log(this.cylinder);
    console.log("cylinder spinned");
  }
  //gun spinning method
  spinGun() {
    //initial randoms for number of spins, and number that decides from whom spinning starts
    let startingPlayer = Math.floor(Math.random() * 2);
    let gunSpins = Math.floor(Math.random() * MAX_GUN_SPINS);

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

  //add event listener on gunButton
  triggerUnlockListener() {
    this.gunButton.addEventListener("click", this.pullTrigger);
  }

  //pulling trigger by player
  pullTrigger() {
    const { gun, endGame, changeActivePlayer } = game;
    if (gun.cylinder[0] == 1) {
      endGame();
    } else {
      //copy of original cylinder
      let cylinderAfterEmptyChamber = gun.cylinder.slice();
      //remove first position
      cylinderAfterEmptyChamber.splice(0, 1);
      //add empty chamber on last position
      cylinderAfterEmptyChamber.push(0);
      //override game gun's cylinder
      gun.cylinder = cylinderAfterEmptyChamber;
      console.log(gun.cylinder);
      //change active player
      changeActivePlayer();
    }
  }
}
