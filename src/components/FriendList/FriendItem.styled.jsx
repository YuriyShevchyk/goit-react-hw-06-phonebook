import styled from 'styled-components';

export const StyledFrendItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const FriendDescription = styled.p`
  color: '#2a2a2a';
  font-size: 20px;
`;