import { fetchTrendingGifs, fetchSearchedGifs } from "../helpers/api.js";

export function fetchTrending() {
  return function(dispatch) {
    fetchTrendingGifs()
      .then(json => {
        dispatch({type: "FETCH_TRENDING",
        payload: json
      })
    })
  }
}

export function fetchingTrending() {
  return { type: "FETCHING_TRENDING" };
}

export function fetchSearched(searchTerm) {
  return function(dispatch) {
    fetchSearchedGifs(searchTerm)
      .then(json => {
        dispatch({type: "FETCH_TERM",
        payload: { searchTerm: json }})
      })
  }
}

export function fetchingSearchTerm() {
  return { type: "FETCHING_TERM" };
}
