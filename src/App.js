import "./App.css";
import free from './assets/free.png'
import { MdDone } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <div className="Cards">
        <div className="Free">
          <img src={free} alt="free-plan" />
          <h3>Starter</h3>
          <h2>Free</h2>
          <h4>per month</h4>
          <ul>
            <li>
              <MdDone /> Full courses library
            </li>
            <li>
              <MdDone /> A new daily meditation
            </li>
            <li>
              <MdDone /> Access to the meditation guru
            </li>
            <li className="disabled">
              <MdDone /> Sleep podcasts and exercises
            </li>
            <li className="disabled">
              <MdDone /> Mindfulness exercises
            </li>
            <li className="disabled">
              <MdDone /> Guided meditations
            </li>
            <li className="disabled">
              <MdDone /> Cooking recipes
            </li>
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
