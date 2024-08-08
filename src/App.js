import './App.css';
import { Route, Routes } from 'react-router-dom';
import Games from './page/Games/Games';
import GameDetail from './page/GameDetail/GameDetail';
import { useState } from 'react';
function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    let slug = searchTerm.split(' ').join('-').toLowerCase();
    setResults([]);

  }

  return (
    <div className="App">
      <nav>
        <h2>게임 사전</h2>
        <form onSubmit={onSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange} />
          <button type="submit">search</button>
        </form>
      </nav>
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/games/:gameSlug" element={<GameDetail />} />
      </Routes>
    </div>
  );
}

export default App;
