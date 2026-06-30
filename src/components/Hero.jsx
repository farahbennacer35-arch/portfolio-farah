
import profile from "../assets/farah.jpg";

function Hero() {
  return (
    <section className="hero-new" id="home">
      <div className="hero-left">
        <span className="hero-label">Portfolio personnel</span>

        <h2>
          Bonjour, je suis <br />
          <span>Farah Bennacer</span>
        </h2>

        <h3>Développeuse Full Stack | Data & IA</h3>

        <p>
          Étudiante en Génie Logiciel et Systèmes d’Information, passionnée par
          le développement web, l’intelligence artificielle et l’analyse de
          données. J’ai réalisé plusieurs projets concrets avec Angular, Laravel,
          Node.js, Spring Boot et Python.
        </p>

        <p>
          Actuellement à la recherche d’une opportunité de stage, projet web ou
          collaboration professionnelle.
        </p>

        <div className="stack-line">
          <strong>Tech Stack :</strong> Angular • Laravel • React • Python • Spring Boot • MySQL
        </div>

        <div className="hero-actions">
          <a href="#projects" className="hero-btn primary">🚀 Voir mes projets</a>
          <a href="#contact" className="hero-btn secondary">📩 Me contacter</a>
        </div>

        <div className="hero-note">
          Réponse rapide garantie • Ouverte aux opportunités en Tunisie et à l’international
        </div>
      </div>

      <div className="hero-right">
        <div className="photo-frame">
          <img src={profile} alt="Farah Bennacer" />
        </div>
      </div>
    </section>
  );
}

import profile from "../assets/farah.jpg";

function Hero() {
  return (
    <section className="hero-new" id="home">
      <div className="hero-left">
        <span className="hero-label">Portfolio personnel</span>

        <h2>
          Bonjour, je suis <br />
          <span>Farah Bennacer</span>
        </h2>

        <h3>Développeuse Full Stack | Data & IA</h3>

        <p>
          Étudiante en Génie Logiciel et Systèmes d’Information, passionnée par
          le développement web, l’intelligence artificielle et l’analyse de
          données. J’ai réalisé plusieurs projets concrets avec Angular, Laravel,
          Node.js, Spring Boot et Python.
        </p>

        <p>
          Actuellement à la recherche d’une opportunité de stage, projet web ou
          collaboration professionnelle.
        </p>

        <div className="stack-line">
          <strong>Tech Stack :</strong> Angular • Laravel • React • Python • Spring Boot • MySQL
        </div>

        <div className="hero-actions">
          <a href="#projects" className="hero-btn primary">🚀 Voir mes projets</a>
          <a href="#contact" className="hero-btn secondary">📩 Me contacter</a>
        </div>

        <div className="hero-note">
          Réponse rapide garantie • Ouverte aux opportunités en Tunisie et à l’international
        </div>
      </div>

      <div className="hero-right">
        <div className="photo-frame">
          <img src={profile} alt="Farah Bennacer" />
        </div>
      </div>
    </section>
  );
}

export default Hero;