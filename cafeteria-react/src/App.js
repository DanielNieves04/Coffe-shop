import {ComponentHead} from './Components/ComponentHead';
import {ComponentCarousel} from './Components/ComponentCarousel';
import {ComponentMenu} from './Components/ComponentMenu';
import {ComponentCards} from './Components/ComponentCards';
import './App.css';


function App() {
  return (
    <div >
      <ComponentHead/>
      <ComponentCarousel/>
      <ComponentMenu/>
      <ComponentCards/>
    </div>
  );
}

export default App;
