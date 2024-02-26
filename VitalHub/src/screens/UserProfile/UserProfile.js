import { Container, ContainerScrollView } from "../../components/Container/Styles"
import { LabelText } from "../../components/LabelText/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { Title } from "../../components/Title/Styles"
import { UserProfileInput, UserProfileInputAddress, UserProfileInputContainer, UserProfileInputContainerAddress, UserProfileInputContainerRow } from "../../components/UserProfileInput/Styles"
import { UserProfilePhoto } from "../../components/UserProfilePhoto/Styles"
import { ButtonEnter, ButtonGrey } from "../../components/Button/Button"


export const UserProfile = () => {
    return (
        <ContainerScrollView>
            <Container>
                <UserProfilePhoto source={require('../../assets/foto-de-perfil.png')} />

                <Title>Richard Kosta</Title>

                <SubTitle>richard.kosta@gmail.com</SubTitle>

                <UserProfileInputContainer>
                    <LabelText>Data de Nascimento: </LabelText>
                    <UserProfileInput placeholder={'04/05/1999'} />
                </UserProfileInputContainer>

                <UserProfileInputContainer>
                    <LabelText>CPF: </LabelText>
                    <UserProfileInput placeholder={'859********'} />
                </UserProfileInputContainer>

                <UserProfileInputContainer>
                    <LabelText>Endereço: </LabelText>
                    <UserProfileInput placeholder={'Rua Vicenso Silva, 987'} />
                </UserProfileInputContainer>

                <UserProfileInputContainerRow>
                    <UserProfileInputContainerAddress>
                        <LabelText>CEP: </LabelText>
                        <UserProfileInputAddress placeholder={'06548-909'} />
                    </UserProfileInputContainerAddress>

                    <UserProfileInputContainerAddress>
                        <LabelText>Cidade: </LabelText>
                        <UserProfileInputAddress placeholder={'Moema-SP'} />
                    </UserProfileInputContainerAddress>
                </UserProfileInputContainerRow>

                <ButtonEnter
                    placeholder={'salvar'}
                />

                <ButtonEnter
                    placeholder={'editar'}
                />

                <ButtonGrey 
                    placeholder={'Sair do app'}
                />
            </Container>
        </ContainerScrollView>
    )
}