
//Components
import Header from "./components/Header";
import Landing from "./components/Landing";

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
        <Landing />
        <ScrollToBottom />
        <ScrollWithKeys />
        <ShowHideElement />
        <WindowWidth />
        <StateObject />
        <ToggleInput />
        <FirstRender />
        <InitialFocus />
      </div>
    </div>
  );
}

export default App;
