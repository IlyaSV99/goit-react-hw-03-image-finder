import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ items, onClick }) => {
  const images = items.map(({ id, webformatURL, tags, largeImageURL }) => (
    <ImageGalleryItem
      key={id}
      url={webformatURL}
      tags={tags}
      onClick={onClick}
      largeImageURL={largeImageURL}
    />
  ));
  return <ul className={css.ImageGallery}>{images}</ul>;
};

ImageGallery.defaultProps = {
  items: [],
};
ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
