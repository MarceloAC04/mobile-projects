import { Container } from "../../components/Container/Styles"
import { ClinicSelectCard } from "../../components/Card/Card"
import { Title } from "../../components/Title/Styles"


export const ClinicSelect = () => {
    return (
        <Container>
            <Title>Selecionar Clínica</Title>
            <ClinicSelectCard />
        </Container>
    )
}