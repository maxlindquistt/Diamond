const template = document.createElement('template')
template.innerHTML = `
    <style>

        /* From Uiverse.io by nikk7007 */ 
.button {
 --color: white;
 padding: 0.8em 1.7em;
 background-color: transparent;
 border-radius: .3em;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 transition: .5s;
 font-weight: 400;
 font-size: 17px;
 border: 1px solid;
 font-family: sans-serif;
 text-transform: uppercase;
 color: var(--color);
 z-index: 1;
}

.button::before, .button::after {
 content: '';
 display: block;
 width: 50px;
 height: 50px;
 transform: translate(-50%, -50%);
 position: absolute;
 border-radius: 50%;
 z-index: -1;
 background-color: var(--color);
 transition: 0.7s ease;
}

.button::before {
 top: -1em;
 left: -1em;
}

.button::after {
 left: calc(100% + 1em);
 top: calc(100% + 1em);
}

.button:hover::before, .button:hover::after {
 height: 410px;
 width: 410px;
}

.button:hover {
 color: rgb(10, 25, 30);
}

.button:active {
 filter: brightness(.8);
}

</style>

<a> <span>
<button class="button">
</button>
</span> </a>

`

customElements.define('custom-button',
  /**
   * Extends the HTMLElement
   */
  class extends HTMLElement {
    
    /**
     * Creates an instance of the custom element and attaches a shadow DOM.
     */
    constructor () {
      super();
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    
    /**
     * Returns an array of attributes to be observed for changes.
     *
     * @returns {string[]} The list of attributes to be observed.
     */
    static get observedAttributes () {
      return ['text', 'href']
    }
    
    /**
     * Called when one of the observed attributes changes.
     *
     * @param {string} name The name of the attribute that changed.
     * @param {string} oldValue The old value of the attribute.
     * @param {string} newValue The new value of the attribute.
     */
    attributeChangedCallback (name, oldValue, newValue) {
    }
    
    /**
     * Called when the element is connected to the DOM.
     */
    connectedCallback () {
      // Example: Set the text content of the button based on the 'text' attribute
      const text = this.getAttribute('text') || 'Click me'
      this.shadowRoot.querySelector('.button').textContent = text

      const href = this.getAttribute('href') || '#'
      this.shadowRoot.querySelector('a').setAttribute('href', href)
      // Add event listeners or perform actions when the element is added to the DOM
      this.shadowRoot.querySelector('.button').addEventListener('click', () => {
        console.log('Button clicked!')
        
      })
    }
    
    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback () {
    }
  })