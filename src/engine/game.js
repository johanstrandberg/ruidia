let previousMs = 0;
let gameSpeed = 1;
let increment = 0.0;
export let index = 0;

function main(ms) { 
    window.requestAnimationFrame(main);
    const delta = ms - previousMs;
    previousMs = ms;
    loop(delta);
  };
  

function loop(ms) {
    //runs at monitor refresh rate
    increment += ms;
    index = Math.round(increment / 100.0) % 6;
}

function start() {
    main(0);
}

export default start;