import { call, select } from 'redux-saga/effects'

export function * play (service, action) {
  yield call(service.play)
}
export function * pause (service, action) {
  yield call(service.pause)
}

export const getSong = state => state.player.songName

export function * setSong (service, action) {
  const songName = yield select(getSong)
  yield call(service.setSong, songName)
}
