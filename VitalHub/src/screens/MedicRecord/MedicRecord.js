import { Container, ContainerScrollView } from "../../components/Container/Styles"
import { LabelText } from "../../components/LabelText/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { Title } from "../../components/Title/Styles"
import { GenericProfileInputContainer, GenericProfileInputContainerRow, GenericProfileTextArea } from "../../components/GenericProfileInput/Styles"
import { UserProfilePhoto } from "../../components/UserProfilePhoto/Styles"
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton"
import { MedicRecordButton } from "../../components/Button/Button"
import { CardLinkText } from "../../components/Card/Style"
import { GenericInput, GenericTextArea } from "../../components/GenericProfileInput/GenericProfileInput"


export const MedicRecord = () => {
    return (
        <ContainerScrollView>
            <Container>
                <UserProfilePhoto source={require('../../assets/foto-de-perfil-medico.png')} />
                <Title>Dr. Claudio</Title>

                <SubTitle>Cliníco geral    <SubTitle>CRM-15286</SubTitle></SubTitle>

                <GenericTextArea
                    textLabel={'Descrição da Consulta'}
                    placeholder={`O paciente possuí uma infecção no ouvido. Necessario repouso de 2 dias e acompanhamento médico constante.`}
                />

                <GenericInput
                    textLabel={'Diagnóstico do paciente'}
                    placeholder={'Infecção no ouvindo'}
                />

                <GenericTextArea
                    textLabel={'Descrição da Consulta'}
                    placeholder={`Medicamento: Advil \nDosagem: 50 mg \nFrequência: 3 vezes ao dia \nDuração: 3 dias`}
                />

                <GenericProfileInputContainer>
                    <LabelText>Prescrição médica</LabelText>
                    <GenericProfileTextArea
                        placeholder={`               \n            Nenhuma foto informada`}
                        multiline
                        numberOfLines={6}
                        maxLength={250}
                    />
                </GenericProfileInputContainer>

                <GenericProfileInputContainerRow>
                    <MedicRecordButton placeholder={'Enviar'} />
                    <CardLinkText> Cancelar </CardLinkText>
                </GenericProfileInputContainerRow>

                <GenericTextArea
                    placeholder={`Resultado do exame de sangue : \ntudo normal`}
                />
                <ButtonSecondary
                    placeholder={'voltar'}
                />
            </Container>
        </ContainerScrollView>
    )
}