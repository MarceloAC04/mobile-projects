import { Container } from "../../components/Container/Styles"
import { Calendar } from "../../components/Calendar/Calendar";
import { StatusButtonContainer } from "../../components/StatusButton/Styles"
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { CardList } from "../../components/CardList/CardList";
import { FilterStatusButton } from "../../components/StatusButton/StatusButton";

const cards = [
    { id: '1', img: require('../../assets/foto-de-perfil-2.png'), situation: 'pendente', name: 'Nicole Sarga', age: '22 anos', query: 'Rotina', schedule: '14:00' },
    { id: '2', img: require('../../assets/foto-de-perfil.png'), situation: 'pendente', name: 'Richard Kosta', age: '28 anos', query: 'Urgência', schedule: '15:00' },
    { id: '3', img: require('../../assets/foto-de-perfil-2.png'), situation: 'realizada', name: 'Nicole Sarga', age: '22 anos', query: 'Rotina', schedule: '14:00' },
    { id: '4', img: require('../../assets/foto-de-perfil.png'), situation: 'realizada', name: 'Richard Kosta', age: '28 anos', query: 'Urgência', schedule: '15:00' },
    { id: '5', img: require('../../assets/foto-de-perfil-3.png'), situation: 'cancelada', name: 'Robbert Charlie', age: '62 anos', query: 'Consulta', schedule: '15:00' }
]

export const HomeMedic = () => {
    const [statusLista, setStatusLista] = useState("pendente");

    const returnCards = cards.filter(c => {
        return c.situation === statusLista
    })

    return (
        <Container>
            <Header />
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
                verify={returnCards}
            />
        </Container>
    )
}