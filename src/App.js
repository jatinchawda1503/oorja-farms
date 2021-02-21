import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navigation';
import './external/js/function.js'
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import Home from './pages'

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} />
      </Switch>
      <Switch>
      <Route path="/" component={Home} />
      </Switch>
      <Switch>
      <Route path="/" component={Home} />
      </Switch>
      <Switch>
      <Route path="/" component={Home} />
      </Switch>
      <Switch>
      <Route path="/" component={Home} exact />
      </Switch>

    </Router>
    </>
  );
}

export default App;
