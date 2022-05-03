import './App.css';

import Navbar from './comps/Navbar/Navbar'
import Navpills from './comps/Navpills/Navpills'
import Sidebar from './comps/Sidebar/Sidebar'
import FooterNav from './comps/FooterNav/FoooterNav'
import Home from './pages/Home/Home';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Navpills />
      <Home />
      <FooterNav />
    </div>
  );
}

export default App;
