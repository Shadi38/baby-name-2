import "./App.css";
import Child from "./Child";
import babyNames from "./babyNamesData.json";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="headerDiv">
        <Search names={babyNames} />
      </div>
      <Child names={babyNames} />
    </div>
  );
}

export default App;
