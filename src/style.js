import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 550px;
    justify-content: space-evenly;
`;

export const Item = styled.div`
    flex: 1 0 90px;
    justify-content: center;
    margin-top: 10px;
    text-align: center;
    color: ${props =>  props.inputColor || "#fff" };
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
`;

export const Button = styled.button`
    background: ${props => props.inputBackgroundColor || "#d1d0cb" };
    border: none;
    border-radius: 4px;
    width: 100px;
    text-align: center;
    height: 40px;
    font-size: 12px;
    color: ${props => props.inputColor || "#fff" };
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    outline: 0;
`;

export const Card = styled.div`
    background: #fff; 
    height: 100%;

    h1 {
        font-size: 15px;
        font-weight: bold;
        color: #a8029a;
    }

    p {
        color: #8a8a8a;
        font-weight: normal;
        font-size: 13px;
        text-align: center;
        margin: 0 auto;
    }

    img {
        width: 60px;
        height: 60px;
    }
`;

export const Text = styled.p`
    display: ${props => props.displayText || "none"}
`;