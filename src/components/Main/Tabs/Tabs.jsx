import cls from './Tabs.module.css';

export const Tabs = () => {
  console.log(cls);
  return (
    <ul className={cls.list}>
      <li>
        <a href="/">Главная</a>
      </li>
      <li>
        <a href="/">Просмотренные</a>
      </li>
      <li>
        <a href="/">Сохраненные</a>
      </li>
      <li>
        <a href="/">Мои посты</a>
      </li>
    </ul>
  );
};
