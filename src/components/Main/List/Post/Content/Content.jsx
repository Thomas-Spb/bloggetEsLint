import cls from './Content.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';

export const Content = ({ title, author }) => (
  <div className={cls.content}>
    <Text As="h2" className={cls.title}>
      <Text As="a" size={18} tsize={24} className={cls.linkPost} href="#post">
        {title}
      </Text>
    </Text>
    <Text As="a" size={12} tsize={14} color="orange" className={cls.linkAuthor} href="#author">
      {author}
    </Text>
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
