import { ButtonEnter } from "../../components/Button/Button"
import { CalendarSchedule } from "../../components/CalendarSchedule/CalendarSchedule"
import { Container } from "../../components/Container/Styles"
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton"
import { SelectInput } from "../../components/SelectInput/SelectInput"
import { Title } from "../../components/Title/Styles"



export const DateSelect = () => {
    return (
        <Container>
            <Title>Selecionar data</Title>

            <CalendarSchedule />

            <SelectInput 
                textLabel={'Selecione um horário disponível'}
                textInput={'Selecionar horário'}
            />


            <ButtonEnter
                placeholder={'confirmar'}
            />
            <ButtonSecondary/>
        </Container>
    )
}