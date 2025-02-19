import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../ui/button-group';

export default function ButtonGroupItem(props) {
  return <Item {...props} />;
}

ButtonGroupItem.propTypes = {
  /**
   * Content of the component.
   */
  children: PropTypes.node,
  /**
   * Determines whether the component should behave as a child element.
   */
  asChild: PropTypes.bool,

  /**
   * Additional Classes.
   */
  className: PropTypes.object,
};
