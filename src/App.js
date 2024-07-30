import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Games from './page/Games/Games';
import GameDetail from './page/GameDetail/GameDetail';
function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/games/:gameslug" element={<GameDetail />} />
      </Routes>
    </div>
  );
}

export default App;
