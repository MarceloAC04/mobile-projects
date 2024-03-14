import styled from "styled-components";

export const ViewFlip = styled.View`
    flex: 1;
    background-color: transparent;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`
export const ViewButton = styled.View`
    background-color: transparent;
    flex-direction: row;
    justify-content: flex-end;
`

export const ButtonFlip = styled.TouchableOpacity`
    padding: 15px;
`

export const ButtonCapture = styled(ButtonFlip)`
    margin: 10px;
    padding: 20px;
    border-radius: 15px;
    background-color: #121212;
    justify-content: center;
    align-items: center;
`
export const ButtonExit = styled(ButtonCapture)`
    padding: 20px;
    border-radius: 15px;
    background-color: #121212;
    justify-content: center;
    align-items: center;
`

export const TextFlip = styled.Text`
    font-size: 20px;
    color: #fff;
    margin-bottom: 20px;
`
