import { Modal } from "react-native";
import styled from "styled-components";

export const ModalView = styled.View`
    margin-top: 50%;
    align-self: center;
`

export const ModalContainer = styled.View`
    background-color: white;
    height: 310px;
    width: 334px;

    border-radius: 10px;
    border: 1px solid black;
    padding: 10px;

    justify-content: space-evenly;
    align-items: center;
`
export const ModalMedicalRecordView = styled(ModalView)`
    margin-top: 36%;
`

export const ModalMedicalRecordContainer = styled(ModalContainer)`
    height: 436px;
    width: 334px;
    padding: 20px;
`
