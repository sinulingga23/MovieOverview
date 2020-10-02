class MovieSource {
	static firstTime() {
        return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=ef3b05661c062be2c9995a3772dff905`)
        .then(response => {
            return response.json();
       })
        .then(responseJson => {
            if (responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
            	return Promise.reject("Check your connection");
            }
        })
    }

    static searchMovie(query) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=ef3b05661c062be2c9995a3772dff905&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => {
            return response.json();
       })
        .then(responseJson => {
            if (responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${query} is not found`);
            }
        })
    }
}

export default MovieSource;