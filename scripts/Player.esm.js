import { Common } from "./Common.esm.js";
import { PLAYGROUND_GUN } from "./Gun.esm.js";
import { game } from "./Game.esm.js";

const PLAYGROUND_PLAYER_ONE = "js-game-player-one";
const PLAYGROUND_PLAYER_TWO = "js-game-player-two";
const GAME_END_MODAL_VERDICT = "js-end-screen_verdict-content";

export class Player extends Common {
  constructor() {
    super();
    this.bindToElements();
    this.number;
  }

  bindToElements() {
    this.playerOne = this.bindToElement(PLAYGROUND_PLAYER_ONE);
    this.playerTwo = this.bindToElement(PLAYGROUND_PLAYER_TWO);
    this.verdictContent = this.bindToElement(GAME_END_MODAL_VERDICT);
  }

  //killing player method
  playersDeath() {
    if (game.activePlayer.number == 0) {
      this.playerOne.classList.add("dead");
    } else {
      this.playerTwo.classList.add("dead");
    }
    this.verdictContent.innerHTML = `Player number ${game.activePlayer.number} is dead, after ${game.statistics.roundsCounter} rounds`;
  }

  playerReset() {
    this.playerOne.classList.remove("dead");
    this.playerTwo.classList.remove("dead");
    game.activePlayer.number = null;
  }
}
