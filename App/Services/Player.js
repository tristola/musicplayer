import Sound from 'react-native-sound'

const Player = {
  song: null,
  songname: null,
  playing: true,
  play: (songname) => {
    if (this.song) {
      this.song.play()
      this.playing = true
    }
  },
  getSong: () => this.song,
  setSong: (newsong) => {
    console.tron.log('setSong:' + newsong)
    this.song && this.song.release()
    this.song = new Sound(newsong, '/', (error) => {
      if (error) {
        console.tron.log('failed to load the song')
      }
    })
  },
  pause: () => {
    this.song.pause()
    this.playing = false
    console.tron.log('play service:' + this.playing)
  }
}
export default Player
