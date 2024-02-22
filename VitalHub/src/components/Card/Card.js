import { RealizedScheduleTime, RealizedTimeContainer, ScheduleClinicContainer, ScheduleContainer, ScheduleTime } from "../ScheduleCard/Styles";
import { CardClinicContainer, CardClinicContent, CardContainer, CardContainerText, CardLinkText, RealizedCardLinkText } from "./Style";
import { SubTitleCard, SubTitleCardAge, SubTitleCardScore } from "../SubTitle/Styles";
import { UserProfilePhotoCard } from "../UserProfilePhoto/Styles";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { TitleCard } from "../Title/Styles";
import { ModalAppointment } from "../Modal/Modal";
import { useState } from "react";

export const AppointmentCard = ({ id, img, name, age, query, schedule, email, situation}) => {
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
                        animation={'fade'}
                        transparent={true}
                        id={id}
                        img={img}
                        name={name}
                        age={age}
                        email={email}
                        situation={situation}
                    />
                </>
            ) : (null)}
            {situation == 'realizada' ? (
                <>
                    <RealizedCardLinkText onPress={() => setModalVisible(true)}>Ver Prontuário</RealizedCardLinkText>
                    <ModalAppointment
                        visible={modalVisible}
                        onPress={() => setModalVisible(false)}
                        animation={'fade'}
                        transparent={true}
                        id={id}
                        img={img}
                        name={name}
                        age={age}
                        email={email}
                        situation={situation}
                    />
                </>
            ) : (<CardLinkText>           </CardLinkText>)}
        </CardContainer >
    )
}


export const ClinicSelectCard = ({ id, clinicName, score, city, uf, days }) => {
    return (
        <CardClinicContainer>
            <CardClinicContent>
                <TitleCard>{clinicName}</TitleCard>
                <SubTitleCardScore><AntDesign name="star" size={16} color="#F9A620" />{score}</SubTitleCardScore>
            </CardClinicContent>

            <CardClinicContent>
                <SubTitleCard>{city}, {uf}</SubTitleCard>
                <ScheduleClinicContainer>
                    <ScheduleTime><MaterialCommunityIcons name="calendar-outline" size={16} color="#49B3BA" /> {days}</ScheduleTime>
                </ScheduleClinicContainer>
            </CardClinicContent>
        </CardClinicContainer>
    )
}