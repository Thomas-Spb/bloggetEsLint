import { useContext, useRef } from 'react';
import { Text } from '../../../../../UI/Text';
import { authContext } from '../../../../../context/authContext';
import cls from './FormComment.module.css';

export const FormComment = () => {
  const { auth } = useContext(authContext);
  const textareaRef = useRef(null);

  const handleClick = e => {
    e.preventDefault();
    const el = textareaRef.current;
    console.log(el.value);
  };
  return (
    <form className={cls.form}>
      <Text As="h3" size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea className={cls.textarea} ref={textareaRef}></textarea>
      <button className={cls.btn} onClick={handleClick}>
        Отправить
      </button>
    </form>
  );
};
