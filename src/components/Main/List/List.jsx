import cls from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = [
    {
      thumbnail: '',
      title: 'Title',
      author: 'NickName',
      ups: 24,
      date: '2022-02-24T09:45:00.00Z',
      id: '567',
    },
    {
      thumbnail: '',
      title: 'Title1',
      author: 'NickName1',
      ups: 44,
      date: '2022-02-24T09:45:00.00Z',
      id: '23',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'NickName2',
      ups: 34,
      date: '2022-02-24T09:45:00.00Z',
      id: '36',
    },
  ];
  return (
    <ul className={cls.list}>
      {postData.map(postData => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
