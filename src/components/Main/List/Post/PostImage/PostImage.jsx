import cls from './PostImage.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const PostImage = ({ title }) => {
  console.log('1');
  return <img className={cls.img} src={notphoto} alt={title} />;
};

PostImage.propTypes = {
  title: PropTypes.string,
};
