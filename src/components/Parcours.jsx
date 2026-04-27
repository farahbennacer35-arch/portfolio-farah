import asmLogo from "../assets/asm.png";
import iitLogo from "../assets/iit.png";

function Parcours() {
  return (
    <section className="section parcours" id="parcours">
      <div className="section-title reveal">
        <h2>Parcours académique & Expériences</h2>
        <p>Mon parcours, mes stages, mes certifications et mes engagements.</p>
      </div>

      <div className="parcours-grid">
        <div className="parcours-block reveal">
          <h3>🎓 Parcours académique</h3>

          <div className="timeline-card logo-card">
            <div className="timeline-logo">
              <img src={iitLogo} alt="IIT Sfax" />
            </div>

            <div className="timeline-content">
              <span>2023 — Présent</span>
              <h4>Génie Logiciel & Systèmes d’Information</h4>
              <p>Institut International de Technologie — IIT Sfax</p>
              <small>
                Formation orientée développement web, bases de données,
                architecture logicielle, frameworks modernes et analyse de données.
              </small>
            </div>
          </div>

          <div className="timeline-card logo-card">
            <div className="timeline-logo">
              
            </div>

            <div className="timeline-content">
              <span>2022 — 2023</span>
              <h4>Baccalauréat Sciences Expérimentales</h4>
              <p>Lycée Gremda — Sfax</p>
              <small>
                Formation scientifique basée sur les sciences, les mathématiques,
                la physique et l’algorithmique.
              </small>
            </div>
          </div>
        </div>

        <div className="parcours-block reveal delay">
          <h3>💼 Stages & Expériences</h3>

          <div className="timeline-card logo-card">
            <div className="timeline-logo asm-logo">
              <img src={asmLogo} alt="All Soft Multimédia" />
            </div>

            <div className="timeline-content">
              <span>Février 2026 — Présent</span>
              <h4>Software Developer — All Soft Multimédia</h4>
              <p>Sfax, Tunisie</p>
              <small>
                Développement d’une plateforme web pour la gestion des réclamations
                et de la satisfaction client avec Angular, Laravel, Keycloak,
                Power BI et un module IA en Python.
              </small>
            </div>
          </div>

          <div className="timeline-card logo-card">
            <div className="timeline-logo asm-logo">
              <img src={asmLogo} alt="All Soft Multimédia" />
            </div>

            <div className="timeline-content">
              <span>Juillet 2025 — Août 2025</span>
              <h4>Web Developer — All Soft Multimédia</h4>
              <p>Sfax, Tunisie</p>
              <small>
                Contribution au développement d’une application web de gestion
                d’événements avec Laravel, Angular et Node.js.
              </small>
            </div>
          </div>

          <div className="timeline-card logo-card">
            <div className="timeline-logo asm-logo">
              <img src={asmLogo} alt="All Soft Multimédia" />
            </div>

            <div className="timeline-content">
              <span>Août 2024 — Septembre 2024</span>
              <h4>Web Developer — All Soft Multimédia</h4>
              <p>Sfax, Tunisie</p>
              <small>
                Participation au développement d’une application web de gestion
                des employés avec Laravel, Angular et Node.js.
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="extra-grid">
        <div className="extra-card reveal">
          <h3>🤝 Expérience associative</h3>

          <div className="mini-card">
            <h4>Member — IEEE Student Branch IIT Sfax</h4>
            <p>
              Participation à des activités techniques, événements et projets
              étudiants.
            </p>
          </div>

          <div className="mini-card">
            <h4>Member — SOS</h4>
            <p>
              Engagement associatif, travail en équipe et participation à des
              actions collectives.
            </p>
          </div>
        </div>

        <div className="extra-card reveal delay">
          <h3>🏅 Certifications & Attestations</h3>

          <div className="certif-list">
            <a
              href="/attestations/aws-cloud-foundations.pdf"
              target="_blank"
              rel="noreferrer"
            >
              AWS Academy Graduate — Cloud Foundations
            </a>

            <a
              href="/attestations/ai-tools-coding.pdf"
              target="_blank"
              rel="noreferrer"
            >
              AI Tools for Coding
            </a>

            <a
              href="/attestations/atic-bootcamp.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Speaker — ATIC Bootcamp
            </a>

            <a
              href="/attestations/hackvision.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Participant — HACKVISION Hackathon
            </a>
          </div>
        </div>

        <div className="extra-card reveal">
          <h3>💡 Centres d’intérêt</h3>

          <div className="interest-tags">
            <span>Technologie</span>
            <span>Programmation</span>
            <span>Projets personnels</span>
            <span>Compétitions</span>
            <span>Musique</span>
            <span>Challenges</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parcours;