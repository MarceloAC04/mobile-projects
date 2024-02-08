import { Container, ContainerScrollView } from "../../components/Container/Styles"
import { LabelText } from "../../components/LabelText/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { Title } from "../../components/Title/Styles"
import { UserProfileInput, UserProfileInputAddress, UserProfileInputContainer, UserProfileInputContainerRow } from "../../components/UserProfileInput/Styles"
import { UserProfilePhoto } from "../../components/UserProfilePhoto/Styles"

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
                    <UserProfileInputContainer>
                        <LabelText>CEP: </LabelText>
                        <UserProfileInputAddress placeholder={'06548-909'} />
                    </UserProfileInputContainer>

                    <UserProfileInputContainer>
                        <LabelText>Cidade: </LabelText>
                        <UserProfileInputAddress placeholder={'Moema-SP'} />
                    </UserProfileInputContainer>
                </UserProfileInputContainerRow>
            </Container>
        </ContainerScrollView>
    )
}