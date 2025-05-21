import { styled } from "styled-components";

export const ContainerReminder = styled.div`
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

export const HeaderLembretes = styled.header`
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

//cartoes aqui
export const CartaoLembrete = styled.div`
display: flex;
align-items: flex-start;
background-color: #DDDAFF;
border-radius: 14px;
padding: 38px;
margin-bottom: 16px;
`

export const DataColuna = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-right: 26px;
`

export const CirculoData = styled.div`
width: 68px;
height: 68px;
border-radius: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #FFFFFF;
background-color: #726CC0;

span {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1;
  }
  small {
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1;
  }
`

export const BotaoChecar = styled.button<{ done: boolean }>`
  margin-top: 12px;
  background: ${({ done }) => (done ? "#726CC0" : "transparent")};
  border: 2px solid #726CC0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ColunaDetalhes = styled.div`
  flex: 1;
  background: #726CC0;
  border-radius: 12px;
  padding: 38px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LinhaItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;

  .text {
    color: #fff;
    font-size: 0.9rem;
    padding-right: 5rem;
    white-space: pre-wrap;
  }
  .time {
    color: #fff;
    font-size: 0.9rem;
    font-variant-numeric: tabular-nums;
  }
`;

