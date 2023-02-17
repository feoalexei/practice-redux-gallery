import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectImages } from 'redux/gallery/gallery-selectors';
import { setImagesAction } from 'redux/gallery/gallery-slice';
import { fetchImages } from '../services/image-api';

const Gallery = () => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const getImages = async () => {
      try {
        const { hits } = await fetchImages();
        dispatch(setImagesAction(hits));
      } catch (error) {
        console.log(error.message);
      }
    };
    getImages();
  }, [dispatch]);

  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <Link to="/modal" state={{ img: image, from: location }}>
            <img src={image.previewURL} alt={image.tags} width="300" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Gallery;
