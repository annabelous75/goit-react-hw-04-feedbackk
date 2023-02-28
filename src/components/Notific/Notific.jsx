import PropTypes from 'prop-types';
import css from './Notific.module.css';

export const Notific = () => {
  return <p className={css.p}>There is no feedback</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
