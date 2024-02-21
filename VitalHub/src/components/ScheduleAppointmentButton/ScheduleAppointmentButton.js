import { useState } from "react";
import { ModalScheduleAppointment } from "../Modal/Modal";
import { ScheduleAppointment } from "./Styles"
import { FontAwesome6 } from '@expo/vector-icons';


export const ScheduleAppointmentButton = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        <ScheduleAppointment onPress={() => setModalVisible(true) }>
            <FontAwesome6 name="stethoscope" size={26} color="#FBFBFB" />
        </ScheduleAppointment>
        <ModalScheduleAppointment
            visible={modalVisible}
            animation={'slide'}
            transparent={true} 
            onPress={() => setModalVisible(false)}
        />
        </>
    )
}