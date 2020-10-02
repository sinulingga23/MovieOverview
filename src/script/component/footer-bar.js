class FooterBar extends HTMLElement {

	connectedCallback() {
		this.render();
	}

	render() {

		this.innerHTML = `
		<style>
		.footer-copyright {
			position: fixed; 
            padding: 10px 10px 0px 10px; 
            bottom: 0; 
            width: 100%;  
            height: 40px; 
            background: #007c89;
            color: #f6f6f6;
            font-weight: bold;
		}
		</style>
		<div class="footer-copyright text-center py-3 col-md-12 col-md-6 col-xs-6 col-sm-3 col-sm-12">
		Copyright&copy 2020 ; - Denny Rezky Sinulingga
		</div>`;
	}

}

customElements.define("footer-bar", FooterBar);