import "./App.css";
import CakeComponent from "./components/CakeComponent";
import CakeComponentHooks from "./components/CakeComponentHooks";
import IcecreamComponent from "./components/IcecreamComponent";
import IcecreamComponentHooks from "./components/IcecreamComponentHooks";
import ItemComponent from "./components/ItemComponent";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <div className="App">
      {/* <CakeComponent /> */}
      {/* <IcecreamComponentHooks /> */}
      {/* <IcecreamComponent /> */}
      <ItemComponent cake />
      <UserContainer />
    </div>
  );
}

export default App;
