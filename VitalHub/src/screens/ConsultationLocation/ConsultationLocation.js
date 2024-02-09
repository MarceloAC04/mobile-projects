import { Container, ContainerScrollView } from "../../components/Container/Styles"
import { MapClinic } from "../../components/MapClinic/Styles"
import { Title } from "../../components/Title/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { UserProfileInput, UserProfileInputAddress, UserProfileInputContainer, UserProfileInputContainerAddress, UserProfileInputContainerRow } from "../../components/UserProfileInput/Styles"
import { LabelText } from "../../components/LabelText/Styles"


export const ConsultationLocation = () => {
    return (
        <ContainerScrollView>
            <Container>
                <MapClinic source={require('../../assets/map-clinic.png')} />

                <Title>Clínica Natureh</Title>
                <SubTitle>São Paulo, SP</SubTitle>

                <UserProfileInputContainer>
                    <LabelText>Endereço</LabelText>
                    <UserProfileInput>Rua Vicenso Silva, 987</UserProfileInput>
                </UserProfileInputContainer>

                <UserProfileInputContainerRow>
                    <UserProfileInputContainerAddress>
                        <LabelText>Número</LabelText>
                        <UserProfileInputAddress>578</UserProfileInputAddress>
                    </UserProfileInputContainerAddress>

                    <UserProfileInputContainerAddress>
                        <LabelText>Bairro</LabelText>
                        <UserProfileInputAddress>Moema-SP</UserProfileInputAddress>
                    </UserProfileInputContainerAddress>
                </UserProfileInputContainerRow>

            </Container>
        </ContainerScrollView>
    )
}