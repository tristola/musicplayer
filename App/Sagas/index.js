import { takeLatest } from 'redux-saga'

/* ------------- Types ------------- */

import { SonglistTypes } from '../Redux/SonglistRedux'

/* ------------- Sagas ------------- */

import { scanFiles } from './SonglistSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(SonglistTypes.SCAN_FILES, scanFiles)
  ]
}
