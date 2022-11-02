const handleLike = (obj, x) => {
  if (obj.likes.some((i) => i.email === 'test12345@yandex.ru')) {
    const newArr = obj.likes.filter((obj) => obj.email !== 'test12345@yandex.ru');
    const newCard = { ...obj, likes: newArr };
    x(newCard);
  } else {
    const newArr = [{ email: 'test12345@yandex.ru' }, ...obj.likes];
    const newCard = { ...obj, likes: newArr };
    x(newCard);
  }
};

export default handleLike;
