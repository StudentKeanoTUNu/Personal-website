import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Personal from './components/Personal';
import Work from './components/Work';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Personal />
      <Work />
      <Education />
    </div>
  );
}

export default App;
