import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Typpography from "./pages/Typography";
import Aboutus from "./pages/Aboutus";
import Contacts from "./pages/Contacts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/Contacts" exact component={Contacts} />
          <Route path="/contact" exact component={Typpography} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
