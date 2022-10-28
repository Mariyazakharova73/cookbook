import './../index.css';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import FullInfo from './FullInfo';

function App() {
  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<FullInfo/>}></Route>
          <Route path="*" element={<h2>Страница не найдена 😕</h2>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
