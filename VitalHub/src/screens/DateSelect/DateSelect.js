import { CalendarSchedule } from "../../components/CalendarSchedule/CalendarSchedule"
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton"
import { SelectInputPicker } from "../../components/SelectInput/SelectInput"
import { ModalConfirmAppointment } from "../../components/Modal/Modal"
import { Container } from "../../components/Container/Styles"
import { ButtonEnter } from "../../components/Button/Button"
import { Title } from "../../components/Title/Styles"
import { useState } from "react"

export const DateSelect = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Container>
            <Title>Selecionar data</Title>

            <CalendarSchedule/>

            <SelectInputPicker
                textLabel={'Selecione um horário disponível'}
                textInput={'Selecionar horário'}
            />

            <ButtonEnter
                onPress={() => setModalVisible(true)}
                placeholder={'confirmar'}
            />

            <ModalConfirmAppointment
                visible={modalVisible}
                animation={'fade'}
                onPressConfirm={() => {
                    setModalVisible(false)
                    navigation.navigate("HomePatient")
                }}
                onPressCancel={() => setModalVisible(false)}
            />

            <ButtonSecondary
                onPress={() => navigation.navigate("HomePatient")}
            />
        </Container>
    )
}