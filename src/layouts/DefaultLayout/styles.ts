import styled from 'styled-components';

export const LayoutContainer = styled.div`
    background-color: ${({theme}) => theme['white-purple']};
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
`;

export const ContainerRound = styled.div`
    position: absolute;
    z-index: 1;
    background-color: ${({theme}) => theme.purple};
    width: 120%;
    height: 240px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
`
