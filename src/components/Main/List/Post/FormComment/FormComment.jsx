import { useContext } from 'react';
import { Text } from '../../../../../UI/Text';
import { authContext } from '../../../../../context/authContext';
import cls from './FormComment.module.css';

export const FormComment = () => {
  const { auth } = useContext(authContext);
  return (
    <form className={cls.form}>
      <Text As="h3" size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea className={cls.textarea}></textarea>
      <button className={cls.btn}>Отправить</button>
    </form>
  );
};
