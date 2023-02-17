import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectMyImages } from 'redux/myGallery/myGallery-selectors';

const MyGallery = () => {
  const myImages = useSelector(selectMyImages);
  const location = useLocation();

  return (
    <ul>
      {myImages.map(image => (
        <li key={image.id}>
          <Link to="/modal" state={{ img: image, from: location }}>
            <img src={image.previewURL} alt={image.tags} width="300" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MyGallery;
