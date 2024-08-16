import './App.css';
import { Route, Routes } from 'react-router-dom';
import Games from './page/Games/Games';
import GameDetail from './page/GameDetail/GameDetail';
import Home from './page/Home/Home';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Creators from './page/Creators/Creators';
import Stores from './page/Stores/Stores';
import StoreDetail from './page/StoreDetail/StoreDetail';
function App() {


  return (
    <div className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/stores/:storeSlug" element={<StoreDetail />} />
        <Route path="/games/:gameSlug" element={<GameDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
