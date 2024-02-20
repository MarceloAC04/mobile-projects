import { useState } from "react"
import { RealizedScheduleTime, RealizedTimeContainer, ScheduleContainer, ScheduleTime } from "../ScheduleCard/Styles"
import { SubTitleCard, SubTitleCardAge } from "../SubTitle/Styles"
import { TitleCard } from "../Title/Styles"
import { UserProfilePhotoCard } from "../UserProfilePhoto/Styles"
import { CardButton, CardButtonText, CardContainer, CardContainerText, CardLinkText, RealizedCardLinkText } from "./Style"
import { AntDesign } from '@expo/vector-icons';
import { ModalAppointment, ModalMedicalRecord } from "../Modal/Modal"

export const AppointmentCard = ({ img, name, age, query, schedule, email, situation }) => {
    const [modalVisible, setModalVisible] = useState(false);
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
                <>
                    <CardLinkText onPress={() => setModalVisible(true)}> Cancelar </CardLinkText>
                    <ModalAppointment
                        visible={modalVisible}
                        onPress={() => setModalVisible(false)}
                        animation={'slide'}
                        transparent={true}
                    />
                </>
            ) : (null)}
            {situation == 'realizada' ? (
                <>
                    <RealizedCardLinkText onPress={() => setModalVisible(true)}>Ver Prontuário</RealizedCardLinkText>
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
            ) : (<CardLinkText>           </CardLinkText>)}
        </CardContainer >
    )
}