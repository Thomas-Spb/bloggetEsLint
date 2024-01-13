import { useContext } from 'react';
import cls from './List.module.css';
import Post from './Post';
import { postsContext } from '../../../context/postsContext';

export const List = () => {
  const { posts } = useContext(postsContext);
  const postsData = posts?.data?.children;
  return (
    <ul className={cls.list}>
      {postsData?.map(postData => (
        <Post key={postData.data.id} postData={postData.data} />
      ))}
    </ul>
  );
};
