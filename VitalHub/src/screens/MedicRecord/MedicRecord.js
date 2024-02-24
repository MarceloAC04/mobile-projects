import { Container, ContainerScrollView } from "../../components/Container/Styles"
import { LabelText } from "../../components/LabelText/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { Title } from "../../components/Title/Styles"
import { UserProfileInput, UserProfileInputContainer, UserProfileInputContainerRow, UserProfileTextArea } from "../../components/UserProfileInput/Styles"
import { UserProfilePhoto } from "../../components/UserProfilePhoto/Styles"
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton"
import { MedicRecordButton } from "../../components/Button/Button"
import { CardLinkText } from "../../components/Card/Style"


export const MedicRecord = () => {
    return (
        <ContainerScrollView>
            <Container>
                <UserProfilePhoto source={require('../../assets/foto-de-perfil-medico.png')} />
                <Title>Dr. Claudio</Title>

                <SubTitle>Cliníco geral    <SubTitle>CRM-15286</SubTitle></SubTitle>

                <UserProfileInputContainer>
                    <LabelText>Descrição da Consulta</LabelText>
                    <UserProfileTextArea
                        placeholder={`O paciente possuí uma infecção no ouvido. Necessario repouso de 2 dias e acompanhamento médico constante.`}
                        multiline
                        numberOfLines={5}
                        maxLength={200}
                    />
                </UserProfileInputContainer>

                <UserProfileInputContainer>
                    <LabelText>Diagnóstico do paciente</LabelText>
                    <UserProfileInput
                        placeholder={'Infecção no ouvindo'}
                    />
                </UserProfileInputContainer>

                <UserProfileInputContainer>
                    <LabelText>Prescrição médica</LabelText>
                    <UserProfileTextArea
                        placeholder={`Medicamento: Advil \nDosagem: 50 mg \nFrequência: 3 vezes ao dia \nDuração: 3 dias`}
                        multiline
                        numberOfLines={6}
                        maxLength={250}
                    />
                </UserProfileInputContainer>

                <UserProfileInputContainer>
                    <LabelText>Prescrição médica</LabelText>
                    <UserProfileTextArea
                        placeholder={`               \n            Nenhuma foto informada`}
                        multiline
                        numberOfLines={6}
                        maxLength={250}
                    />
                </UserProfileInputContainer>

                <UserProfileInputContainerRow>
                    <MedicRecordButton placeholder={'Enviar'}/>
                    <CardLinkText> Cancelar </CardLinkText>
                </UserProfileInputContainerRow>

                <UserProfileInputContainer>
                    <UserProfileTextArea
                        placeholder={`Resultado do exame de sangue : \ntudo normal`}
                        multiline
                        numberOfLines={6}
                        maxLength={250}
                    />
                </UserProfileInputContainer>

                <ButtonSecondary 
                    placeholder={'voltar'}
                />
            </Container>
        </ContainerScrollView>
    )
}