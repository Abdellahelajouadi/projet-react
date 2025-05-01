// Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Bienvenue dans le monde des villes</h1>
        <p>Découvrez les plus grandes villes du monde, leur histoire, leur culture, et leur beauté unique.</p>
      </header>

      <section className="home-intro">
        <h2>Pourquoi explorer les villes ?</h2>
        <p>
          Les villes sont les cœurs battants de notre civilisation. Elles racontent notre passé,
          reflètent notre présent et imaginent notre avenir. Chaque ville est une aventure à vivre.
        </p>
      </section>

      <section className="home-benefits">
        <div className="benefit-card">
          <h3>Culture</h3>
          <p>Chaque ville a ses musées, sa musique, son architecture, et sa façon unique de vivre.</p>
        </div>
        <div className="benefit-card">
          <h3>Économie</h3>
          <p>Les villes sont des centres d’innovation, d’emploi et de développement.</p>
        </div>
        <div className="benefit-card">
          <h3>Tourisme</h3>
          <p>Explorer une ville, c’est vivre une nouvelle histoire à chaque coin de rue.</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>Commencez votre voyage urbain dès maintenant !</p>
      </footer>
    </div>
  );
};

export default Home;