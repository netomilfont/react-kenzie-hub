import Routes from "./routes";
import Global from "./styles/global";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([null]);

  return (
    <div className="App">
      <Global />
      <Routes user={user} setUser={setUser} />
    </div>
  );
}

export default App;
