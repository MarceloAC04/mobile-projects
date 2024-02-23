import { Container, ContainerIcons } from "../../components/Container/Styles"
import { Logo } from "../../components/Logo/Styles"
import { Title } from "../../components/Title/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { EmailCodeInput, EmailCodeInputContainer } from "../../components/EmailCodeInput/Styles"
import { AntDesign } from '@expo/vector-icons';
import { ButtonEnter } from "../../components/Button/Button"
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton"

export const EmailCode = ({navigation}) => {
    return (
        <Container>

            <ContainerIcons>
                <AntDesign onPress={() => navigation.navigate('Reset')} name="closecircle" size={30} color="#49B3BA" />
            </ContainerIcons>

            <Logo source={require('../../assets/VitalHub-logo2.png')} />

            <Title>Verifique seu e-mail</Title>

            <SubTitle>Digite o código de 4 dígitos enviado para
                username@email.com</SubTitle>

            <EmailCodeInputContainer>
                <EmailCodeInput placeholder={'0'} maxLength={1} keyboardType={'numeric'}/>

                <EmailCodeInput placeholder={'0'} maxLength={1} keyboardType={'numeric'} />

                <EmailCodeInput placeholder={'0'} maxLength={1} keyboardType={'numeric'} />

                <EmailCodeInput placeholder={'0'} maxLength={1} keyboardType={'numeric'} />
            </EmailCodeInputContainer>

            <ButtonEnter 
                onPress={() => navigation.navigate('ResetPassword')}
                placeholder={'ENTRAR'}
            />

            <ButtonSecondary 
                placeholder={'Reenviar Código'}      
            />
        </Container>
    )
}