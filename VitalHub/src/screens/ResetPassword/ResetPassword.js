import { Container, ContainerIcons } from "../../components/Container/Styles";
import { ButtonEnter } from "../../components/Button/Button";
import { SubTitle } from "../../components/SubTitle/Styles";
import { Input } from "../../components/Input/Styles";
import { Title } from "../../components/Title/Styles";
import { Logo } from "../../components/Logo/Styles";
import { AntDesign } from '@expo/vector-icons';


export const ResetPassword = ({navigation}) => {
    return (
        <Container>
            <ContainerIcons>
                <AntDesign onPress={() => navigation.navigate('Login')} name="closecircle" size={30} color="#49B3BA" />
            </ContainerIcons>
            <Logo source={require('../../assets/VitalHub-logo2.png')} />

            <Title>Redefinir Senha</Title>

            <SubTitle>Insira e confirme a sua nova senha</SubTitle>

            <Input placeholder={'Nova Senha'} secureTextEntry/>

            <Input placeholder={'Confirme nova senha'} secureTextEntry />

            <ButtonEnter
                onPress={() => navigation.navigate('Login')}
                placeholder={'confirmar nova senha'}
            />
        </Container>
    )
}