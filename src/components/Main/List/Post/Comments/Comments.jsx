import { Text } from '../../../../../UI/Text';
import cls from './Comments.module.css';

export const Comments = () => (
  <ul className={cls.list}>
    <li className={cls.item}>
      <Text As="h3" className={cls.author} size={18} tsize={22}>
        Maks
      </Text>
      <Text As="p" className={cls.comment} size={14} tsize={18}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus
        eaque modi!
      </Text>
      {/* <Date date={date} /> */}
    </li>
  </ul>
);
