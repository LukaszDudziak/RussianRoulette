import { Common } from "./Common.esm.js";
import { PLAYGROUND_GUN } from "./Gun.esm.js";
import { game } from "./Game.esm.js";

const PLAYGROUND_PLAYER_ONE = "js-game-player-one";
const PLAYGROUND_PLAYER_TWO = "js-game-player-two";

export class Player extends Common {
  constructor() {
    super();
    this.bindToElements();
    this.number;
  }

  bindToElements() {
    this.playerOne = this.bindToElement(PLAYGROUND_PLAYER_ONE);
    this.playerTwo = this.bindToElement(PLAYGROUND_PLAYER_TWO);
  }

  //killing player method
  playersDeath() {
    console.log(`${game.activePlayer.number} is dead`);
  }
}
