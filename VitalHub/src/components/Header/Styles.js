import styled from "styled-components";


export const HeaderContainer = styled.View`
    background-color: #60BFC5;
    border-radius: 0px 0px 15px 15px;
    width: 100%;
    height: 144px;
    border-radius: 0px 0px 15px 15px;
`

export const HeaderContent = styled.SafeAreaView`
    margin-top: 45px;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
`

export const HeaderUserProfile = styled.View`
    flex-direction: row;
    width: 55%;
    gap: 10px;
`

export const HeaderUserProfileText = styled(HeaderUserProfile)`
    gap: 3px;
    flex-direction: column;
    align-items: flex-start;
`