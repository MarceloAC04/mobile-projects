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
            
            <Card
            img={require('../../assets/foto-de-perfil-2.png')}
            name={'Nicole Sarga'}
            age={"22 anos"}
            query={'Rotina'}
            schedule={'14:00'}
            />

            <Card
            img={require('../../assets/foto-de-perfil.png')}
            name={'Richard Kosta'}
            age={"28 anos"}
            query={'Urgência'}
            schedule={'15:00'}
            />

        </Container>
    )
}