import styled, { Styled } from "styled-components";

export const ArchivesContainer = styled.div`
    padding: 5%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        gap: 1rem;
    }


`

export const HeaderArquivos = styled.header`
justify-content: left;
h1{
    font-size: 2.5rem;
}
`

export const BotaoIcone = styled.button`
  background: #8079D8;
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: right;

  svg{
    color: #FFFFFF;
  }

  &:hover {
    background: #534F8D;
  }
`

export const FileContainer = styled.div`

`