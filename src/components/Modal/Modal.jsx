import cls from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { Comments } from '../Main/List/Post/Comments/Comments';
import { FormComment } from '../Main/List/Post/FormComment/FormComment';
import { useCommentsData } from '../../hooks/useCommentsData';

export const Modal = ({ id, closeModal }) => {
  const overlayRef = useRef(null);
  const [commentsData, isLoading] = useCommentsData(id);
  //   let title = 'title загрузка...';
  //   let author = 'author загрузка...';
  //   let markdown = 'markdown загрузка...';

  let comments = [];
  if (commentsData) {
    // title = commentsData[0]?.title;
    // author = commentsData[0]?.author;
    // markdown = commentsData[0]?.selftext;
    comments = commentsData[1];
  }
  //   const closeRef = useRef(null);
  //   console.log(title);
  console.log(commentsData);
  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  const handleKey = e => {
    if (e.key === 'Escape') closeModal();
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={cls.overlay} ref={overlayRef}>
      <div className={cls.modal}>
        <h2 className={cls.title}>title</h2>
        <div className={cls.content}>
          <Markdown
            options={{
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  },
                },
              },
            }}
          >
            markdown
          </Markdown>
        </div>
        <p className={cls.author}>author</p>
        {!isLoading && <FormComment />}
        {isLoading && <p>Загружаем данные</p>}

        <Comments comments={comments} />

        <button className={cls.close} onClick={() => closeModal()}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
