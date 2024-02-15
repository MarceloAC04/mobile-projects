import styled from "styled-components";

export const StatusButtonContainer = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 8px;
`

export const StatusButton = styled.TouchableOpacity`
    border: 2px solid #607EC5;
    border-radius: 5px;
    width: 100px;
    height: 39px;
    background-color: #FBFBFB;
    align-items: center;
    justify-content: center;
`

export const StatusButtonText = styled.Text`
    color: #607EC5;
    font-size: 12px;
    font-family: 'MontserratAlternates_600SemiBold'
`