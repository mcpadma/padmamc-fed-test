import logo from "./logo.svg";
import "./App.css";

import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <div className="container">
        <UserCard></UserCard>
      </div>

      {/* </header> */}
    </div>
  );
}

export default App;
