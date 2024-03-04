import { GenericEditInput, GenericEditTextArea, GenericInput, GenericTextArea } from "../../components/GenericProfileInput/GenericProfileInput";
import { Container, ContainerScrollView } from "../../components/Container/Styles";
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton";
import { UserProfilePhoto } from "../../components/UserProfilePhoto/Styles";
import { ButtonEnter } from "../../components/Button/Button";
import { SubTitle } from "../../components/SubTitle/Styles";
import { Title } from "../../components/Title/Styles";
import { useState } from "react";


export const MedicalRecord = ({navigation}) => {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <ContainerScrollView>
            <Container>

                <UserProfilePhoto source={require('../../assets/foto-de-perfil.png')} />
                <Title>Richard Kosta</Title>

                <SubTitle>22 Anos    <SubTitle>richard.kosta@gmail.com</SubTitle></SubTitle>
                {
                    !isEditing ? (
                        <>
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
                        </>

                    ) : (
                        <>
                            <GenericEditTextArea
                                textLabel={'Descrição da Consulta'}
                                placeholder={'Descrição'}
                            />

                            <GenericEditInput
                                textLabel={'Diagnóstico do paciente'}
                                placeholder={'Infecção no ouvindo'}
                            />
                            <GenericEditTextArea
                                textLabel={'Prescrição Médica'}
                                placeholder={'Prescrição Médica'}
                            />
                        </>
                    )
                }

                <ButtonEnter
                    onPress={() => isEditing ? setIsEditing(false) : null}
                    placeholder={'Salvar'}
                />

                {!isEditing ? (
                    <ButtonEnter
                        onPress={() => setIsEditing(true)}
                        placeholder={'Editar'}
                    />
                ) : null}

                <ButtonSecondary
                    onPress={() => navigation.navigate('HomeMedic')}
                />

            </Container>
        </ContainerScrollView>
    )
}
