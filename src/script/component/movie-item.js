class MovieItem extends HTMLElement {

	set movie(movie) {
		this._movie = movie;
		this.render();
	}

	render() {
		this.innerHTML = `
		<style>
		.movie-item {
			width: 400px;
			border: 1px solid black;
		}

		.movie-item img {
			width: 150px;
		}

		.movie-item h5 {
			margin-top: -100px;
			font-family: sans-serif;
			display: inline;
		}
		</style>

		<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative col-md-12">
			<div class="col p-4 d-flex flex-column position-static">
			<strong class="d-inline-block mb-2 text-primary">Movie</strong>
			<h3 class="mb-0">${this._movie.title}</h3>
			<div class="mb-1 text-muted">${this._movie.release_date}</div>
				<p class="card-text mb-auto">${this._movie.overview}</p>
			</div>
			<div class="col-auto d-none d-lg-block">
			    <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" width="200" height="250">
			</div>
		</div>
		`;
	}

}

customElements.define("movie-item", MovieItem);