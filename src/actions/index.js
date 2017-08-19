import { EMAIL_CHANGED } from './types'
import { PASSWORD_CHANGED } from './types'

export const selectLibrary = (itemId) => {
  return {
    type: 'select_tech_item',
    payload: itemId
  }
}

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}
