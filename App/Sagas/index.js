import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { SonglistTypes } from '../Redux/SonglistRedux'
import { PlayerTypes } from '../Redux/PlayerRedux'

/* ------------- Sagas ------------- */

import { scanFiles } from './SonglistSagas'
import { play, pause, stop, setSong } from './PlayerSagas'
import Player from '../Services/Player'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  try {
    yield [
      takeLatest(SonglistTypes.SCAN_FILES, scanFiles),
      takeLatest(PlayerTypes.PLAYER_PLAY_PRESSED, play, Player),
      takeLatest(PlayerTypes.PLAYER_PAUSE_PRESSED, pause, Player),
      takeLatest(PlayerTypes.PLAYER_STOP_PRESSED, stop, Player),
      takeLatest(PlayerTypes.PLAYER_SET_SONG_NAME, setSong, Player)
    ]
  } catch (e) {
    console.tron.log(e)
  }
}
