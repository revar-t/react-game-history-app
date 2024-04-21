import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
