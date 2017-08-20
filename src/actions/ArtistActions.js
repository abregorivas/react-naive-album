import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { ARTIST_VALUE_CHANGE, ARTIST_CREATE } from './types'

export const artistUpdate = ({ prop, value }) => {
  return {
    type: ARTIST_VALUE_CHANGE,
    payload: { prop, value}
  }
}

// note: no action was dispatch as this is meant to send data to firebase.
// The return statement is a workaround to bypass redux thunk
export const artistCreate = ({name, phone, genre }) => {
  const { currentUser } = firebase.auth()

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/artists`)
    .push({ name, phone, genre })
    .then(() => Actions.artistList)
  }
}
