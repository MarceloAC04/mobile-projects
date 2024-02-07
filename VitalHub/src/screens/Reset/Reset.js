import { Button, ButtonTitle } from "../../components/Button/Styles"
import { Container } from "../../components/Container/Styles"
import { Input } from "../../components/Input/Styles"
import { Logo } from "../../components/Logo/Styles"
import { SubTitle, SubTitleContainer } from "../../components/SubTitle/Styles"
import { Title } from "../../components/Title/Styles"

export const Reset = () => {
    return (
        <Container>

            <Logo source={require('../../assets/VitalHub-logo2.png')} />

            <Title>Recuperar senha</Title>

            <SubTitleContainer>
                <SubTitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</SubTitle>
            </SubTitleContainer>

            <Input placeholder={'Usuário ou E-mail'} />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Container>
    )
}