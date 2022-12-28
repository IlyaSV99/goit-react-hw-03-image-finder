import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ url, tags, largeImageURL, onClick }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => onClick({ largeImageURL, tags })}
    >
      <img className={css['ImageGalleryItem-image']} src={url} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
