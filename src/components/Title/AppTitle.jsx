import PropTypes from 'prop-types';
import { StyledTitle } from './AppTitle.styled';

export const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};