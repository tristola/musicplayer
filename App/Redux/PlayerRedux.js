import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  playerPlay: null,
  playerPause: null,
  playerSetSong: ['song']
})

export const PlayerTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  playing: false,
  song: null
})

export const play = (state) =>
  state.merge({ playing: true })

export const pause = (state) =>
    state.merge({ playing: false })

// Something went wrong somewhere.
export const setSong = state =>
state.merge({ playing: false })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLAYER_PLAY]: play,
  [Types.PLAYER_PAUSE]: pause,
  [Types.PLAYER_SET_SONG]: setSong
})
