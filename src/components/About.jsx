
function About() {
  return (
    <section className="section about" id="about">
      <div className="section-title reveal">
        <h2>À propos de moi</h2>
        <p>
          Techniciennne motivée, orientée solution, avec un fort intérêt pour les
          applications web modernes, les systèmes d’information et l’IA.
        </p>
      </div>

      <div className="about-card reveal">
        <h3>🎓 Farah Bennacer</h3>

        <p>
          Actuellement Techniciennne en <strong>Génie Logiciel et Systèmes
          d’Information</strong> à l’<strong>Institut International de
          Technologie de Sfax</strong>.
        </p>

        <p>
          À travers mes projets académiques, personnels et professionnels, j’ai
          acquis une expérience solide dans la conception et le développement
          d’applications web, la structuration de systèmes d’information et
          l’intégration de solutions innovantes.
        </p>

        <p>
          Mon objectif est de renforcer mes compétences techniques et de
          contribuer à la création de solutions digitales fiables, modernes et à
          forte valeur ajoutée.
        </p>
      </div>

      <div className="about-grid">
        <div className="info-card reveal">
          <h4>Formation</h4>
          <p>Génie Logiciel & Systèmes d’Information</p>
        </div>

        <div className="info-card reveal">
          <h4>Localisation</h4>
          <p>Sfax, Tunisie</p>
        </div>

        <div className="info-card reveal">
          <h4>Objectif</h4>
          <p>Développement web, IA et analyse de données</p>
        </div>
      </div>
    </section>
  );
}

export default About;