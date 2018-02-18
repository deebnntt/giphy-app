export default function gifReducer(
  state = {trending: [], results: [], terms: [], currentTerm: ""}, action) {
  switch (action.type) {
    case "FETCH_TRENDING":
      return {...state, trending: action.payload}
    case "FETCH_TERM":
      return {...state, results: action.payload}
    case "SET_TERM":
      return {...state, currentTerm: action.payload}
    case "ADD_TERM":
      const newTerms = state.terms.concat(action.payload)
      return {...state, terms: newTerms}
    default:
      return state
  }
}
