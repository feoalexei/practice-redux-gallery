import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/gallery">Gallery</Link>
        <Link to="/mygallery">My Gallery</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
