import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  addMyImagesAction,
  deleteMyImagesAction,
} from 'redux/myGallery/myGallery-slice';

const Modal = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { img, from } = location.state;

  const handleClick = () => {
    switch (from.pathname) {
      case '/gallery':
        dispatch(addMyImagesAction(img));
        break;
      case '/mygallery':
        dispatch(deleteMyImagesAction(img.id));
        break;
      default:
        break;
    }

    goBack();
  };

  const goBack = () => navigate(from);

  return (
    <div>
      <div>
        <img src={img.largeImageURL} alt={img.tags} />
      </div>
      <button type="button" onClick={goBack}>
        Go Back
      </button>

      <button type="button" onClick={handleClick}>
        {from.pathname === '/gallery' ? 'Save' : 'Delete'}
      </button>
    </div>
  );
};
export default Modal;
