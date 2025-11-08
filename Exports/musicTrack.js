/* let play = (trackName) => {
  console.log("Playing track: " + trackName);
}

let pause = (trackName) => {
  console.log("Paused track: " + trackName);
}

let stop = (trackName) => {
  console.log("Stopped track: " + trackName);
}

module.exports = play;
module.exports = pause;
module.exports = stop;
*/

let musicPlayer = {
    play: (trackName) => {
        console.log("Playing track: " + trackName);
    },
    pause: (trackName) => {
        console.log("Paused track: " + trackName);
    },
    stop: (trackName) => {
        console.log("Stopped track: " + trackName);
    }
};

module.exports = musicPlayer;
