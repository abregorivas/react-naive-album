import { ARTIST_VALUE_CHANGE } from './types'

export const artistUpdate = ({ prop, value }) => {
  return {
    type: ARTIST_VALUE_CHANGE,
    payload: { prop, value}
  }
}
