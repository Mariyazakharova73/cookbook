import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsPopupAddOpen, setIsPopupEditOpen } from '../redux/slices/popupSlice';

const Wrapper = ({ children, isOpen }) => {
  const dispatch = useDispatch();

  const closeByOverlay = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      dispatch(setIsPopupAddOpen(false));
      dispatch(setIsPopupEditOpen(false));
    }
  };

  const closeByEsc = (evt) => {
    if (evt.key === 'Escape') {
      dispatch(setIsPopupAddOpen(false));
      dispatch(setIsPopupEditOpen(false));
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', closeByEsc);
    }
    return () => {
      document.removeEventListener('keydown', closeByEsc);
    };
  }, [isOpen]);

  return (
    <div onClick={closeByOverlay} className={`popup  ${isOpen ? 'popup_opened' : ''}`}>
      {children}
    </div>
  );
};

export default Wrapper;
