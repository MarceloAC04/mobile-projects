import { Container, ContainerScrollView } from "../../components/Container/Styles";
import { LabelText } from "../../components/LabelText/Styles";
import { SubTitle } from "../../components/SubTitle/Styles";
import { Title } from "../../components/Title/Styles";
import { UserProfileInputContainer, UserProfileInputEdition, UserProfileTextAreaEdition } from "../../components/UserProfileInput/Styles";
import { UserProfilePhoto } from "../../components/UserProfilePhoto/Styles";
import { ButtonEnter } from "../../components/Button/Button";
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton";



export const MedicalRecordEdition = ({navigation}) => {
    return (
        <ContainerScrollView>
            <Container>

                <UserProfilePhoto source={require('../../assets/foto-de-perfil.png')} />
                <Title>Richard Kosta</Title>

                <SubTitle>22 Anos    <SubTitle>richard.kosta@gmail.com</SubTitle></SubTitle>

                <UserProfileInputContainer>
                    <LabelText>Descrição da Consulta</LabelText>
                    <UserProfileTextAreaEdition
                        placeholder={'Descrição'}
                        multiline
                        numberOfLines={5}
                        maxLength={200}
                    />
                </UserProfileInputContainer>

                <UserProfileInputContainer>
                    <LabelText>Diagnóstico do paciente</LabelText>
                    <UserProfileInputEdition
                        placeholder={'Diagnóstico do paciente'}
                    />
                </UserProfileInputContainer>

                <UserProfileInputContainer>
                    <LabelText>Prescrição Médica</LabelText>
                    <UserProfileTextAreaEdition
                        placeholder={'Prescrição Médica'}
                        multiline
                        numberOfLines={6}
                        maxLength={250}
                    />
                </UserProfileInputContainer>

                <ButtonEnter
                    onPress={() => navigation.navigate("MedicalRecord")}
                    placeholder={'Salvar'}
                />

                <ButtonSecondary 
                    onPress={() => navigation.navigate("MedicalRecord")}
                />
                

            </Container>
        </ContainerScrollView>
    );
}