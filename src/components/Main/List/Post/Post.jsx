import cls from './Post.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formatDate';
import Rating from './Rating';
import PostImage from './PostImage';
import { Content } from './Content/Content';
import { ReactComponent as DeleteIcon } from './img/delete.svg';

export const Post = ({ postData }) => {
  const { title, author, ups, date } = postData;
  const handleClick = e => {
    const element = e.target.parentElement.parentElement;
    element.style.display = 'none';
  };
  return (
    <li className={cls.post}>
      <button className={cls.delete} onClick={e => handleClick(e)}>
        <DeleteIcon />
      </button>
      <PostImage title={title} />
      <Content title={title} author={author} />
      <Rating ups={ups} />
      <time className={cls.date} dateTime={date}>
        {formatDate(date)}
      </time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
