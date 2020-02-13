class AppText extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({
            mode: 'open'
        });

        this.inputText = null;
        this.displayer = null;
    }

    connectedCallback() {
        this.shadow.innerHTML = `
            <style>
                :host(.test) {
                    display: block;
                    border: 1px solid seagreen;
                    padding: 10px;
                }
                :host-context(.aston) {
                    border-color: red;
                }
                h2 {
                    color: royalblue;
                }
                input[type="text"] {
                    border: 1px solid #333;
                    border-radius: 3px;
                    padding: 4px;
                }
                .app-text { margin-bottom: 10px; }
            </style>
            <div class="app-text">
                <h2>Titre dans le composant</h2>
                <input type="text" id="app-input-text">
                <span id="app-text-displayer"></span>
            </div>
        `;

        this.inputText = this.shadow.querySelector('#app-input-text');
        this.displayer = this.shadow.querySelector('#app-text-displayer');

        this.inputText.addEventListener('keyup', event => {
            this.displayer.textContent = event.target.value;
        });
    }
}

window.customElements.define('app-text', AppText);
