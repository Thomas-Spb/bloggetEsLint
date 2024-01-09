import { useContext } from 'react';
import cls from './List.module.css';
import Post from './Post';
import { postsContext } from '../../../context/postsContext';

export const List = () => {
  //   const postData = [
  //     {
  //       thumbnail: '',
  //       title: 'Title',
  //       author: 'NickName',
  //       ups: 24,
  //       date: '2022-02-24T09:45:00.00Z',
  //       id: '567',
  //     },
  //     {
  //       thumbnail: '',
  //       title: 'Title1',
  //       author: 'NickName1',
  //       ups: 44,
  //       date: '2022-02-24T09:45:00.00Z',
  //       id: '23',
  //     },
  //     {
  //       thumbnail: '',
  //       title: 'Title2',
  //       author: 'NickName2',
  //       ups: 34,
  //       date: '2022-02-24T09:45:00.00Z',
  //       id: '36',
  //     },
  //   ];

  const { posts } = useContext(postsContext);
  const postsData = posts?.data?.children;
  console.log(posts);
  return (
    <ul className={cls.list}>
      {postsData?.map(postData => (
        <Post key={postData.data.id} postData={postData.data} />
      ))}
    </ul>
  );
};
