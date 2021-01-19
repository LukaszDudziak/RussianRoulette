import { Common } from "./Common.esm.js";
import { PLAYGROUND_GUN } from "./Gun.esm.js";
import { game } from "./Game.esm.js";

const PLAYGROUND_PLAYER_ONE = "js-game-player-one";
const PLAYGROUND_PLAYER_TWO = "js-game-player-two";
const END_GAME_VERDICT = "js-end-screen-dead-player";

export class Player extends Common {
  constructor() {
    super();
    this.bindToElements();
    this.number;
  }

  bindToElements() {
    this.playerOne = this.bindToElement(PLAYGROUND_PLAYER_ONE);
    this.playerTwo = this.bindToElement(PLAYGROUND_PLAYER_TWO);
    this.endGameVerdict = this.bindToElement(END_GAME_VERDICT);
  }

  //killing player method
  playersDeath() {
    if (game.activePlayer.number == 0) {
      this.playerOne.classList.add("dead");
    } else {
      this.playerTwo.classList.add("dead");
    }
    this.endGameVerdict.innerHTML = `Player ${game.activePlayer.number} is dead`;
  }
}
