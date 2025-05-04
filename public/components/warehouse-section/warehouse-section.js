const template = document.createElement('template')
template.innerHTML = `
<style>
.product-section {
  background-size: cover;
  background-position: center;
  padding: 6rem 2rem;
  position: relative;
  color: white;
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
  background: rgba(0,0,0,0.75);
  top: 0;
  left: 0;
  z-index: -1;
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  grid-template-areas: 
    "card1 . "
    ". card2"
    "card3 ."
    ". card4";
}

.product-item {
  text-align: center;
  padding: 0 1rem;
}

.product-item h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.product-item p {
  font-size: 1rem;
  line-height: 1.6;
}

.card1 {
    grid-area: card1;
}

.card2 {
    grid-area: card2;
}

.card3 {
    grid-area: card3;
}

.card4 {
    grid-area: card4;
}
</style>
  <section class="product-section">
    <div class="product-grid">

      <div class="product-item card1">
        <h2>Diamantborr</h2>
        <p>
          Upptäck kraften i våra diamantborrar – perfekta för professionella användare som kräver snabb, exakt och ren borrning i hårda material som betong, granit, kakel och sten. 
          Med slitstarka diamantsegment och optimal kylning får du längre livslängd och jämna resultat varje gång. 
          Oavsett om du jobbar med VVS, elinstallation eller bygg – vår diamantborr levererar när det verkligen gäller.
        </p>
      </div>

      <div class="product-item card2">
        <h2>Sågklingor</h2>
        <p>
          Våra sågklingor är designade för att leverera rena, exakta snitt i trä, metall, plast och kompositmaterial. 
          Med högkvalitativt stål och hårdmetalltänder får du lång hållbarhet, minimal vibration och maximal precision – varje gång. 
          Oavsett om du arbetar i verkstad eller på byggarbetsplatsen är våra sågklingor det självklara valet för proffs som kräver resultat.
        </p>
      </div>

      <div class="product-item card3">
        <h2>Maskiner</h2>
        <p>
        Våra maskiner är byggda för att klara de tuffaste jobben med precision, styrka och säkerhet. 
        Oavsett om du arbetar inom bygg, industri eller verkstad erbjuder vi ett brett sortiment av högpresterande maskiner som 
        förenklar ditt arbete och ökar effektiviteten. Med robust konstruktion, smarta funktioner och användarvänlig design är våra 
        maskiner det självklara valet för dig som vill ha kvalitet som håller.
        </p>
      </div>

      <div class="product-item card4">
        <h2>Kontakta oss</h2>
        <p>
        Passar något av detta in på dig? Behöver du diamantborrar, sågklingor eller maskiner som levererar på riktigt? Då är det dags att agera – kontakta oss nu för personlig service och rätt utrustning för jobbet!
        </p>
        <custom-button text="Kontakta oss" href="/contact"></custom-button>
      </div>

    </div>
  </section>
`

customElements.define('warehouse-section',
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
