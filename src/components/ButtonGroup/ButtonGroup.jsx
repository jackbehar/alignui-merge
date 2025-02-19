import React from 'react';
import PropTypes from 'prop-types';
import { Root } from '../ui/button-group';
/**
 * @uxpindocurl https://www.alignui.com/docs/ui/button-group
 * @uxpindescription Button groups are a set of buttons sticked together in a horizontal line.
 */
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
