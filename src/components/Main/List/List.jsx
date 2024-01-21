import { usePosts } from '../../../hooks/usePosts';
import cls from './List.module.css';
import Post from './Post';

export const List = () => {
  const [posts, loading] = usePosts();
  //   console.log(posts);
  const postsData = posts?.data?.children;

  return (
    <>
      {loading ? (
        <h1>Загрузка постов...</h1>
      ) : (
        <ul className={cls.list}>
          {postsData?.map(postData => (
            <Post key={postData.data.id} postData={postData.data} />
          ))}
        </ul>
      )}
    </>
  );
};
