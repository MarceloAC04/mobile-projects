import { CardButton, CardButtonText } from "../CardButton/Styles"
import { ScheduleTime } from "../ScheduleCard/Styles"
import { SubTitleCard, SubTitleCardAge } from "../SubTitle/Styles"
import { TitleCard } from "../Title/Styles"
import { UserProfilePhotoCard } from "../UserProfilePhoto/Styles"
import { CardContainer, CardContainerText } from "./Style"
import { AntDesign } from '@expo/vector-icons';


export const Card = ({img, name, age, query, schedule }) => {
    return (
        <CardContainer>
            <UserProfilePhotoCard source={img} />
            <CardContainerText>
                <TitleCard>{name}</TitleCard>
                <SubTitleCardAge>{age}  <SubTitleCard>{query}</SubTitleCard></SubTitleCardAge>
                <ScheduleTime> <AntDesign name="clockcircle" size={14} color="#49B3BA" />  {schedule}</ScheduleTime>
            </CardContainerText>
            <CardButton>
                <CardButtonText>Cancelar</CardButtonText>
            </CardButton>
        </CardContainer>
    )
}