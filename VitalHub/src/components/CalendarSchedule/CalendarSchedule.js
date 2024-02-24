import { ScheduleCalendar } from "./Styles"
import moment from "moment"
import 'moment/locale/pt-br';
import { LocaleConfig } from "react-native-calendars";

//instância da data atual
const currentDate = new Date();

//define a data inicial como sendo o primeiro dia do mês
const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 2);

//define a data final como sendo o último dia do mês
const endingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

LocaleConfig.locales['pt-br'] = {
    //meses
    monthNames:
      "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
        "_"
      ),

    //abreviação de meses
    monthNamesShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),

    //dias da semana
    dayNames:
      "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
        "_"
      ),

    //abreviação dias da semana
    dayNamesShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
};

LocaleConfig.defaultLocale = 'pt-br'

export const CalendarSchedule = () => {
    return (
        <ScheduleCalendar
            hideArrows={true}
            initialDate={currentDate.toDateString()}
            minDate={startingDate.toDateString()}
            maxDate={endingDate.toDateString()}
            markedDates={currentDate}
            theme={{
                textSectionTitleColor: '#ACABB7',
                selectedDayBackgroundColor: '#60BFC5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: 'white',
                todayBackgroundColor: '#60BFC5',
                dayTextColor: '#5F5C6B',
                textDisabledColor: '#d9e1e8',
                monthTextColor: '#4E4B59',
                textMonthFontFamily: 'MontserratAlternates_600SemiBold',
                textDayFontWeight: '300',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 14,
                textMonthFontSize: 20,
                textDayHeaderFontSize: 14
            }}

        />
    )
}
