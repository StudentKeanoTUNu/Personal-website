import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Keano Oliver Collins</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#personal" className="nav-link">Personal</a>
            </li>
            <li className="nav-item">
              <a href="#work" className="nav-link">Work</a>
            </li>
            <li className="nav-item">
              <a href="#education" className="nav-link">Education</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="welcome-container">
        <div className="welcome-content">
          <h1 className="welcome-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Keano Oliver Collins</span>
          </h1>
          <p className="welcome-subtitle">
            Welcome to my personal space
          </p>
          <div className="welcome-divider"></div>
        </div>
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* Personal Section */}
      <section id="personal" className="section personal-section">
        <div className="section-container">
          <h2 className="section-title">Personal</h2>
          <div className="section-content">
            <div className="info-card">
              <div className="card-icon">🎾</div>
              <h3 className="card-title">Tennis Player</h3>
              <p className="card-text">
                I'm an avid tennis player with a passion for the game. 
                When I step onto the court, I bring my A-game and always strive to improve.
              </p>
              <div className="highlight-box">
                <p className="highlight-text">
                  <strong>Fun Fact:</strong> I'm definitely a better player than Marek! 😎
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
