import PropTypes from 'prop-types';
import css from 'components/Button/Button.module.css';

export const Button = ({ loadMore }) => {
  return (
    <div className={css.Container}>
      <button type="button" className={css.Button} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
