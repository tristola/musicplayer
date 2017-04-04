import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  scanFiles: null,
  songlistAdd: ['songs']
})

export const SonglistTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  songs: [],
  genres: []
})

let uniqueItems = songs => songs.filter((elem, pos, arr) => arr.indexOf(elem) === pos)

export const scan = (state, { songs }) => state.merge({ scanning: true })

export const songlistAdd = (state, { songs }) => {
  const genres = uniqueItems(songs.map(song => song.metadata.genre))
  return state.merge({ songs, genres, scanning: false })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SONGLIST_ADD]: songlistAdd,
  [Types.SCAN_FILES]: scan
})
