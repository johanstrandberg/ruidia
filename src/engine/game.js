import ActionManager from './actions/actionManager';
import { gameSpeed } from './constants';

class Game {
  actionManager = new ActionManager();
  totalMs = 0;
  updateCallback = undefined;

  constructor() {
    this.previousMs = undefined;
  }

  loop(ms) {
    // runs at monitor refresh rate

    // update the game state
    this.actionManager.update(ms * gameSpeed);
    if (this.updateCallback) {
      this.updateCallback(ms);
    }
    this.totalMs += ms;
  }

  main(ms) {
    if (this.previousMs === undefined) {
      this.previousMs = ms;
    }
    window.requestAnimationFrame((totalms) => this.main(totalms));
    const delta = ms - this.previousMs;
    this.previousMs = ms;
    this.loop(delta);
  }

  start() {
    // initialize game code

    // starts the game update / draw loop
    window.requestAnimationFrame((ms) => this.main(ms));
  }
}

export default Game;
