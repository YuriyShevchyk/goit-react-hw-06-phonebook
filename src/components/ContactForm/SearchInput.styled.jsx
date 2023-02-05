import styled from 'styled-components';
import { Field } from 'formik';

export const SearchInput = styled.input`
  width: 300px;

  font-size: 14px;
  padding: 4px;

  :focus {
    border-color: 'lightblue';
    outline: none;
  }
`;

export const Input = styled(Field)`
  width: 300px;

  font-size: 20px;
  padding: 8px;

  :focus {
    border-color: #8bf093;
    outline: none;
  }
`;

export const Error = styled.div`
  color: 'orangered';
  font-size: 14px;
`;