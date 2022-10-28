import './../index.css';
import React from 'react';
import Header from './Header';
import Search from './Search';
import CardList from './CardList';
import Sort from './Sort';

function App() {
  const [sortType, setSortType] = React.useState({
    name: 'алфавиту (а-я)', sortProperty: '-title'});
  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Search />
        <Sort sortType={sortType} onChangeSort={(i) => setSortType(i)} />
        <CardList />
      </div>
    </div>
  );
}

export default App;
