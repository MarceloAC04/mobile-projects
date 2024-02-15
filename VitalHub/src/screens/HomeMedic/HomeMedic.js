import { Container} from "../../components/Container/Styles"
import { Calendar } from "../../components/Calendar/Calendar";
import { StatusButton, StatusButtonContainer, StatusButtonText } from "../../components/StatusButton/Styles"
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";

export const HomeMedic = () => {
    return (
        <Container>
            <Header/>
            <Calendar/>

            <StatusButtonContainer>
                <StatusButton style={{backgroundColor: "#607EC5"}}>
                    <StatusButtonText style={{color: 'white'}}>Agendadas</StatusButtonText>
                </StatusButton>

                <StatusButton>
                    <StatusButtonText>Realizadas</StatusButtonText>
                </StatusButton>

                <StatusButton>
                    <StatusButtonText>Canceladas</StatusButtonText>
                </StatusButton>
            </StatusButtonContainer>

            <Card/>

        </Container>
    )
}