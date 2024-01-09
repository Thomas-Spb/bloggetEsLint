import cls from './PostImage.module.css';
// import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const PostImage = ({ title, thumbnail }) => {
  console.log(1);
  return <img className={cls.img} src={thumbnail} alt={title} />;
};

PostImage.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
