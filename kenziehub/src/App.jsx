import Routes from "./routes";
import Global from "./styles/global";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import GlobalLoading from "./components/GlobalLoading";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Global />
        <GlobalLoading>
          <Routes />
        </GlobalLoading>
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
