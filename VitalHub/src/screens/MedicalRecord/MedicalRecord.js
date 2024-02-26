import { useState } from "react"
import { ButtonEnter } from "../../components/Button/Button"
import { Container, ContainerScrollView } from "../../components/Container/Styles"
import { LabelText } from "../../components/LabelText/Styles"
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton"
import { SubTitle } from "../../components/SubTitle/Styles"
import { Title } from "../../components/Title/Styles"
import { UserProfileInput, UserProfileInputContainer, UserProfileInputEdition, UserProfileTextArea, UserProfileTextAreaEdition } from "../../components/UserProfileInput/Styles"
import { UserProfilePhoto } from "../../components/UserProfilePhoto/Styles"


export const MedicalRecord = () => {
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
                        </>

                    ) : (
                        <>
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
                        </>
                    )
                }

                <ButtonEnter
                    placeholder={'Salvar'}
                />

                 { !isEditing ? (
                    <ButtonEnter 
                    onPress={() => setIsEditing(true)}
                    placeholder={'Editar'}
                    />
                 ) : null}

                <ButtonSecondary
                    onPress={() => isEditing ? setIsEditing(false) : null }
                />

            </Container>
        </ContainerScrollView>
    )
}
