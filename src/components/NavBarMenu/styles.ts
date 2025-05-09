import styled from "styled-components";


export const ContainerNavBar = styled.nav`
  position: fixed;
  z-index: 999;
  bottom: 30px;

  background-color: ${({theme}) => theme.purple};
  width: 70%;
  height: 44px;
  border-radius: 24px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  & button{
    outline: none;
    border: none;
    color: ${({theme}) => theme.white};
    background-color: transparent;
    
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > button{
    position: relative;
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme["purple-dark"]};
  }

  & > div{
    display: flex;
    justify-content: center;
    gap: 8px;

    & > a > button{
      height: 40px;
      width: 40px;
    }
  }
`
