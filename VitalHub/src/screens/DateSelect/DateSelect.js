import { useState } from "react"
import { ButtonEnter } from "../../components/Button/Button"
import { CalendarSchedule } from "../../components/CalendarSchedule/CalendarSchedule"
import { Container } from "../../components/Container/Styles"
import { ModalConfirmAppointment } from "../../components/Modal/Modal"
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton"
import { SelectInput, SelectInputPicker } from "../../components/SelectInput/SelectInput"
import { Title } from "../../components/Title/Styles"



export const DateSelect = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Container>
            <Title>Selecionar data</Title>

            <CalendarSchedule />

            {/* <SelectInput 
                textLabel={'Selecione um horário disponível'}
                textInput={'Selecionar horário'}
            /> */}

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
                onPressCancel={() => setModalVisible(false)}
            />
            <ButtonSecondary/>
        </Container>
    )
}