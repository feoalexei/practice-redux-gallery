import { Routes, Route, Navigate } from 'react-router-dom';
import Gallery from 'pages/Gallery';
import MyGallery from 'pages/MyGallery';
import Modal from 'pages/Modal';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/gallery" />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="mygallery" element={<MyGallery />} />
        <Route path="modal" element={<Modal />} />
      </Route>
    </Routes>
  );
};
export default Router;
