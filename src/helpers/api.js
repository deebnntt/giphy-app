const BASE_URL = 'http://api.giphy.com/v1/gifs/'
const KEY = 'XfCRmGTeh86OSFFE1WLh1iXicD4KMP5h'

export default class Api {

	static fetchTrendingGifs() {
		debugger
		return fetch(`${BASE_URL}trending?api_key=${KEY}&limit=6`)
			.then(res => res.json())
	}

	static fetchSearchedGifs(query) {
		return fetch(`${BASE_URL}search?q=${query}&api_key=${KEY}&limit=9`)
			.then(res => res.json())
	}
}
