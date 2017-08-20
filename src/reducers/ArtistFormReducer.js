import { ARTIST_VALUE_CHANGE } from '../actions/types'

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

//using es6 "key interpolation" on return value of
export default (state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case ARTIST_VALUE_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
    return state
  }
}
