const template = document.createElement('template')
template.innerHTML = `
 <style>

.repair-section {
  background-image: url('../components/diamond-section/img/diamond-bg.jpg'); /* byt ut till korrekt bildfil */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-family: 'garet', sans-serif;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 0;
}

.repair-content {
  max-width: 900px;
  z-index: 1;
  margin-top: -150px;
}

.repair-content h2 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 3rem;
}

.repair-content p {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.contact-line {
  margin-top: 2rem;
}

</style>
  <section class="repair-section">
    <div class="overlay"></div>
    <div class="repair-content">
      <h2>Reparation & återställning av diamantborrar</h2>
      <p>
        När diamantborrar slits ner eller går sönder behöver de inte bytas ut direkt – vi erbjuder en kostnadseffektiv och miljövänlig lösning genom att sätta om och reparera dina befintliga borrar. 
        Genom att ersätta utslitna segment eller återmontera trasiga delar förlänger vi livslängden på dina verktyg och säkerställer att de återfår sin fulla prestanda.
      </p>
      <p>
        Vi använder avancerad utrustning och noggrant utvalda material för att säkerställa högsta kvalitet på varje reparation. 
        Oavsett om det rör sig om standardborrar eller specialanpassade modeller ser vi till att dina verktyg är i toppskick inför nästa uppdrag. 
        Vår tjänst sparar både tid och pengar – och bidrar samtidigt till ett mer hållbart byggande.
      </p>
      <p class="contact-line">
        Kontakta oss redan idag för mer information eller för att få en kostnadsfri offert på reparation av dina diamantborrar. Vi hjälper dig gärna!
      </p>
      <custom-button text="Kontakta oss" href="kontakt.html"></custom-button>

    </div>
  </section>
`

customElements.define('diamond-section',
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