import { RealizedScheduleTime, RealizedTimeContainer, ScheduleContainer, ScheduleTime } from "../ScheduleCard/Styles";
import { CardContainer, CardContainerText, CardLinkText, RealizedCardLinkText } from "./Style";
import { SubTitleCard, SubTitleCardAge } from "../SubTitle/Styles";
import { UserProfilePhotoCard } from "../UserProfilePhoto/Styles";
import { AntDesign } from '@expo/vector-icons';
import { TitleCard } from "../Title/Styles";

export const AppointmentCard = ({ img, name, age, query, schedule, email, situation, onPressAppoiment, onPressCancel }) => {
    return (
        <CardContainer>
            <UserProfilePhotoCard source={img} />
            <CardContainerText>
                <TitleCard>{name}</TitleCard>
                <SubTitleCardAge>{age}  <SubTitleCard>{query}</SubTitleCard></SubTitleCardAge>
                {situation == 'pendente' ? (
                    <ScheduleContainer>
                        <ScheduleTime> <AntDesign name="clockcircle" size={14} color="#49B3BA" />  {schedule}</ScheduleTime>
                    </ScheduleContainer>

                ) : (
                    <RealizedTimeContainer>
                        <RealizedScheduleTime> <AntDesign name="clockcircle" size={14} color="#4E4B59" />  {schedule}</RealizedScheduleTime>
                    </RealizedTimeContainer>
                )}
            </CardContainerText>
            {situation == 'pendente' ? (
                <CardLinkText onPress={onPressCancel}> Cancelar </CardLinkText>
            ) : (null)}
            {situation == 'realizada' ? (
                <RealizedCardLinkText onPress={onPressAppoiment}>Ver Prontuário</RealizedCardLinkText>
            ) : (<CardLinkText>           </CardLinkText>)}
        </CardContainer >
    )
}