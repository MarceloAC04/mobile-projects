import { Container, ContainerScrollView } from "../../components/Container/Styles"
import { MapClinic } from "../../components/MapClinic/Styles"
import { Title } from "../../components/Title/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { GenericProfileInputContainerRow } from "../../components/GenericProfileInput/Styles"
import { GenericInput, GenericProfileAddressInput } from "../../components/GenericProfileInput/GenericProfileInput"


export const ConsultationLocation = () => {
    return (
        <ContainerScrollView>
            <Container>
                <MapClinic source={require('../../assets/map-clinic.png')} />

                <Title>Clínica Natureh</Title>
                <SubTitle>São Paulo, SP</SubTitle>

                <GenericInput
                    textLabel={'Endereço'}
                    placeholder={'Rua Vicenso Silva, 987'}
                />
                <GenericProfileInputContainerRow>
                    <GenericProfileAddressInput
                        textLabel={'Número'}
                        placeholder={'578'}
                    />

                    <GenericProfileAddressInput
                        textLabel={'Bairro'}
                        placeholder={'Moema-SP'}
                    />
                </GenericProfileInputContainerRow>

            </Container>
        </ContainerScrollView>
    )
}