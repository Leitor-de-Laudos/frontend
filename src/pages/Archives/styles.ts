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

padding: 5%;

h1{
    font-size: 2.5rem;
    color: #0e0d18;
    margin-bottom: 1rem;
}
`
export const GridArquivos = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 30px;
    width: 100%;
    padding: 3rem;
`;

export const CardArquivo = styled.div`
  background: #8079D8;
  border: 15px solid #DDDAFF;
  border-radius: 30px;
  padding: 52px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    right: -4px;
    bottom: -4px;
    background: rgba(108, 101, 255, 0.2);
    border-radius: 20px;
    z-index: -1;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconeArquivo = styled.div`
  svg {
    width: 56px;
    height: 56px;
    color: #fff;
  }
  margin-bottom: 8px;
`;

export const LabelArquivo = styled.span`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.2;
`;
