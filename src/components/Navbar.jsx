<<<<<<< HEAD
import profile from "../assets/farah.jpg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <div className="logo">FB</div>
        <div>
          <h1>Farah Bennacer</h1>
          <p>🎓 Génie Logiciel & Systèmes d’Information • IIT</p>
        </div>
      </div>

      <nav>
        <a href="#home">Accueil</a>
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
         <a href="#parcours">Parcours</a>
        <a href="#contact">Contact</a>
      </nav>

      <img src={profile} alt="Farah Bennacer" className="nav-img" />
    </header>
  );
}

=======
import profile from "../assets/farah.jpg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <div className="logo">FB</div>
        <div>
          <h1>Farah Bennacer</h1>
          <p>🎓 Génie Logiciel & Systèmes d’Information • IIT</p>
        </div>
      </div>

      <nav>
        <a href="#home">Accueil</a>
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
         <a href="#parcours">Parcours</a>
        <a href="#contact">Contact</a>
      </nav>

      <img src={profile} alt="Farah Bennacer" className="nav-img" />
    </header>
  );
}

>>>>>>> 3ccef11 (initial portfolio)
export default Navbar;