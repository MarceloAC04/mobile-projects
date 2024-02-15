import { CalendarStyle, ContainerCalendarScrollView } from "../../components/Calendar/Styles"
import moment from "moment"
import 'moment/locale/pt-br';

datesWhitelist = [
    //  date range
    {
        start: (moment()),
        end: (moment())
    }
];

const customDatesStylesFunc = date => {
    if (date.isoWeekday() != moment()) {
        return {
            dateNumberStyle: { fontSize: 16, fontFamily: 'Quicksand_500Medium', color: '#5F5C6B' },
            dateNameStyle: { fontSize: 12, fontFamily: 'MontserratAlternates_600SemiBold', color: '#ACABB7' },
        }
    }
}

export const Calendar = () => {
    return (
        <ContainerCalendarScrollView>
            <CalendarStyle
                scrollable
                selectedDate={moment()}
                minDate={moment()}
                calendarHeaderStyle={{
                    fontFamily: 'MontserratAlternates_600SemiBold',
                    fontSize: 20,
                    textAlign: 'left',
                    width: '95%',
                    color: '#4E4B59',

                }}
                datesWhitelist={datesWhitelist}
                customDatesStyles={customDatesStylesFunc}
                highlightDateNumberStyle={{ fontSize: 16, fontFamily: 'Quicksand_600SemiBold', color: 'white' }}
                highlightDateNameStyle={{ fontSize: 12, fontFamily: 'Quicksand_600SemiBold', color: 'white' }}
                highlightDateContainerStyle={{ backgroundColor: '#60BFC5' }}
                IconContainer={{ flex: 0.1 }}
            />
        </ContainerCalendarScrollView>
    )
}