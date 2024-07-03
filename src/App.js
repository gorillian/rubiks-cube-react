import "./styles/app.scss";

import RubiksView from "./components/rubiks/RubiksView";

function App() {
  return (
    <div className="app-container">
      <div>React Rubiks Cube Display</div>
      <RubiksView />
    </div>
  );
}

export default App;
