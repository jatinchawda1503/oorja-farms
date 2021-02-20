import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navigation';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route>
      </Route>
    </Switch>

    </Router>
    </>
  );
}

export default App;
