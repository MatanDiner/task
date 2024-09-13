import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import AppProvider from "./contexts/appProvider";
import AppContext from "./contexts/context";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
