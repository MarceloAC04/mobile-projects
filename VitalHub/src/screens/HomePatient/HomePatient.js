import { FilterStatusButton } from "../../components/StatusButton/StatusButton"
import { StatusButtonContainer } from "../../components/StatusButton/Styles"
import { Calendar } from "../../components/Calendar/Calendar"
import { Container } from "../../components/Container/Styles"
import { CardList } from "../../components/CardList/CardList"
import { Header } from "../../components/Header/Header"
import { useState } from "react"
import { ScheduleAppointmentButton } from "../../components/ScheduleAppointmentButton/ScheduleAppointmentButton"

const cardsMedic = [{
    id: '1', img: require('../../assets/foto-de-perfil-medico.png'),
    situation: 'pendente', name: 'Dr.Claudio', age: '22 anos',
    query: 'Rotina', schedule: '14:00', email: 'doutor.claudio@gmail.com',
    crm: 'CRM-15286', specialty: 'Clinico Geral'
}]

export const HomePatient = () => {
    const [statusLista, setStatusLista] = useState("pendente");
    return (
        <Container>
            <Header
                userName={'Richard Kosta'}
                userPhoto={require('../../assets/foto-de-perfil.png')}
            />
            <Calendar />

            <StatusButtonContainer>
                <FilterStatusButton
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />

                <FilterStatusButton
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizada"}
                    onPress={() => setStatusLista("realizada")}
                />
                <FilterStatusButton
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelada"}
                    onPress={() => setStatusLista("cancelada")}
                />
            </StatusButtonContainer>

            <CardList
                status={statusLista}
                cardsData={cardsMedic}
            />

            <ScheduleAppointmentButton />

        </Container>
    )
}