import styled, { css } from "styled-components";

export const StatusButtonContainer = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 8px;
`

export const StatusButton = styled.TouchableHighlight.attrs({
    underlayColor: '#607EC5'
})`
    border: 2px solid #607EC5;
    border-radius: 5px;
    width: 100px;
    height: 39px;

    ${props => props.clickButton ? css`
        background-color: #607EC5;
    ` :  css`
    background-color: #FBFBFB;
    `}
    align-items: center;
    justify-content: center;
`

export const StatusButtonText = styled.Text`
    font-size: 12px;
    font-family: 'MontserratAlternates_600SemiBold';

    ${props => props.clickButton ? css`
        color: white;
    ` :  css`
    color: #607EC5;
    `}
`