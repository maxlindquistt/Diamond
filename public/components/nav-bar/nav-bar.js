import '../custom-button/index.js'

const template = document.createElement('template')
template.innerHTML = `
    <style>
        .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
  position: relative;
  z-index: 10;
  font-family: 'garet', sans-serif;
}

.navbar::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -50px; 
  width: 100%;
  height: 50px; 
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  pointer-events: none;
  z-index: 5;
}


.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo img {
  height: 160px;
  margin-left: 2.5rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.phone {
  font-size: 1.6rem;
  margin-right: 2.5rem;
}
    </style>

<header class="navbar">
<div class="logo">
  <img src="../components/nav-bar/img/diamond-logo.jpg" alt="Vimmerby Diamantverktyg logo">
</div>
<nav>
  <ul>
    <custom-button text = "Startsida" href = "/"></custom-button>
    <custom-button text ="Tjänster" href = "/services"></custom-button>
    <custom-button text ="Om oss" href = "/about"></custom-button>
    <custom-button text ="Kontakt" href = "/contact"></custom-button>
  </ul>
</nav>
<div class="phone">070-0700707</div>
</header>

`

customElements.define('nav-bar',
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
