import { RotatingLines } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.Container}>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
