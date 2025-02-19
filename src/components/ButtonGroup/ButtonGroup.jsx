import React from 'react';
import PropTypes from 'prop-types';
import { Root } from '../ui/button-group';

export default function ButtonGroup(props) {
  return <Root {...props} />;
}

ButtonGroup.propTypes = {
  /**
   * Content of the component.
   */
  children: PropTypes.node,
  /**
   * Defines the size of the component.
   */
  size: PropTypes.oneOf(['medium', 'small', 'xsmall', 'xxsmall']),

  /**
   * Determines whether the component should behave as a child element.
   */
  asChild: PropTypes.bool,

  /**
   * Additional Classes.
   */
  className: PropTypes.object,
};
