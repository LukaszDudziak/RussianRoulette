import { Common } from "./Common.esm.js";

const GAME_ROUNDS_COUNTER = "js-game-rounds-counter";

export class Statistics extends Common {
  constructor() {
    super(GAME_ROUNDS_COUNTER);
    this.roundsCounter = 0;
  }

  //append new mark in stats bar
  newRoundMark(isBulletInside) {
    this.roundsCounter++;
    console.log(this.roundsCounter);
    //creating new mark for shot
    let newMark = document.createElement("div");
    newMark.classList.add("rounds-counter_mark");
    // add class depending on cylinder's chamber value
    if (isBulletInside) {
      newMark.classList.add("counter_mark-shot");
    } else {
      newMark.classList.add("counter_mark-blank");
    }
    //append new mark on stats bar
    this.element.appendChild(newMark);
    console.log(this.roundsCounter);
  }

  statisticsReset() {
    this.element.innerHTML = "";
    this.roundsCounter = 0;
    console.log(this.roundsCounter);
  }
}
