
class HeaderBar extends HTMLElement {

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<style>
		.page-header {
			margin: 0;
			padding: 10px;
			background: #007c89;
		}

		.page-header h1 {
			font-weight: bold;
			color: #f6f6f6;
		}
		</style>
		<div class="page-header col-md-12 col-md-6 col-xs-6 col-sm-3 col-sm-12">
		   <h1 class="display-4 font-italic">
		      Movie Overview
		   </h1>
		</div>`;
	}

}

customElements.define("header-bar", HeaderBar);