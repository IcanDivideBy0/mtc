import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavList({ items, ...props }) {
  return (
    <ul {...props}>
      {items.map((item, idx) => (
        <StyledNavListItem key={idx} {...item} />
      ))}
    </ul>
  );
}

function NavListItem({ text, items, className, ...props }) {
  return (
    <li className={className}>
      <NavLink className="nav-link" {...props}>
        {text}
      </NavLink>

      {items && <StyledNavList items={items} />}
    </li>
  );
}

const itemPropTypes = {
  text: PropTypes.node,
  // eslint-disable-next-line react/forbid-foreign-prop-types
  ...NavLink.propTypes,
};

const itemsPropType = PropTypes.arrayOf(PropTypes.shape(itemPropTypes));

itemPropTypes.items = itemsPropType;

NavList.propTypes = {
  items: itemsPropType.isRequired,
};

NavListItem.propTypes = itemPropTypes;

const StyledNavList = styled(NavList)`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledNavListItem = styled(NavListItem)``;

StyledNavList.Item = StyledNavListItem;

export default StyledNavList;
