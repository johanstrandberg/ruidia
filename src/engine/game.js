class Game {
  constructor() {
    this.previousMs = undefined;
  }

  loop(ms) {
    // runs at monitor refresh rate
    console.log(ms);
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
