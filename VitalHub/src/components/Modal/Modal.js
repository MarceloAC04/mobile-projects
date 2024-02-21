import { ModalContainer, ModalScheduleView, ModalMedicalRecordContainer, ModalMedicalRecordView, ModalView, ModalScheduleContainer } from "./Styles";
import { SecondaryButton, SecondaryButtonText } from "../SecondaryButton/Styles";
import { SubTitle, SubTitleContainerModal } from "../SubTitle/Styles";
import { UserProfilePhotoModal } from "../UserProfilePhoto/Styles";
import { Button, ButtonTitle } from "../Button/Styles";
import { Title } from "../Title/Styles";
import { Modal } from "react-native";
import { UserProfileInputContainer, UserProfileInputEdition } from "../UserProfileInput/Styles";
import { LabelText } from "../LabelText/Styles";


export const ModalAppointment = ({ animation, transparent, visible, onPress, img, name, age, email, situation }) => {
    return (
        <Modal
            animationType={animation}
            transparent={transparent}
            visible={visible}
        >
            {situation == 'pendente' ? (
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
            ) : (
                <ModalMedicalRecordView>
                    <ModalMedicalRecordContainer>
                        <UserProfilePhotoModal source={img} />
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
            )}
        </Modal>
    )
}

export const ModalScheduleAppointment = ({ animation, transparent, visible, onPress }) => {
    return (
        <Modal
            animationType={animation}
            transparent={transparent}
            visible={visible}
        >
            <ModalScheduleView>
                <ModalScheduleContainer>
                    <Title>Agendar consulta</Title>
                    <UserProfileInputContainer>
                        <LabelText>informe a localização desejada</LabelText>
                        <UserProfileInputEdition
                            placeholder={'Informe a localização'}
                        />
                    </UserProfileInputContainer>
                    <SecondaryButton onPress={onPress}>
                        <SecondaryButtonText>Cancelar</SecondaryButtonText>
                    </SecondaryButton>
                </ModalScheduleContainer>
            </ModalScheduleView>
        </Modal>
    )
}
