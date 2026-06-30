import { useState } from "react";

/* PFE images */
const pfeImages = Object.values(
  import.meta.glob("../assets/Captures d’écran/*.{png,jpg,jpeg}", {
    eager: true,
    import: "default",
  })
);

/* Event images */
import employerImg from "../assets/events/employer.png";
import eventempImg from "../assets/events/eventemp.png";
import eventsImg from "../assets/events/events.png";
import momentempImg from "../assets/events/momentemp.png";
import momentsImg from "../assets/events/moments.png";
import moreImg from "../assets/events/more.png";
import notifImg from "../assets/events/notif.png";
import partImg from "../assets/events/part.png";
import participationImg from "../assets/events/participation.png";
import tbImg from "../assets/events/TB.png";

/* Medical images */
import consultationsImg from "../assets/Medical/consulataions.jpeg";
import medecinsImg from "../assets/Medical/Medecins.jpeg";
import patientsImg from "../assets/Medical/Patients.jpeg";
import rendezVousImg from "../assets/Medical/Rendez_vous.jpeg";
import medicalTbImg from "../assets/Medical/TB.jpeg";

const pfeProject = {
  title: "Plateforme de gestion des réclamations et de la satisfaction client",
  desc: "Développement d’une plateforme web orientée gestion des réclamations, suivi de la satisfaction client, analyse décisionnelle et exploitation des retours clients à travers un module d’intelligence artificielle.",
  tech: "Angular • Laravel • Keycloak • Power BI • Python • IA",
  github: "https://github.com/farahbennacer35-arch/Portfolio.project",
  type: "Projet de fin d’études",
  status: "Projet PFE",
  duration: "2026",
  objective:
    "Concevoir une plateforme intelligente pour centraliser les informations clients, suivre les réclamations, mesurer la satisfaction et aider à la prise de décision.",
  role:
    "J’ai participé à la conception, au développement des interfaces, à l’intégration backend, à la sécurité avec Keycloak et à l’analyse intelligente des retours clients.",
  result:
    "La solution améliore le suivi de la relation client, facilite la gestion des réclamations et donne une meilleure visibilité grâce aux tableaux de bord.",
  features: [
    "Gestion des clients",
    "Gestion des réclamations",
    "Campagnes de satisfaction",
    "Analyse des sentiments",
    "Tableaux de bord",
    "Alertes en temps réel",
    "Sécurité avec Keycloak",
    "Rapports décisionnels",
  ],
  images: pfeImages,
};

const projects = [
  {
    title: "Event Management System",
    desc: "Application web full-stack pour la gestion des événements, des participants, des employés, des notifications et du tableau de bord.",
    tech: "Laravel • Angular • Node.js",
    github: "https://github.com/yesmine879/event-management-system",
    type: "Web App",
    status: "Réalisé",
    duration: "Projet académique",
    objective:
      "Développer une plateforme web complète permettant d’organiser les événements, gérer les participants, affecter les employés et suivre les activités depuis un tableau de bord.",
    role:
      "J’ai participé à la conception des interfaces, à l’intégration des modules principaux et à l’organisation des fonctionnalités de gestion.",
    result:
      "Le projet permet de centraliser la gestion des événements et d’améliorer le suivi des participants, employés et notifications.",
    features: [
      "Gestion des événements",
      "Gestion des employés",
      "Gestion des participants",
      "Gestion des moments d’événement",
      "Système de notifications",
      "Tableau de bord administratif",
      "Consultation des détails",
      "Suivi des participations",
    ],
    images: [
      tbImg,
      eventsImg,
      eventempImg,
      employerImg,
      momentsImg,
      momentempImg,
      participationImg,
      partImg,
      notifImg,
      moreImg,
    ],
  },
  {
    title: "Study With Me Flutter App",
    desc: "Application mobile développée avec Flutter pour organiser les séances d’étude, suivre la progression, gérer le mood tracking et améliorer la concentration.",
    tech: "Flutter • Dart • Mobile App",
    github: "https://github.com/farahbennacer35-arch/study-with-me-flutter-app",
    type: "Mobile App",
    status: "Réalisé",
    duration: "Projet mobile",
    objective:
      "Créer une application mobile motivante pour aider les étudiants à organiser leurs sessions d’étude, suivre leur humeur, utiliser le Pomodoro et garder une bonne discipline.",
    role:
      "J’ai développé les écrans principaux avec Flutter, intégré les pages d’authentification, les sessions, le mood tracker, le calendrier et les citations motivantes.",
    result:
      "L’application propose une expérience simple et motivante pour améliorer la productivité des étudiants.",
    features: [
      "Authentification utilisateur",
      "Création de compte",
      "Mot de passe oublié",
      "Gestion des sessions d’étude",
      "Calendrier",
      "Mood tracker",
      "Pomodoro",
      "Classement",
      "Citations motivantes",
      "Centre d’aide",
      "Choix de langue",
      "Ambiance d’étude",
    ],
    images: [],
  },
  {
    title: "Personal Portfolio",
    desc: "Portfolio moderne développé avec React et Vite pour présenter mes compétences, projets, expériences, certifications et parcours académique.",
    tech: "React • Vite • CSS",
    github: "https://github.com/farahbennacer35-arch/Portfolio.project",
    type: "Portfolio",
    status: "Réalisé",
    duration: "Projet personnel",
    objective:
      "Créer un portfolio professionnel pour valoriser mon profil, mon parcours académique, mes expériences, mes compétences techniques, mes projets et mes certifications.",
    role:
      "J’ai réalisé toute l’interface avec React, structuré les sections, ajouté les animations, les projets et une navigation claire.",
    result:
      "Le portfolio permet de présenter mon profil d’une manière professionnelle et moderne.",
    features: [
      "Accueil personnalisé",
      "Présentation personnelle",
      "Compétences techniques",
      "Projets avec détails",
      "Parcours académique",
      "Stages et expériences",
      "Certifications",
      "Contact",
    ],
    images: [],
  },
  {
    title: "Gestion Médicale",
    desc: "Système de gestion médicale permettant de gérer les patients, médecins, consultations et rendez-vous.",
    tech: "Spring Boot • Eureka • API Gateway • Microservices",
    github: "https://github.com/farahbennacer35-arch/GestionMedical",
    type: "Medical App",
    status: "Réalisé",
    duration: "Projet backend",
    objective:
      "Mettre en place une application de gestion médicale basée sur une architecture microservices.",
    role:
      "J’ai participé à la conception backend, à la création des services et à l’intégration avec Eureka et API Gateway.",
    result:
      "Le système facilite la gestion médicale et montre une bonne compréhension de l’architecture microservices.",
    features: [
      "Gestion des patients",
      "Gestion des médecins",
      "Gestion des consultations",
      "Gestion des rendez-vous",
      "Tableau de bord médical",
      "Architecture microservices",
    ],
    images: [
      medicalTbImg,
      patientsImg,
      medecinsImg,
      consultationsImg,
      rendezVousImg,
    ],
  },
  {
    title: "Angry Birds",
    desc: "Jeu 2D inspiré de Angry Birds, développé avec Unity et C#.",
    tech: "Unity • C#",
    github: "https://github.com/farahbennacer35-arch/angry-birds",
    type: "Game",
    status: "Réalisé",
    duration: "Projet jeu 2D",
    objective:
      "Créer un jeu 2D interactif avec des collisions, une logique de tir et des interactions physiques.",
    role:
      "J’ai développé les mécaniques principales du jeu, les collisions et la logique de victoire ou d’échec.",
    result:
      "Le projet m’a permis de pratiquer la programmation orientée jeu avec Unity et C#.",
    features: [
      "Gameplay 2D",
      "Mécanique de tir",
      "Gestion des collisions",
      "Interactions physiques",
      "Détection de victoire",
      "Détection d’échec",
    ],
    images: [],
  },
  {
    title: "Spam Classification",
    desc: "Modèle de machine learning pour la détection des messages spam.",
    tech: "Python • Machine Learning • NLP",
    github: "https://github.com/farahbennacer35-arch/spam-classification",
    type: "IA / Data",
    status: "Réalisé",
    duration: "Projet IA",
    objective:
      "Développer un modèle capable de classifier automatiquement les messages comme spam ou non spam.",
    role:
      "J’ai préparé les données, nettoyé le texte, extrait les caractéristiques et entraîné le modèle.",
    result:
      "Le projet montre l’utilisation du machine learning et du NLP pour résoudre un problème réel.",
    features: [
      "Prétraitement du texte",
      "Nettoyage des données",
      "Classification spam / non spam",
      "Machine Learning",
      "Évaluation du modèle",
    ],
    images: [],
  },
];

function Projects() {
  const [demoImages, setDemoImages] = useState([]);
  const [demoTitle, setDemoTitle] = useState("");
  const [showDemo, setShowDemo] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const openDemo = (project) => {
    setDemoImages(project.images || []);
    setDemoTitle(project.title);
    setShowDemo(true);
  };

  const closeDemo = () => {
    setShowDemo(false);
    setDemoImages([]);
    setDemoTitle("");
  };

  const openDetails = (project) => {
    setSelectedProject(project);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setSelectedProject(null);
    setShowDetails(false);
  };

  return (
    <section className="section projects" id="projects">
      <div className="section-title reveal">
        <h2>Mes projets</h2>
        <p>
          Une sélection de projets web, mobile, backend, IA et projets
          académiques.
        </p>
      </div>

      <div className="pfe-card reveal">
        <div className="pfe-top">
          <span className="pfe-label">Projet de fin d’études</span>
        </div>

        <h3>{pfeProject.title}</h3>
        <p>{pfeProject.desc}</p>

        <div className="pfe-tags">
          <span>Angular</span>
          <span>Laravel</span>
          <span>Keycloak</span>
          <span>Power BI</span>
          <span>Python</span>
          <span>IA</span>
        </div>

        <div className="project-actions pfe-actions">
          <a href={pfeProject.github} target="_blank" rel="noreferrer">
            Code
          </a>

          <button
            type="button"
            className="more-btn"
            onClick={() => openDetails(pfeProject)}
          >
            Details
          </button>

          <button
            type="button"
            className="demo"
            onClick={() => openDemo(pfeProject)}
          >
            Demo
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card reveal" key={index}>
            <div className="project-head">
              <span className="project-type">{project.type}</span>
              <span className="project-status">{project.status}</span>
            </div>

            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <p>{project.desc}</p>

            <div className="project-actions">
              <a href={project.github} target="_blank" rel="noreferrer">
                Code
              </a>

              <button
                type="button"
                className="more-btn"
                onClick={() => openDetails(project)}
              >
                Details
              </button>

              {project.images.length > 0 ? (
                <button
                  type="button"
                  className="demo"
                  onClick={() => openDemo(project)}
                >
                  Demo
                </button>
              ) : (
                <button type="button" className="demo disabled-demo" disabled>
                  Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {showDetails && selectedProject && (
        <div className="details-modal" onClick={closeDetails}>
          <div className="details-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="details-close"
              onClick={closeDetails}
            >
              ×
            </button>

            <div className="details-header">
              <span>{selectedProject.type}</span>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.tech}</p>
            </div>

            <div className="details-content">
              <div className="detail-block">
                <h4>Objectif du projet</h4>
                <p>{selectedProject.objective}</p>
              </div>

              <div className="detail-block">
                <h4>Mon rôle</h4>
                <p>{selectedProject.role}</p>
              </div>

              <div className="detail-block">
                <h4>Résultat</h4>
                <p>{selectedProject.result}</p>
              </div>

              <div className="detail-block">
                <h4>Informations</h4>
                <div className="details-info">
                  <span>Type : {selectedProject.type}</span>
                  <span>Statut : {selectedProject.status}</span>
                  <span>Durée : {selectedProject.duration}</span>
                  <span>Technologies : {selectedProject.tech}</span>
                </div>
              </div>

              <div className="detail-block">
                <h4>Fonctionnalités principales</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="details-footer">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir le code GitHub
                </a>

                {selectedProject.images.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      closeDetails();
                      openDemo(selectedProject);
                    }}
                  >
                    Voir la démo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {showDemo && (
        <div className="demo-modal" onClick={closeDemo}>
          <div className="demo-box" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="demo-close" onClick={closeDemo}>
              ×
            </button>

            <div className="demo-header">
              <span>Project Preview</span>
              <h3>{demoTitle}</h3>
              <p>Quelques captures d’écran du projet.</p>
            </div>

            {demoImages.length > 0 ? (
              <div className="demo-gallery">
                {demoImages.map((img, index) => (
                  <a href={img} target="_blank" rel="noreferrer" key={index}>
                    <img src={img} alt={`${demoTitle} ${index + 1}`} />
                  </a>
                ))}
              </div>
            ) : (
              <p>Aucune capture disponible pour ce projet.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;