
import { BrowserRouter as Router } from "react-router-dom";
import SuccessStories from "./pages/SuccessStories";
import "./App.css";
import TechNews from "./pages/TechNews";

function App() {
  return (
    <Router>
      <TechNews />
      <SuccessStories/>
    </Router>
  );
}

export default App;
