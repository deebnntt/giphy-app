export default function gifReducer(
  state = {trending: [], results: []}, action) {
  switch (action.type) {
    case "FETCH_TRENDING":
      const newState = {...state, trending: action.payload}
      return newState
    case "FETCH_TERM":
      const updatedState = {...state, results: action.payload}
      return updatedState
    default:
      return state
  }
}
