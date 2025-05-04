const template = document.createElement('template')
template.innerHTML = `
    <style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'garet', sans-serif;
}

.kontakt-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: -70px; 
}

.background {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  z-index: -2;
}

.overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
}

.kontakt-container {
  display: flex;
  gap: 3rem;
  max-width: 1000px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 7.5rem;
}

.form-box {
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border: 2px solid #999;
  border-radius: 12px;
  flex: 1;
  min-width: 300px;
  max-width: 600px;
}

.form-box h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.form-box p {
  margin-bottom: 2rem;
  font-size: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  color: black;
  width: 100%;
}

button {
  padding: 0.8rem;
  background: white;
  color: black;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
}

.info-box {
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.info-box h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.info-box p {
  font-size: 1.2rem;
  line-height: 1.6;
}
    </style>
    <section class="kontakt-section">
    <div class="overlay"></div>
    <img src="../components/contact-form/img/kontakt-bg.jpeg" alt="Bakgrundsbild" class="background">

    <div class="kontakt-container">

      <div class="info-box">
        <div>
          <h2>Adress</h2>
          <p>Industrigatan 21<br>598 41 Vimmerby</p>
        </div>
        <div>
          <h2>Telefon</h2>
          <p>070-0700707</p>
        </div>
        <div>
          <h2>E-post</h2>
          <p>info@vimmerbydiamant.se</p>
        </div>
      </div>

      <div class="form-box">
        <h1>Kontakta oss</h1>
        <p>Har du frågor om våra produkter eller vill du komma i kontakt med oss?<br>
        Fyll i formuläret nedan eller använd kontaktuppgifterna</p>

        <form>
          <label for="name">Ditt namn</label>
          <input type="text" id="name" placeholder="Namn" required>

          <label for="email">Din e-postadress</label>
          <input type="email" id="email" placeholder="epost@adress.se" required>

          <label for="message">Ditt meddelande</label>
          <textarea id="message" rows="5" placeholder="Skriv ditt meddelande här..." required></textarea>

          <button type="submit">Skicka</button>
        </form>
      </div>

    </div>
  </section>
`

customElements.define('contact-form',
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
      this.shadowRoot.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault() // Prevent the default form submission
        const name = this.shadowRoot.getElementById('name').value
        const email = this.shadowRoot.getElementById('email').value
        const message = this.shadowRoot.getElementById('message').value

        // Here you can handle the form submission, e.g., send the data to a server
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)
      })
    }

    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback () {
    }
  })
