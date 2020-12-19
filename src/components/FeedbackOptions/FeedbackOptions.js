import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({
  options,
  onLeaveFeedback,
  getNameOfItem,
}) {
  const namesOfItems = Object.keys(options);

  return (
    <ul className={s.list}>
      {namesOfItems.map(item => (
        <li key={item}>
          <button onClick={() => onLeaveFeedback(item)} className={s.button}>
            {getNameOfItem(item)}{' '}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  getNameOfItem: PropTypes.func.isRequired,
};
