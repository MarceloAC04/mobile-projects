import { Container } from "../../components/Container/Styles"
import { Title } from "../../components/Title/Styles"
import { ClinicCardList } from "../../components/CardList/CardList"
import { Button, ButtonTitle } from "../../components/Button/Styles"
import { SecondaryButton, SecondaryButtonText } from "../../components/SecondaryButton/Styles"

const clinicCards = [
    {id: '1', clinicName: 'Clínica Natureh', score: '4,5', city: 'São Paulo', uf: 'SP', days: 'Seg-Sex'},
    {id: '2', clinicName: 'Diamond Pró-Mulher', score: '4,8', city: 'São Paulo', uf: 'SP', days: 'Seg-Sex'},
    {id: '3', clinicName: 'Clínica Villa Lobos', score: '4,2', city: 'Taboão', uf: 'SP', days: 'Seg-Sab'},
    {id: '4', clinicName: 'SP Oncologia Clínica', score: '4,2', city: 'Taboão', uf: 'SP', days: 'Seg-Sab'},
]


export const ClinicSelect = () => {
    return (
        <Container>
            <Title>Selecionar Clínica</Title>

            <ClinicCardList 
                cardsData={clinicCards}
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