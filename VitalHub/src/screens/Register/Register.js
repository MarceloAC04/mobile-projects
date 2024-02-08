import { Text, View } from "react-native"
import { Container } from "../../components/Container/Styles"
import { Logo } from "../../components/Logo/Styles"
import { Title } from "../../components/Title/Styles"
import {SubTitle} from '../../components/SubTitle/Styles'
import { Input } from "../../components/Input/Styles"
import { Button, ButtonTitle } from "../../components/Button/Styles"
import { SecondaryButton, SecondaryButtonText } from "../../components/SecondaryButton/Styles"

export const Register = ({navigation}) => {
    return(
        <Container>
            <Logo source={require('../../assets/VitalHub-logo2.png')}/>

            <Title>Criar Conta</Title>

            <SubTitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTitle>

            <Input placeholder={'Insira seu Email'}/>

            <Input placeholder={'Senha'} secureTextEntry/>

            <Input placeholder={'Confirmar Senha'} secureTextEntry/>

            <Button>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </Button>

            <SecondaryButton>
                <SecondaryButtonText onPress={() => navigation.navigate('Login')}>Cancelar</SecondaryButtonText>
            </SecondaryButton>
        </Container>
    )
}