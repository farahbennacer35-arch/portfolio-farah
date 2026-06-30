import { useState } from "react";

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

const projects = [
  {
    title: "Event Management System",
    desc: "Application web full-stack pour la gestion des événements, des participants, des employés, des notifications et du tableau de bord.",
    tech: "Laravel • Angular • Node.js",
    github: "https://github.com/yesmine879/event-management-system",
    type: "Web App",
    status: "Réalisé",
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
    desc: "Application mobile développée avec Flutter pour organiser les séances d’étude, suivre la progression et améliorer la concentration.",
    tech: "Flutter • Dart • Mobile App",
    github: "https://github.com/farahbennacer35-arch/study-with-me-flutter-app",
    type: "Mobile App",
    status: "Réalisé",
    images: [],
  },
  {
    title: "Personal Portfolio",
    desc: "Portfolio moderne développé avec React et Vite pour présenter mes compétences, projets, expériences et parcours académique.",
    tech: "React • Vite • CSS",
    github: "https://github.com/farahbennacer35-arch/Portfolio.project",
    type: "Portfolio",
    status: "Réalisé",
    images: [],
  },
  {
    title: "Gestion Médicale",
    desc: "Système de gestion médicale permettant de gérer les patients, médecins, consultations et rendez-vous à travers une architecture backend moderne.",
    tech: "Spring Boot • Eureka • API Gateway • Microservices",
    github: "https://github.com/farahbennacer35-arch/GestionMedical",
    type: "Medical App",
    status: "Réalisé",
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
    desc: "Jeu 2D inspiré de Angry Birds, développé avec Unity et C#, intégrant des mécaniques de jeu, collisions et interactions physiques.",
    tech: "Unity • C#",
    github: "https://github.com/farahbennacer35-arch/angry-birds",
    type: "Game",
    status: "Réalisé",
    images: [],
  },
  {
    title: "Spam Classification",
    desc: "Modèle de machine learning pour la détection des messages spam en utilisant le traitement de texte et des techniques ML.",
    tech: "Python • Machine Learning • NLP",
    github: "https://github.com/farahbennacer35-arch/spam-classification",
    type: "IA / Data",
    status: "Réalisé",
    images: [],
  },
];

function Projects() {
  const [demoImages, setDemoImages] = useState([]);
  const [demoTitle, setDemoTitle] = useState("");
  const [showDemo, setShowDemo] = useState(false);

  const openDemo = (project) => {
    if (!project.images || project.images.length === 0) return;

    setDemoImages(project.images);
    setDemoTitle(project.title);
    setShowDemo(true);
  };

  const closeDemo = () => {
    setShowDemo(false);
    setDemoImages([]);
    setDemoTitle("");
  };

  return (
    <section className="section projects" id="projects">
      <div className="section-title reveal">
        <h2>Mes projets</h2>
        <p>
          Une sélection de projets web, mobile, backend, IA et projets académiques.
        </p>
      </div>

      <div className="pfe-card reveal">
        <div className="pfe-top">
          <span className="pfe-label">Projet de fin d’études</span>
          <span className="pfe-status">En cours</span>
        </div>

        <h3>Plateforme de gestion des réclamations et de la satisfaction client</h3>

        <p>
          Développement d’une plateforme web orientée gestion des réclamations,
          suivi de la satisfaction client, analyse décisionnelle et exploitation
          des retours clients à travers un module d’intelligence artificielle.
        </p>

        <div className="pfe-tags">
          <span>Angular</span>
          <span>Laravel</span>
          <span>Keycloak</span>
          <span>Power BI</span>
          <span>Python</span>
          <span>IA</span>
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

            <div className="demo-gallery">
              {demoImages.map((img, index) => (
                <a href={img} target="_blank" rel="noreferrer" key={index}>
                  <img src={img} alt={`Demo ${index + 1}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;