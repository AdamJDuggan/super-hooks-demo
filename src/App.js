// React
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Header from "./components/Header";
import Landing from "./components/Landing";
// import ScrollToTop from "./components/ScrollToTop";

// Hook components
import FirstRender from "./examples/FirstRender";
import InitialFocus from "./examples/InitialFocus";
import WindowWidth from "./examples/WindowWidth";
import ScrollToBottom from "./examples/ScrollToBottom";
import ShowHideElement from "./examples/ShowHideElement";
import StateObject from "./examples/StateObject";
import ScrollWithKeys from "./examples/ScrollWithKeys";
import ToggleInput from "./examples/ToggleInput";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="p-4 ">
        <Router>
          {/* <ScrollToTop /> */}
          <Switch>
            <Route path="/firstRender" component={FirstRender} />
            <Route path="/initialFocus" component={InitialFocus} />
            <Route path="/windowWidth" component={WindowWidth} />
            <Route path="/scrollToBottom" component={ScrollToBottom} />
            <Route path="/showHideElement" component={ShowHideElement} />
            <Route path="/stateObject" component={StateObject} />
            <Route path="/scrollWithKeys" component={ScrollWithKeys} />
            <Route path="/toggleInput" component={ToggleInput} />
            <Route exact path="/" component={Landing} />
            <Route path="*" component={Landing} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
