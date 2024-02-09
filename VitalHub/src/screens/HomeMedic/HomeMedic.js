import { Container } from "../../components/Container/Styles"
import { HeaderContainer, HeaderContent, HeaderUserProfile, HeaderUserProfileText } from "../../components/Header/Styles"
import { UserProfilePhotoHeader } from "../../components/UserProfilePhoto/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { TitleHeader } from "../../components/Title/Styles"
import { FontAwesome } from '@expo/vector-icons'
import { CalendarStrip } from "react-native-calendar-strip"

export const HomeMedic = () => {
    return (
        <Container>
            <HeaderContainer>
                <HeaderContent>
                    <HeaderUserProfile>
                        <UserProfilePhotoHeader source={require('../../assets/foto-de-perfil-medico.png')} />
                        <HeaderUserProfileText>
                            <SubTitle>Bem vindo</SubTitle>
                            <TitleHeader>Dr.Claudio</TitleHeader>
                        </HeaderUserProfileText>
                    </HeaderUserProfile>
                    <FontAwesome name="bell" size={24} color="white" />
                </HeaderContent>
            </HeaderContainer>
            {/* <CalendarStrip
                scrollable
                calendarColor={'#3343CE'}
                calendarHeaderStyle={{ color: 'white' }}
                dateNumberStyle={{ color: 'white' }}
                dateNameStyle={{ color: 'white' }}
                iconContainer={{ flex: 0.1 }}
            /> */}
        </Container>
    )
}