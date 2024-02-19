import styled from "styled-components";

export const CardContainer = styled.View`
    width: 320px;
    height: 102px;
    background-color: #FFFFFF;
    margin-top: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
`

export const CardContainerText = styled.View`
    height: 90%;
`

export const CancelCardContainer = styled(CardContainer)`
    justify-content: space-around
`