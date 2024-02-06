import { Logo } from "../../components/Logo/Styles"
import { Container } from "../../components/Container/Styles"
import { Title } from "../../components/Title/Styles"
import { Input } from "../../components/Input/Styles"
import { LinkMedium } from "../../components/Links/Styles"

export const Login = () => {
    return (
        <Container>

            <Logo source={require('../../assets/VitalHub-logo2.png')} />

            <Title >Entrar ou criar conta</Title>

            <Input placeholder={'Usuário ou E-mail'} />
            <Input placeholder={'Senha'}
                   secureTextEntry
            />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

             {/*<Button>
                <ButtonTitle></ButtonTitle>
            </Button>

            <GoogleButton>
                <ButtonTitleGoogle></ButtonTitleGoogle>
            </GoogleButton>

            <ContentAccount>
                <TextAccount></TextAccount>
            </ContentAccount> */}

        </Container>
    )
}