import cls from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'NickName',
    ups: 24,
    date: '2022-02-24T09:45:00.00Z',
  };
  return (
    <ul className={cls.list}>
      <Post postData={postData} />
      <Post postData={postData} />
      <Post postData={postData} />
    </ul>
  );
};
