import { Common } from "./Common.esm.js";
import { Gun } from "./Gun.esm.js";

export const GAME_SCREEN = "js-game-screen";

const PLAYGROUND_PLAYER_ONE = "js-game-player-one";
const PLAYGROUND_PLAYER_TWO = "js-game-player-two";

const PLAYGROUND_GUN = "js-game-gun";

const GAME_ROUNDS_COUNTER = "js-game-rounds-counter";

class Game extends Common {
  constructor() {
    super(GAME_SCREEN);
  }

  playGame() {
    const gun = new Gun();
    console.log("dziala");
  }
}

//have to move it somewhere up
const game = new Game();
game.playGame();
