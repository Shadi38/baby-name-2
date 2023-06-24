
import './App.css';
import Child from './Child';
import babyNames from "./babyNamesData.json";
import Search from './Search';
import BoyButton from './BoyButton';
import GirlButton from './GirlButton';
import AllButton from './AllButton';

function App() {
  return (
    <div className="App">
      <div className='headerDiv'>
        <Search names={babyNames} />
        <BoyButton names={babyNames} /> 
        <GirlButton names={babyNames} />
        <AllButton names={babyNames} />
      </div>
      <Child names={babyNames} />
    </div>
  );
}

export default App;
