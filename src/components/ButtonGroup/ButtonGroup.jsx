import React from 'react';
import PropTypes from 'prop-types';
import Root from './Root/Root';
import Item from './Item/Item';
import Icon from './Icon/Icon';
/**
 * @uxpindocurl https://www.alignui.com/docs/ui/button-group
 * @uxpindescription Button groups are a set of buttons sticked together in a horizontal line.
 */
export default function ButtonGroup(props) {
  return <div>Empty Namespace - Do not use</div>;
}

ButtonGroup.Root = Root;
ButtonGroup.Item = Item;
ButtonGroup.Icon = Icon;

ButtonGroup.propTypes = {
  /**
   * Content of the component.
   */
  children: PropTypes.node,
};
