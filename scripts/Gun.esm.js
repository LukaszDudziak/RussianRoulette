import { Common } from "./Common.esm.js";

const GUN_OPTIONS = "game-screen_gun-options";
// const BULLETS_NUMBER_SECTION = "js-game-bullets-number";
const CYLINDER_SPIN_BUTTON_DESCRIPTION =
  "js-gun-cylinder-spin-button-description";

const 

export class Gun extends Common {
  constructor(loadedBulletsNumber) {
    super(GUN_OPTIONS);
    this.bindToElements();
    //first state of new gun's cylinder
    this.cylinder = [0, 0, 0, 0, 0, 0];
    this.loadedBulletsNumber = loadedBulletsNumber;
    this.#createNewGun();
  }

  //binding standard elements, and bulletsNumber nodeList, which provides information, how many bullets are getting loaded
  bindToElements() {
    // this.bulletsNumberSection = this.bindToElement(BULLETS_NUMBER_SECTION);
    this.cylinderSpinButtonDescription = this.bindToElement(
      CYLINDER_SPIN_BUTTON_DESCRIPTION
    );
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
    //hardcoded max 6 spins
    let spins = Math.floor(Math.random() * 6);
    //overwritting "cylinder" can cause error, where existing bullet (1) is overwritten, that's why i create new variable
    let spinnedCylinder = this.cylinder.slice(0);
    for (let i = 0; i < spinnedCylinder.length; i++) {
      spinnedCylinder[(i + spins) % 6] = this.cylinder[i];
    }
    this.cylinder = spinnedCylinder;
    console.log(this.cylinder);
    console.log("cylinder spinned");
  }
}
