import { call, select, put } from 'redux-saga/effects'
import PlayerActions from '../Redux/PlayerRedux'

export const getSong = state => state.player.songName

export function * play (service, action) {
  const songName = yield select(getSong)
  if (songName) {
    yield put(PlayerActions.playerPlay())
    yield call(service.play)
  }
}

export function * pause (service, action) {
  const songName = yield select(getSong)
  if (songName) {
    yield put(PlayerActions.playerPause())
    yield call(service.pause)
  }
}
export function * stop (service, action) {
  yield put(PlayerActions.playerPause())
  if (service.stop) {
    yield call(service.stop)
  } else {
    console.tron.log('stop missing')
  }
}

export function * setSong (service, action) {
  const songName = yield select(getSong)
  yield put(PlayerActions.playerPause())
  yield call(service.setSong, songName)
}
