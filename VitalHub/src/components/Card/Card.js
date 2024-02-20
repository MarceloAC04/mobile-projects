import { useState } from "react"
import { CardButton, CardButtonText, RealizedCardButtonText } from "../CardButton/Styles"
import { RealizedScheduleTime, ScheduleTime } from "../ScheduleCard/Styles"
import { SubTitleCard, SubTitleCardAge } from "../SubTitle/Styles"
import { TitleCard } from "../Title/Styles"
import { UserProfilePhotoCard } from "../UserProfilePhoto/Styles"
import { CancelCardContainer, CardContainer, CardContainerText } from "./Style"
import { AntDesign } from '@expo/vector-icons';
import { ModalAppointment, ModalMedicalRecord } from "../Modal/Modal"



export const ScheduleCard = ({img, name, age, query, schedule}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        <CardContainer>
            <UserProfilePhotoCard source={img} />
            <CardContainerText>
                <TitleCard>{name}</TitleCard>
                <SubTitleCardAge>{age}  <SubTitleCard>{query}</SubTitleCard></SubTitleCardAge>
                <ScheduleTime> <AntDesign name="clockcircle" size={14} color="#49B3BA" />  {schedule}</ScheduleTime>
            </CardContainerText>
            <CardButton onPress={() => setModalVisible(true)}>
                <CardButtonText>Cancelar</CardButtonText>
            </CardButton>
        </CardContainer>
        <ModalAppointment
            visible={modalVisible}
            onPress={() => setModalVisible(false)}
            animation={'slide'}
            transparent={true}
        />
        </>
    )
}

export const RealizedCard = ({img, name, age, query, schedule, email }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        <CardContainer>
            <UserProfilePhotoCard source={img} />
            <CardContainerText>
                <TitleCard>{name}</TitleCard>
                <SubTitleCardAge>{age}  <SubTitleCard>{query}</SubTitleCard></SubTitleCardAge>
                <RealizedScheduleTime> <AntDesign name="clockcircle" size={14} color="#4E4B59" />  {schedule}</RealizedScheduleTime>
            </CardContainerText>
            <CardButton onPress={() => setModalVisible(true)}>
                <RealizedCardButtonText>Ver Prontuário</RealizedCardButtonText>
            </CardButton>
        </CardContainer>
        <ModalMedicalRecord
            visible={modalVisible}
            onPress={() => setModalVisible(false)}
            animation={'slide'}
            transparent={true}
            img={img}
            name={name}
            age={age}
            email={email}

        />
        </>
    )
}

export const CancelCard = ({img, name, age, query, schedule }) => {
    return (
        <CancelCardContainer>
            <UserProfilePhotoCard source={img} />
            <CardContainerText>
                <TitleCard>{name}</TitleCard>
                <SubTitleCardAge>{age}  <SubTitleCard>{query}</SubTitleCard></SubTitleCardAge>
                <RealizedScheduleTime> <AntDesign name="clockcircle" size={14} color="#4E4B59" />  {schedule}</RealizedScheduleTime>
            </CardContainerText>
            <CardButton>
                <CardButtonText>     </CardButtonText>
            </CardButton>
        </CancelCardContainer>
    )
}