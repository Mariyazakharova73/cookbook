import React from 'react';

function Sort({ sortType, onChangeSort }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const sortRef = React.useRef(); 

  const list = [
    { name: 'алфавиту (а-я)', sortProperty: '-title' },
    { name: 'алфавиту (я-а)', sortProperty: 'title' },
  ];

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const onClickListItem = (index) => {
    onChangeSort(index);
    setIsVisible(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (evt) => {
      if (!evt.path.includes(sortRef.current)) {
        setIsVisible(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <div className="sort" ref={sortRef}>
      <p>
        Сортировка по:{' '}
        <span onClick={() => handleClick()} className="sort__text">
          {sortType.name}
        </span>
      </p>

      <div className={`sort__popup ${isVisible ? 'sort__popup_opened' : ''}`}>
        <ul className="sort__list">
          {list.map((obj, index) => (
            <li
              onClick={() => onClickListItem(obj)}
              className={`sort__item ${
                sortType.sortProperty === obj.sortProperty ? 'sort__item_active' : ''
              }`}
              key={index}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sort;
