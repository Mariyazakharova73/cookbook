import React from 'react';
import Search from './Search';
import CardList from './CardList';
import Sort from './Sort';
import axios from 'axios';

function Home() {
  const [sortType, setSortType] = React.useState({
    name: 'алфавиту (а-я)',
    sortProperty: '-title',
  });
  const [arr, setArr] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  const getInfo = async () => {
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    setLoading(true);
    try {
      const res = await axios.get(
        `https://635add296f97ae73a6387aaa.mockapi.io/items?&sortBy=${sortBy}&order=${order}${search}`
      );
      setArr(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getInfo();
  }, [sortType.sortProperty, searchValue]);

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Sort sortType={sortType} onChangeSort={(i) => setSortType(i)} />
      <CardList arr={arr} loading={loading} />
    </>
  );
}

export default Home;
