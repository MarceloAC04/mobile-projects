import { Container } from "../../components/Container/Styles"
import { MedicSelectCardList } from "../../components/CardList/CardList"
import { Title } from "../../components/Title/Styles"
import { ButtonEnter } from "../../components/Button/Button"
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton"

const medicCards = [
    { id: 1, img: require('../../assets/foto-de-perfil-medico-2.png'), medicName: 'Dra Alessandra', speciality: 'Demartologa, Esteticista' },
    { id: 2, img: require('../../assets/foto-de-perfil-medico-3.png'), medicName: 'Dr Kumushiro', speciality: 'Cirurgião, Cardiologista' },
    { id: 3, img: require('../../assets/foto-de-perfil-medico-4.png'), medicName: 'Dr Rodrigo Santos', speciality: 'Clínico, Pediatra' },
]


export const MedicSelect = () => {
    return (
        <Container>
            <Title>Selecionar Médico</Title>

            <MedicSelectCardList
                cardsData={medicCards}
            />
            
            <ButtonEnter
                placeholder={'confirmar'}
            />

            <ButtonSecondary />
        </Container>
    )
}