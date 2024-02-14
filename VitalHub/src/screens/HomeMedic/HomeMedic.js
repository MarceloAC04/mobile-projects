import { Container, ContainerScrollView } from "../../components/Container/Styles"
import { HeaderContainer, HeaderContent, HeaderUserProfile, HeaderUserProfileText } from "../../components/Header/Styles"
import { UserProfilePhotoHeader } from "../../components/UserProfilePhoto/Styles"
import { SubTitle } from "../../components/SubTitle/Styles"
import { TitleHeader } from "../../components/Title/Styles"
import { FontAwesome } from '@expo/vector-icons'
import { Calendar } from "../../components/Calendar/Styles"
import moment from "moment"
import 'moment/locale/pt-br';

export const HomeMedic = () => {
    datesWhitelist = [
        //  date range
        {
            start: (moment()),
            end: (moment())
        }
    ];

    const customDatesStylesFunc = date => {
        if (date.isoWeekday() != moment()) { // Fridays
            return {
                dateNumberStyle: {fontSize: 16, fontFamily: 'Quicksand_500Medium', color: '#33303e' },
                dateNameStyle: { fontSize: 12, fontFamily: 'MontserratAlternates_600SemiBold', color: 'grey' },
            }
        }
    }
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
            <ContainerScrollView style={{ flex: 1 }}>
                <Calendar
                    scrollable
                    selectedDate={moment()}
                    minDate={moment()}
                    calendarHeaderStyle={{
                        fontFamily: 'MontserratAlternates_600SemiBold',
                        fontSize: 20,
                        textAlign: 'left',
                        width: '95%',
                        color: '#33303e',

                    }}
                    datesWhitelist={datesWhitelist}
                    customDatesStyles={customDatesStylesFunc}
                    highlightDateNumberStyle={{ fontSize: 16, fontFamily: 'Quicksand_500Medium', color: 'white' }}
                    highlightDateNameStyle={{fontSize: 12, fontFamily: 'Quicksand_500Medium', color: 'white' }}
                    highlightDateContainerStyle={{ backgroundColor: '#60BFC5' }}
                    IconContainer={{ flex: 0.1 }}
                />
            </ContainerScrollView>
        </Container>
    )
}