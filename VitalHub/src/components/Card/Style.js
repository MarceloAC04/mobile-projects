import styled, { css } from "styled-components";

export const CardContainer = styled.View`
    width: 320px;
    height: 102px;
    background-color: #FFF;
    margin-bottom: 12px;
    flex-direction: row;
    align-items: center;
    align-self: center;
    gap: 10px;
    padding: 12px 20px 12px 12px;
    border-radius: 5px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
    position: relative;
`

export const CardContainerText = styled.View`
    height: 90%;
`

export const CardLinkText = styled.Text`
    position: absolute;
    bottom: 12px;
    right: 22px;
    font-size: 12px;
    font-family: 'MontserratAlternates_500Medium';
    color: #C81D25;
`
export const RealizedCardLinkText = styled(CardLinkText)`
    color: #344F8F;
`

export const CardClinicContainer = styled(CardContainer)`
    height: 84px;
    flex-direction: column;
    padding: 18px;
    margin-top: 12px;
    gap: 5px;

    ${props => props.onPress ? css`
        border-color: 2px solid #496BBA;
    ` : css`
    border-color: none;
    `}
`
export const CardClinicContent = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`