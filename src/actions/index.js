export const selectLibrary = (itemId) => {
  return {
    type: 'select_tech_item',
    payload: itemId
  }
}
