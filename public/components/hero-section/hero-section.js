import '../custom-button/index.js'
const template = document.createElement('template')
template.innerHTML = `
    <style>
        .hero {
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  font-family: 'garet', sans-serif;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: -2;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  top: 0;
  left: 0;
  z-index: -1;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  color: white;
  flex-wrap: wrap;
}

.left {
  max-width: 55%;
  margin-top: -150px;
  margin-left: -100px;
}

.left h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.left p {
  font-size: 2rem;
}

.right {
  text-align: left;
  max-width: 55%;
  
}

.right h1 {
  font-size: 4rem;
}

.right h1 span {
  display: block;
  font-size: 2.2rem;
}

.right p {
  margin: 1rem 0;
  font-size: 1.5rem;
}

    </style>
<section class="hero">
<div class="overlay"></div>
<img src="../components/hero-section/img/background.jpg" alt="Verktyg i arbete" class="background">
<div class="hero-content">
  <div class="left">
    <h1>Proffs inom riv<br>& bygg</h1>
    <p>Vi säljer proffsprodukter till håltagningsfirmor – och reparerar dina diamantverktyg</p>
  </div>
  <div class="right">
    <h1>Kontakta oss<br>redan idag</h1>
    <p><strong>Tel:</strong> 070-0700707<br><strong>Mail:</strong> mailadress@gmail.com</p>
    <custom-button text = "Kontakta oss" href = "/contact"></custom-button>
  </div>
</div>
</section>
`

customElements.define('hero-section',
  /**
   * Extends the HTMLElement
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the custom element and attaches a shadow DOM.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    /**
     * Returns an array of attributes to be observed for changes.
     *
     * @returns {string[]} The list of attributes to be observed.
     */
    static get observedAttributes () {
      return []
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
    }

    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback () {
    }
  })
