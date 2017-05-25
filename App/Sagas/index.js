import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { SonglistTypes } from '../Redux/SonglistRedux'
import { PlayerTypes } from '../Redux/PlayerRedux'

/* ------------- Sagas ------------- */

import { scanFiles } from './SonglistSagas'
import { play, pause } from './PlayerSagas'
import Player from '../Services/Player'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  try {
    yield [
      takeLatest(SonglistTypes.SCAN_FILES, scanFiles),
      takeLatest(PlayerTypes.PLAYER_PLAY, play, Player),
      takeLatest(PlayerTypes.PLAYER_PAUSE, pause, Player)
    ]
  } catch (e) {
    console.tron.log(e)
  }
}
