import styled from 'styled-components';


export const LayoutContainer = styled.div`
  background-color: ${({ theme }) => theme['white-purple']};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 5%;
`;
