const template = document.createElement('template')
template.innerHTML = `
<style>

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

.services-section {
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  position: relative;
  margin-top: 70px;
}

.services-section::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
}

.services-grid {
  position: relative;
  display: grid;
  grid-template-areas: 
  "card1 card2" 
  "card3 card3";
  gap: 2.5rem;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
}

.service-card {
  background: #000;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 400px;
  transition: transform 0.3s ease;
  
}

.service-card:hover {
  transform: scale(1.03);
}

.with-image {
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.with-image::before {
  content: "";
  position: absolute;
  inset: 0;
}

.with-image .service-text {
  position: relative;
  z-index: 1;
  font-weight: 500;
  font-family: 'garet', sans-serif;
  font-size: 1.5rem;
}

.card1 {
    grid-area: card1;
    background-image: url('../components/tjänst-section/img/Verktyg 2.png');
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: darken;
    text-decoration: none;
    border-radius: 1rem;
}

.card2 {
    grid-area: card2;
    background-image: url('../components/tjänst-section/img/IMG_9792.jpeg');
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: darken;
    text-decoration: none;
    border-radius: 1rem;
}

.card3 {
    grid-area: card3;
    text-decoration: none;
    display: block;
}

.card3 p{
    margin-top: -10px;
}

.service-card3 {
  background: #000;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
  display: block;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 400px;
  transition: transform 0.3s ease;
  border: 1px solid white;
}

.service-card3:hover {
  transform: scale(1.03);
}

.header {
  margin-top: -10px;
}

</style>

<div class="overlay"></div>
<img src="../components/tjänst-section/img/tjänster-bg.jpeg" alt="Verktyg i arbete" class="background">
<section class="services-section">
    <div class="services-grid">

      <a href ="/services/diamond" class="card1">
      <div class="service-card with-image card1">
      <p class="service-text">Omsättning av borr</p> 
      </div>
      </a>

      <a href ="/services/warehouse" class="card2">
      <div class="service-card with-image card2">
      <p class="service-text">Hämtlager</p> 
      </div>
      </a>

      <a href ="https://jlmgroup.se/shop/" target="_blank" class="card3">
      <div class="with-image card3 service-card3">
      <p class="service-text">Samarbetspartner med JLM Group <br> Se hela sortimentet här!</p>
      <img src="../components/tjänst-section/img/JLM_GROUP_red-and-white_long.png" alt="#" style="width: 100%; margin-top: 40px"> 
      </div>
      </a>

    </div>
  </section>

`

customElements.define('services-section',
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
