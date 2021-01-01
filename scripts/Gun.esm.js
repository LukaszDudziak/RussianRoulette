import { Common } from "./Common.esm.js";

const GUN_OPTIONS = "game-screen_gun-options";

const BULLETS_NUMBER_SECTION = "js-game-bullets-number";
const BULLETS_NUMBER = "js-bullets-number";

const CYLINDER_LOAD_BUTTON = "js-gun-cylinder-load-button";
const CYLINDER_SPIN_BUTTON = "js-gun-cylinder-spin-button";
const CYLINDER_SPIN_BUTTON_DESCRIPTION =
  "js-gun-cylinder-spin-button-description";

export class Gun extends Common {
  constructor() {
    super(GUN_OPTIONS);
    this.bindToElements();
    //first state of new gun's cylinder
    this.cylinder = [0, 0, 0, 0, 0, 0];
    this.#createNewGun();
  }

  //binding standard elements, and bulletsNumber nodeList, which provides information, how many bullets are getting loaded
  bindToElements() {
    this.bulletsNumberSection = this.bindToElement(BULLETS_NUMBER_SECTION);
    this.bulletsNumber = document.getElementsByName(BULLETS_NUMBER);
    this.cylinderLoadButton = this.bindToElement(CYLINDER_LOAD_BUTTON);
    this.cylinderSpinButton = this.bindToElement(CYLINDER_SPIN_BUTTON);
    this.cylinderSpinButtonDescription = this.bindToElement(
      CYLINDER_SPIN_BUTTON_DESCRIPTION
    );
  }

  #createNewGun() {
    this.#cylinderLoadListener();
  }

  #cylinderLoadListener() {
    this.cylinderLoadButton.addEventListener("click", this.#loadCylinder());
  }

  #loadCylinder = () => {
    let loadedBulletsNumber;
    for (let i = 0; i < this.bulletsNumber.length; i++) {
      if (this.bulletsNumber[i].checked) {
        loadedBulletsNumber = this.bulletsNumber[i].value;
      }
      //choosing bullets slots
      //loading (change in cylinder's state)
    }
  };
}
