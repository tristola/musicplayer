import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  playerPlay: null,
  playerPause: null,
  playerSetSongName: ['song']
})

export const PlayerTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  playing: false,
  songName: null
})

export const play = (state) => {
  console.tron.log('play')
  return state.merge({ playing: true })
}

export const pause = (state) => {
  console.tron.log('pause')
  return state.merge({ playing: false })
}

export const setSongName = (state, { song }) => {
  const songName = song.file
  return state.merge({ songName })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLAYER_PLAY]: play,
  [Types.PLAYER_PAUSE]: pause,
  [Types.PLAYER_SET_SONG_NAME]: setSongName
})
