import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar  from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
    <Route path="/" />

    </Switch>
    </Router>
    </>
  );
}

export default App;
