import { Actions } from 'react-native-router-flux'
import { ARTIST_VALUE_CHANGE } from './types'

export const ArtistUpdate =({ prop, value }) => {
  return {
    type: ARTIST_VALUE_CHANGE,
    payload: { prop, value}
  }
}
