import cls from './Content.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';
import { useState } from 'react';
import { Modal } from '../../../../Modal/Modal';

export const Content = ({ title, author, markdown }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={cls.content}>
      <Text As="h2" className={cls.title}>
        <Text
          As="a"
          size={18}
          tsize={24}
          className={cls.linkPost}
          href="#post"
          onClick={() => {
            console.log('dsdease');
            setIsModalOpen(true);
          }}
        >
          {title}
        </Text>
      </Text>
      <Text
        As="a"
        size={12}
        tsize={14}
        color="orange"
        className={cls.linkAuthor}
        href="#author"
      >
        {author}
      </Text>
      {isModalOpen && (
        <Modal
          markdown={markdown}
          title={title}
          author={author}
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};
