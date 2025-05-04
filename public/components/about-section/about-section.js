const template = document.createElement('template')
template.innerHTML = `
    <style>

@import url('https://fonts.cdnfonts.com/css/garet');
 
        * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
    font-family: 'garet', sans-serif;
}

.about-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.background {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: -1;
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
}

.text-box {
  margin-top: -150px;
  flex: 1;
  min-width: 280px;
  max-width: 600px;
  color: white;

}

.text-box p {
  font-size: 1.5rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 500;
}

.cta {
  text-align: center;
}

.cta h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.button {
  display: inline-block;
  padding: 0.7rem 1.4rem;
  background-color: white;
  color: black;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
}

    </style>
<section class="about-section">
<div class="overlay"></div>
<img src="../components/about-section/img/about-bg-edited2.jpeg" alt="Bakgrundsbild" class="background">

<div class="about-content">
  <div class="text-box">
    <p>
      Vimmerby Diamantverktyg är ett familjeägt företag med lång erfarenhet av verktyg för rivning och håltagning.
      Vi säljer högkvalitativa produkter till professionella i byggbranschen – från sågklingor och diamantborrar till
      större maskiner. Utöver försäljning erbjuder vi även reparation och omsättning av diamantverktyg, så att du
      kan få ut maximal livslängd av dina verktyg. Hos oss står personlig service och pålitlighet alltid i fokus.
    </p>
    <div class="cta">
      <h3>Kontakta oss idag</h3>
      <custom-button text="Kontakta oss" href="kontakt.html"></custom-button>
    </div>
  </div>
</div>
</section>
`

customElements.define('about-section',
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
