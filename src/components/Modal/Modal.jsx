import cls from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';

export const Modal = ({ title, author, markdown }) => {
  console.log(markdown);
  return ReactDOM.createPortal(
    <div className={cls.overlay}>
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
        <p className={cls.author}>{author}</p>
        <button className={cls.close}>
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
};
