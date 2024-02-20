import { Title } from "../Title/Styles"
import { SecondaryButton, SecondaryButtonText } from "../SecondaryButton/Styles"
import { Button, ButtonTitle } from "../Button/Styles"
import { ModalContainer, ModalMedicalRecordContainer, ModalMedicalRecordView, ModalView } from "./Styles"
import { SubTitle, SubTitleContainerModal } from "../SubTitle/Styles"
import { Modal } from "react-native"
import { UserProfilePhotoModal } from "../UserProfilePhoto/Styles"


export const ModalAppointment = ({ animation, transparent, visible, onRequestClose, onPress }) => {
    return (
        <Modal
            animationType={animation}
            transparent={transparent}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <ModalView>
                <ModalContainer>
                    <Title>Cancelar Consulta</Title>
                    <SubTitleContainerModal>
                        <SubTitle>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</SubTitle>
                    </SubTitleContainerModal>
                    <Button>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </Button>
                    <SecondaryButton onPress={onPress}>
                        <SecondaryButtonText>Cancelar</SecondaryButtonText>
                    </SecondaryButton>
                </ModalContainer>

            </ModalView>
        </Modal>
    )
}

export const ModalMedicalRecord = ({ animation, transparent, visible, onRequestClose, onPress, img, name, age, email }) => {
    return (
        <Modal
            animationType={animation}
            transparent={transparent}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <ModalMedicalRecordView>
                <ModalMedicalRecordContainer>
                    <UserProfilePhotoModal source={img}/>
                    <Title>{name}</Title>
                    <SubTitle>{age}   <SubTitle>{email}</SubTitle></SubTitle>
                    <Button>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </Button>
                    <SecondaryButton onPress={onPress}>
                        <SecondaryButtonText>Cancelar</SecondaryButtonText>
                    </SecondaryButton>
                </ModalMedicalRecordContainer>
            </ModalMedicalRecordView>
        </Modal>
    )
}