import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  playerPlay: null,
  playerPause: null,
  playerPlayPressed: null,
  playerPausePressed: null,
  playerStopPressed: null,
  playerSetSongName: ['song']
})

export const PlayerTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  playing: false,
  songName: null,
  metadata: null
})

export const play = (state) => {
  return state.merge({ playing: true })
}

export const pause = (state) => {
  return state.merge({ playing: false })
}

export const setSongName = (state, { song }) => {
  const songName = song.file
  const metadata = song.metadata
  return state.merge({ songName, metadata })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLAYER_PLAY]: play,
  [Types.PLAYER_PAUSE]: pause,
  [Types.PLAYER_SET_SONG_NAME]: setSongName
})
