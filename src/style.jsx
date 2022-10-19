import styled from 'styled-components'

export const Overlay = styled.div`

    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`

    background-color: whitesmoke;
    border-radius: 20px;

    padding: 10px;
    
    box-shadow: 1px 1px 8px 3px rgba(0,0,0,0.55);

`;

export const Header = styled.header`

    display: flex;
    justify-content: center;

`;

export const Content = styled.div`

    display: flex;
    justify-content: center;

`;

export const Campo = styled.input.attrs({
    type: 'text',
    value: 'Submit'
})`
    width: 100%;
    
    padding: 2rem;
    background: #E6E6E6;
    border-radius: 1rem;
    border: none;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);
    font-size: 20px;
`;