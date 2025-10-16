import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
