import styled from "styled-components";


export const ContainerMenu = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0  auto;
  margin-top: 25%;
  row-gap: 1.25rem;
  
  & > div{
    text-align: center;
    margin: 0  auto;

    & > p {
      margin-top: .5rem;
      font-weight: 500;
    }
    
    & > button{
      max-width: 86px;
      background-color: ${({theme}) => theme["purple-medium"]};
      color: ${({theme}) => theme["white-purple"]};
      outline: none;
      border: none;
      padding: 1rem;
      border-radius: 15px;
    }
  }
`