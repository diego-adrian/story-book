import { useState } from 'react';
import PropTypes from 'prop-types';

export const Title = ({ text, primary }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      Counter: {count}
      <h1 style={{ color: primary ? 'blue' : 'lightblue' }}>{text}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
}

Title.defaultProps = { 
  text: 'Demo',
  primary: true
}