const handleLike = (obj, x) => {
  if (obj.likes.some((i) => i.userId === '1111111')) {
    const newArr = obj.likes.filter((obj) => obj.userId !== '1111111');
    const newCard = { ...obj, likes: newArr };
    x(newCard);
  } else {
    const newArr = [{ userId: '1111111' }, ...obj.likes];
    const newCard = { ...obj, likes: newArr };
    x(newCard);
  }
};

export default handleLike;