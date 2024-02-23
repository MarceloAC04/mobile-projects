import { Button, ButtonTitle } from "../../components/Button/Styles"
import { Container } from "../../components/Container/Styles"
import { MedicSelectCardList } from "../../components/CardList/CardList"
import { SecondaryButton, SecondaryButtonText } from "../../components/SecondaryButton/Styles"
import { Title } from "../../components/Title/Styles"

const medicCards = [
    {id: 1, img: require('../../assets/foto-de-perfil-medico-2.png') , medicName: 'Dra Alessandra', speciality: 'Demartologa, Esteticista'},
    {id: 2, img: require('../../assets/foto-de-perfil-medico-3.png') , medicName: 'Dr Kumushiro', speciality: 'Cirurgião, Cardiologista'},
    {id: 3, img: require('../../assets/foto-de-perfil-medico-4.png') , medicName: 'Dr Rodrigo Santos', speciality: 'Clínico, Pediatra'},
]


export const MedicSelect = () => {
    return(
        <Container>
            <Title>Selecionar Médico</Title>

           <MedicSelectCardList 
            cardsData={medicCards}
           />


            <Button>
                <ButtonTitle>Confirmar</ButtonTitle>
            </Button>

            <SecondaryButton>
                <SecondaryButtonText>Cancelar</SecondaryButtonText>
            </SecondaryButton>
        </Container>
    )
}