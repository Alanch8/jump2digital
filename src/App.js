import "./App.css";
import free from './assets/free.png'

function App() {
  return (
    <div className="App">
      <div className="Cards">
        <h1>Price Cards</h1>
        <div className="Free">
          <img src={free} alt="free-plan"/>
          <h3>Starter</h3>
          <h2>Free</h2>
          <h4>per month</h4>
          <ul>
            <li>Full courses library</li>
            <li>A new daily meditation</li>
            <li>Access to the meditation guru</li>
            <li>Sleep podcasts and exercises</li>
            <li>Mindfulness exercises</li>
            <li>Guided meditations</li>
            <li>Cooking recipes</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="Pro">
          <h2>Pro</h2>
        </div>
        <div className="Teams">
          <h2>Teams</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
