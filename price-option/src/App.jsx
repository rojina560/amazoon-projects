
import './App.css'
import LineChart from './Components/LineChart/LineChart';
import NavBar from './Components/NavBar/NavBar';
import Phones from './Components/Phones/Phones';
import PriceOptions from './Components/PriceOptions/PriceOptions';
// import DaisyNav from './Components/DaisyNav/DaisyNav';

function App() {
  
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      {/* <DaisyNav></DaisyNav> */}
      <LineChart></LineChart>
      <Phones></Phones>
     
    </>
  );
}

export default App
