
import './App.css';
import About from './component/About';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Portfolio from './component/Portfolio';
import Stacks from './component/Stacks';

function App() {
  return (
    <div className=" bg-backc ">
    <Navbar/>
    <Hero/>
    <About/>
    <Stacks/>
    <Portfolio/>
    </div>
  );
}

export default App;
