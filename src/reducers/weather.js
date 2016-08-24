import weatherActionTypes from '../constants/actions/weather'

const initialState = {
}

function example (state, action) {
  return state
}

export default function (state = initialState, action) {
  switch (action.type) {
    case weatherActionTypes.EXAMPLE:
      return example(state, action)
    default:
      return state
  }
}
