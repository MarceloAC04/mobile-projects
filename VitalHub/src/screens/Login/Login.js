import { Logo } from "../../components/Logo/Styles"
import { Container } from "../../components/Container/Styles"
import { Title } from "../../components/Title/Styles"
import { Input } from "../../components/Input/Styles"
import { LinkAccount, LinkMedium } from "../../components/Links/Styles"
import { Button, ButtonTitle, ButtonTitleGoogle, GoogleButton } from "../../components/Button/Styles"
import { ContentAccount, TextAccount } from "../../components/ContentAccount/Styles"
import { AntDesign } from '@expo/vector-icons';

export const Login = ({navigation}) => {
    return (
        <Container>

            <Logo source={require('../../assets/VitalHub-logo2.png')} />

            <Title >Entrar ou criar conta</Title>

            <Input placeholder={'Usuário ou E-mail'} />
            <Input placeholder={'Senha'}
                secureTextEntry
            />

            <LinkMedium onPress={() =>navigation.navigate("Reset")}>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <GoogleButton>
                <AntDesign name="google" size={20} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com o Google</ButtonTitleGoogle>
            </GoogleButton>

            <ContentAccount>
                <TextAccount>Não tem conta? </TextAccount>
                <LinkAccount onPress={() =>navigation.navigate("Register")}>Crie uma conta agora!</LinkAccount>
            </ContentAccount>

        </Container>
    )
}