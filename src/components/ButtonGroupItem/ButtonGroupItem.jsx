import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../ui/button-group';
/**
 * @uxpindocurl https://www.alignui.com/docs/ui/button-group
 * @uxpindescription Button groups are a set of buttons sticked together in a horizontal line.
 */
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
