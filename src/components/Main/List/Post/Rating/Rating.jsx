import cls from './Rating.module.css';
import PropTypes from 'prop-types';

export const Rating = ({ ups }) => {
  console.log(ups);
  return (
    <div className={cls.rating}>
      <button className={cls.up} aria-label="Повысить рейтинг" />
      <p className={cls.ups}>{ups}</p>
      <button className={cls.down} aria-label="Понизить рейтинг" />
    </div>
  );
};

Rating.propTypes = {
  ups: PropTypes.number,
};
