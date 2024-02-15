import { HeaderContainer, HeaderUserProfile, HeaderUserProfileText } from "../../components/Header/Styles"
import { UserProfilePhotoHeader } from "../../components/UserProfilePhoto/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { TitleHeader } from "../../components/Title/Styles"
import { FontAwesome } from '@expo/vector-icons'

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderUserProfile>
                <UserProfilePhotoHeader source={require('../../assets/foto-de-perfil-medico.png')} />
                <HeaderUserProfileText>
                    <SubTitle>Bem vindo</SubTitle>
                    <TitleHeader>Dr.Claudio</TitleHeader>
                </HeaderUserProfileText>
            </HeaderUserProfile>
            <FontAwesome name="bell" size={24} color="white" />
        </HeaderContainer>
    )
}