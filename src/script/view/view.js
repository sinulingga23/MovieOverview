import MovieSource from "../client/api-movie.js";

const view = () => {
	const listMovie = document.getElementById("list-movie");
	const btnSearchMovie = document.getElementById("btn-search-movie");

	const renderResult = results => {
		listMovie.innerHTML = "";

		results.forEach(movie => {
			const resMovie = {
				title: movie.title,
				poster_path: movie.poster_path,
				overview: movie.overview,
				release_date: movie.release_date
			};

			const movieItem = document.createElement("movie-item");
			movieItem.movie = resMovie;
			listMovie.appendChild(movieItem);
		});
	};

	const firstTime = async() => {
		try {
			const results = await MovieSource.firstTime();
			renderResult(results);
		} catch (message) {
			alert(message);
		}
	};
	firstTime();

	btnSearchMovie.addEventListener("click", () => {
		const querySearchMovie = document.getElementById("search-movie");

		if (querySearchMovie === "" || querySearchMovie === null) {
			firstTime();
		} else {
			const searchMovie = async() => {
				try {
					const results = await MovieSource.searchMovie(querySearchMovie.value);
					renderResult(results);
				} catch (message) {
					alert(message);
				}
			};
			searchMovie();
		}
	});
};

export default view;