import PropTypes from 'prop-types';
import { StyledInputTitle } from './FormTitle.styled';

export const FormTitle = ({ title, children }) => {
  return (
    <StyledInputTitle>
      {title}
      {children}
    </StyledInputTitle>
  );
};

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
};