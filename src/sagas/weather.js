import { takeEvery } from 'redux-saga'
import {call, put, select} from 'redux-saga/effects'
import fetchWeatherService from '../services/fetchWeather'
import weatherActionTypes from '../constants/actions/weather'

export function * example () {
}

export function * watchExample () {
  yield * takeEvery(weatherActionTypes.EXAMPLE, example)
}
