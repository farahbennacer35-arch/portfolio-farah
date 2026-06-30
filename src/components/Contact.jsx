<<<<<<< HEAD
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-box reveal">
        <h2>Contact</h2>

        <div className="contact-grid">
          <form className="contact-form">
            <label>Nom complet</label>
            <input type="text" placeholder="Farah Bennacer" />

            <label>Email</label>
            <input type="email" placeholder="farahbennacer35@gmail.com" />

            <label>Votre message</label>
            <textarea placeholder="Parlez-moi de votre projet, stage ou collaboration..." />

            <button type="button">Envoyer le message</button>
          </form>

          <div className="contact-info">
            <h3>Mes coordonnées</h3>

            <p>📞 (+216) 26 953 802</p>
            <p>📧 farahbennacer35@gmail.com</p>
            <p>📍 Sfax, Tunisie</p>

            <a href="https://www.linkedin.com/in/farah-bennacer-9278042b4/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="https://github.com/farahbennacer35-arch" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <div className="available">
              <h4>Disponible pour :</h4>
              <span>Stage</span>
              <span>Projet web</span>
              <span>Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

=======
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-box reveal">
        <h2>Contact</h2>

        <div className="contact-grid">
          <form className="contact-form">
            <label>Nom complet</label>
            <input type="text" placeholder="Farah Bennacer" />

            <label>Email</label>
            <input type="email" placeholder="farahbennacer35@gmail.com" />

            <label>Votre message</label>
            <textarea placeholder="Parlez-moi de votre projet, stage ou collaboration..." />

            <button type="button">Envoyer le message</button>
          </form>

          <div className="contact-info">
            <h3>Mes coordonnées</h3>

            <p>📞 (+216) 26 953 802</p>
            <p>📧 farahbennacer35@gmail.com</p>
            <p>📍 Sfax, Tunisie</p>

            <a href="https://www.linkedin.com/in/farah-bennacer-9278042b4/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="https://github.com/farahbennacer35-arch" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <div className="available">
              <h4>Disponible pour :</h4>
              <span>Stage</span>
              <span>Projet web</span>
              <span>Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

>>>>>>> 3ccef11 (initial portfolio)
export default Contact;