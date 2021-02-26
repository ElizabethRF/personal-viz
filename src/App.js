import sun from './sun.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sun} className="App-logo" alt="logo" />
        <p>
          Hello visualization world!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/erofa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on Linkedin 
        </a>
      </header>
    </div>
  );
}

export default App;
