import { useEffect } from 'react';

const Wrapper = ({ children, isOpen, onClose, closeByOverlay }) => {
  const closeByEsc = (evt) => {
    if (evt.key === 'Escape') {
      onClose();
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
    <div
      onClick={closeByOverlay}
      className={`popup  ${isOpen ? 'popup_opened' : ''}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;