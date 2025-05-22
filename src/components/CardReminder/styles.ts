import { styled } from "styled-components";

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 80px 1fr; /* largura fixa para a coluna da data */
  background-color: ${({ theme }) => theme["purple-light"]};
  border-radius: 14px;
  padding: 1.125rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 380px; /* controle da largura máxima */
  min-width: 380px;
  box-sizing: border-box;
  gap: 0.5rem;
`;


export const DataColuna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`

export const CirculoData = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.125rem;
  align-items: center;
  color: ${({theme}) => theme.white};
  background-color: ${({theme}) => theme.purple};
  text-align: center;

  & span {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1;
  }

  & small {
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1;
  }
`


export const ColunaDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.purple};
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;


export const LineItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.3rem;
  gap: 1rem;

  .text {
    color: #fff;
    font-size: 0.9rem;
    white-space: pre-wrap;
    word-break: break-word;
    flex: 1;
  }

  .time {
    color: #fff;
    font-size: 0.9rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
`;


