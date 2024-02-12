import styled from "styled-components";

export const UserProfileInputContainer = styled.View`
width: 90%;
margin-top: 19px;
gap: 10px;
`

export const UserProfileInput = styled.TextInput.attrs({
    placeholderTextColor: '#33303E'
})`
    font-family: 'MontserratAlternates_500Medium';
    color: #33303E;
    background-color: #F5F3F3;
    /* border: 2px solid black; */
    height: 53px;
    border-radius: 5px;
    padding: 16px;
    font-size: 14px;
`

export const UserProfileTextArea = styled(UserProfileInput).attrs({
    placeholderTextColor: '#33303E'
})`
    font-family: 'MontserratAlternates_600SemiBold';
    height: 120px;
    width: 90%;
    text-align: justify;
    font-size: 14px;
    vertical-align: top;
`

export const UserProfileTextAreaEdition = styled(UserProfileInput).attrs({
    placeholderTextColor: '#34898F'
})`
    font-family: 'MontserratAlternates_600SemiBold';
    color: #34898F;
    background-color: transparent;
    border: 2px solid #49b3ba;
    height: 120px;
    width: 90%;
    vertical-align: top;
    
`

export const UserProfileInputEdition = styled(UserProfileTextAreaEdition).attrs({
    placeholderTextColor: '#34898F'
})`
    height: 53px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #34898F;
    background-color: transparent;
    border: 2px solid #49b3ba;
    vertical-align: middle;
`

export const UserProfileInputContainerRow = styled.View`
    flex-direction: row;
    width: 90%;
`
export const UserProfileInputContainerAddress = styled(UserProfileInputContainer)`
    width: 55%;
`

export const UserProfileInputAddress = styled(UserProfileInput)`
    width: 80%;
`