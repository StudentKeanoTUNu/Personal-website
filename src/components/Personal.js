import React from 'react';

function Personal() {
  return (
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
  );
}

export default Personal;

