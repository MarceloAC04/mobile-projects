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
    padding: 16px 16px;
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