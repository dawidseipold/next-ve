import Avatar from '../components/common/Avatar/Avatar';
import { test } from './test.css';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className={test}>Hello World!</div>
      <Avatar
        src="https://images.pexels.com/photos/12610341/pexels-photo-12610341.jpeg"
        size={32}
      />
    </>
  );
};

export default Home;
