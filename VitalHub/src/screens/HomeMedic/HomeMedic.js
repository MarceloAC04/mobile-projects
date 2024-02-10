import { Container, ContainerScrollView } from "../../components/Container/Styles"
import { HeaderContainer, HeaderContent, HeaderUserProfile, HeaderUserProfileText } from "../../components/Header/Styles"
import { UserProfilePhotoHeader } from "../../components/UserProfilePhoto/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { TitleHeader } from "../../components/Title/Styles"
import { FontAwesome } from '@expo/vector-icons'
import { Calendar } from "../../components/Calendar/Styles"

export const HomeMedic = () => {
    datesWhitelist = [
        //  date range
         {
           start: (Date.now()),
           end: (Date.now())
         }
      ];

      let customDatesStyles = [];
      customDatesStyles.push({
        startDate: Date.now(), // Single date since no endDate provided
        dateNumberStyle: {color: 'white' },
        dateNameStyle: { color: 'white' },
        // Random color...
        dateContainerStyle: { backgroundColor: '#60BFC5' }
      })
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
            <ContainerScrollView style={{flex: 1}}>
                <Calendar
                    scrollable
                    calendarColor={'transparent'}
                    datesWhitelist={datesWhitelist}
                    customDatesStyles={customDatesStyles}
                    IconContainer={{ flex: 0.1 }}
                />
            </ContainerScrollView>
        </Container>
    )
}