const Player = {
  song: null,
  playing: true,
  play: () => {
    console.tron.log('play service:')
  },
  setSong: (song) => {
    this.song = song
  },
  pause: () => {
    console.tron.log('pause: service')
  }
}
export default Player
