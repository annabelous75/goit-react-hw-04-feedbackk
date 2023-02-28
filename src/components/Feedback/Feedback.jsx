import PropTypes from 'prop-types';
import './Feedback.module.css';

export const Feedback = ({ options, updateFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={updateFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.array,
  updateFeedback: PropTypes.func,
};
