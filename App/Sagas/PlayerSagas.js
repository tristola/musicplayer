import { call } from 'redux-saga/effects'

export function * play (service, action) {
  yield call(service.play)
}
export function * pause (service, action) {
  yield call(service.pause)
}
