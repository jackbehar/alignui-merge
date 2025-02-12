import React from 'react';
import PropTypes from 'prop-types';
import ButtonRoot from '../ui/Button/button';

function Button(props) {
  return <ButtonRoot {...props} />;
}

Button.propTypes = {
  children: PropTypes.node,
};

export { Button as default };
