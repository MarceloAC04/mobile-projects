import { Button, ButtonTitle } from "../../components/Button/Styles"
import { Container, ContainerScrollView } from "../../components/Container/Styles"
import { LabelText } from "../../components/LabelText/Styles"
import { SecondaryButton, SecondaryButtonText} from "../../components/SecondaryButton/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { Title } from "../../components/Title/Styles"
import { UserProfileInput, UserProfileInputContainer, UserProfileTextArea } from "../../components/UserProfileInput/Styles"
import { UserProfilePhoto } from "../../components/UserProfilePhoto/Styles"


export const MedicalRecord = ({navigation}) => {
    return (
        <ContainerScrollView>
            <Container>

                <UserProfilePhoto source={require('../../assets/foto-de-perfil.png')} />
                <Title>Richard Kosta</Title>

                <SubTitle>22 Anos    <SubTitle>richard.kosta@gmail.com</SubTitle></SubTitle>

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

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <Button onPress={() => navigation.navigate('MedicalRecordEdition')}>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>

                <SecondaryButton>
                    <SecondaryButtonText>Cancelar</SecondaryButtonText>
                </SecondaryButton>

            </Container>
        </ContainerScrollView>
    )
}
