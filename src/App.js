import "./App.css";
import free from "./assets/free.png";
import pro from "./assets/pro.png";
import teams from "./assets/teams.png";
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
          <img src={pro} alt="free-plan" />
          <h3>Pro</h3>
          <h2>$49</h2>
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
            <li>
              <MdDone /> Sleep podcasts and exercises
            </li>
            <li>
              <MdDone /> Mindfulness exercises
            </li>
            <li className="disabled-pro">
              <MdDone /> Guided meditations
            </li>
            <li className="disabled-pro">
              <MdDone /> Cooking recipes
            </li>
          </ul>
          <button>Become a Pro</button>
        </div>
        <div className="Teams">
          <img src={teams} alt="free-plan" />
          <h3>Teams</h3>
          <h2>$99</h2>
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
            <li>
              <MdDone /> Sleep podcasts and exercises
            </li>
            <li>
              <MdDone /> Mindfulness exercises
            </li>
            <li>
              <MdDone /> Guided meditations
            </li>
            <li>
              <MdDone /> Cooking recipes
            </li>
          </ul>
          <button>Get Teams</button>
        </div>
      </div>
    </div>
  );
}

export default App;
