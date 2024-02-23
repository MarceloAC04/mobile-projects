import { Button, ButtonTitle, ButtonTitleGoogle, GoogleButton, ModalAppointmentButton } from "./Styles"
import { AntDesign } from '@expo/vector-icons';


export const ButtonEnter = ({ onPress, placeholder }) => {
    return (
        <Button onPress={onPress}>
            <ButtonTitle>{placeholder}</ButtonTitle>
        </Button>
    )
}

export const ButtonGoogle = ({ onPress, placeholder }) => {
    return (
        <GoogleButton onPress={onPress}>
            <AntDesign name="google" size={20} color="#496BBA" />
            <ButtonTitleGoogle>{placeholder}</ButtonTitleGoogle>
        </GoogleButton>
    )
}

export const ButtonModalAppointment = ({onPress, placeholder}) => {
    return (
        <ModalAppointmentButton onPress={onPress}>
            <ButtonTitle>{placeholder}</ButtonTitle>
        </ModalAppointmentButton>
    )
}