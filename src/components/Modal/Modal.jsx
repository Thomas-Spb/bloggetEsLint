import cls from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
// import { Comments } from '../Main/List/Post/Comments/Comments';
import { FormComment } from '../Main/List/Post/FormComment/FormComment';
import { useCommentsData } from '../../hooks/useCommentsData';


export const Modal = ({ id, closeModal }) => {
  const overlayRef = useRef(null);
  const {commentsData, loading} = useCommentsData(id);
  // const loading = true;
  // console.log(commentsData);
  //   useEffect(() => {
  //     const [commentsData, isLoading] = useCommentsData(id);
  //   }, []);

  // let title = 'title загрузка...';
  // let author = 'author загрузка...';
  // let markdown = 'markdown загрузка...';
  let title, author, markdown = ''
  
  let test ='' 
  test = commentsData?.data[1].data.children
  console.log(commentsData)
  // let author = commentsData.data[0].data.children[0].data.author;
  // data[0].data.children[0].data.author
 
  let comments = [1 , 2 , 3];
   if (commentsData?.length > 0) {
    title = commentsData?.data[0].data.children[0].data.title;
    author = commentsData?.data[0].data.children[0].data.author
    markdown = commentsData?.data[0].data.children[0].data.selftext
  //   comments = commentsData?.data[1].data.children
  }
  //   const closeRef = useRef(null);
  // console.log(commentsData[0]);
  // console.log(title, author, markdown)
  // console.log(`comments ${comments}`);
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
        <h2 className={cls.title}>{title}</h2>
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
            {markdown}
          </Markdown>
        </div>
        {!loading && <FormComment />}
        <p className={cls.author}>{author}</p>
        {/* {!loading && comments.length > 0 && <Comments comments={comments} />} */}
        {loading && <p>Загружаем данные</p>}
        {!loading && comments.length === 0 && <p>Нет комментариев</p>}
        <button className={cls.close} onClick={() => closeModal()}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  id: PropTypes.string,
};

// import PropTypes from 'prop-types';

// import { useCommentsData } from '../../hooks/useCommentsData';

// export const Modal = ({ id }) => {
//   const data = useCommentsData(id);
//   console.log(data);
// };

// Modal.propTypes = {
//   id: PropTypes.string,
// };
