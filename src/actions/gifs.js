import { fetchTrendingGifs, fetchSearchedGifs } from "../helpers/api.js";

export function fetchTrending() {
  return function(dispatch) {
    fetchTrendingGifs()
      .then(json => {
        dispatch({type: "FETCH_TRENDING",
        payload: json.data })
    })
  }
}

export function fetchSearched(searchTerm) {
  return function(dispatch) {
    fetchSearchedGifs(searchTerm)
      .then(json => {
        dispatch({type: "FETCH_TERM",
        payload: json.data })
      })
    }
  }

export function setCurrentTerm(term) {
  return{
    type: "SET_TERM",
    payload: term
  }
}

export function addSearchTerm(term) {
  return{
    type: "ADD_TERM",
    payload: term
  }
}
