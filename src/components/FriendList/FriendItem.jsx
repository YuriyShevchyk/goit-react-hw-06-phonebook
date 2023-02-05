import PropTypes from 'prop-types';

import { StyledFrendItem } from './FriendItem.styled';

export const FriendItem = ({ children }) => {
  return <StyledFrendItem>{children}</StyledFrendItem>;
};

FriendItem.propTypes = {
  children: PropTypes.node.isRequired,
};