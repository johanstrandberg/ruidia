let previousMs;
export const index = 5;

function loop(ms) {
  // runs at monitor refresh rate
  console.log(ms);
}

function main(ms) {
  if (previousMs === undefined) {
    previousMs = ms;
  }
  window.requestAnimationFrame(main);
  const delta = ms - previousMs;
  previousMs = ms;
  loop(delta);
}

function start() {
  // initialize game code

  // starts the game update / draw loop
  window.requestAnimationFrame(main);
}

export default start;
