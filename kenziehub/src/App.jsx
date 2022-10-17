import Routes from "./routes";
import Global from "./styles/global";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import GlobalLoading from "./components/GlobalLoading";
import { ToastContainer } from "react-toastify";
import { TechsProvider } from "./contexts/TechsContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <TechsProvider>
          <Global />
          <GlobalLoading>
            <Routes />
          </GlobalLoading>
        </TechsProvider>
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
