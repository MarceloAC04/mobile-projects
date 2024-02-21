import { ScheduleAppointment } from "./Styles"
import { FontAwesome6 } from '@expo/vector-icons';


export const ScheduleAppointmentButton = () => {
    return (
        <ScheduleAppointment>
            <FontAwesome6 name="stethoscope" size={26} color="#FBFBFB" />
        </ScheduleAppointment>
    )
}