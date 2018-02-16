export function fetchTrendingGifs() {
	const baseURL = 'http://api.giphy.com/v1/gifs/'
  const key = 'XfCRmGTeh86OSFFE1WLh1iXicD4KMP5h'

	return fetch(`${baseURL}trending?api_key=${key}&limit=6`)
		.then(res => res.json())
}

export function fetchSearchedGifs(query) {
	const baseURL = 'http://api.giphy.com/v1/gifs/'
  const key = 'XfCRmGTeh86OSFFE1WLh1iXicD4KMP5h'

	return fetch(`${baseURL}search?q=${query}&api_key=${key}&limit=9`)
		.then(res => res.json())
}
