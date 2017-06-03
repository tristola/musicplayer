import Sound from 'react-native-sound'

const Player = {
  song: null,
  songname: null,
  play: (songname) => {
    if (this.song) {
      this.song.play()
      this.playing = true
    }
  },
  getSong: () => this.song,
  setSong: newsong => {
    this.songname = newsong
    this.song && this.song.release()
    this.song = new Sound(newsong, '/', (error) => {
      if (error) {
        console.tron.log('failed to load the song')
      }
    })
  },
  pause: () => {
    this.song && this.song.pause()
    this.playing = false
  },
  stop: () => {
    // For some reason setting time does not seem to work
    this.song && this.song.release()
    this.song = new Sound(this.songname, '/', (error) => {
      if (error) {
        console.tron.log('failed to load the song')
      }
    })
    this.playing = false
  }
}
export default Player
