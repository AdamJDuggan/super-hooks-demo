// React
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Header from "./components/Header";
import Landing from "./components/Landing";
// Hook components
import FirstRender from "./examples/FirstRender";
import InitialFocus from "./examples/InitialFocus";
import WindowWidth from "./examples/WindowWidth";

function App() {
  return (
    <div className="bg-purple-50">
      <Header />
      <div className="p-4 ">
        <Router>
          <Switch>
            <Route path="/firstRender" component={FirstRender} />
            <Route path="/initialFocus" component={InitialFocus} />
            <Route path="/windowWidth" component={WindowWidth} />
            <Route exact path="/" component={Landing} />
            <Route path="*" component={Landing} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
