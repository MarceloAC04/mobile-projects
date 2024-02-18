import { Container } from "../../components/Container/Styles"
import { Calendar } from "../../components/Calendar/Calendar";
import { StatusButton, StatusButtonContainer, StatusButtonText } from "../../components/StatusButton/Styles"
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { FlatList } from "react-native";
import { useState } from "react";

const data = [
    { id: '1', img: require('../../assets/foto-de-perfil-2.png'), name: 'Nicole Sarga', age: '22 anos', query: 'Rotina', schedule: '14:00', text: 'Cancelar' },
    { id: '2', img: require('../../assets/foto-de-perfil.png'), name: 'Richard Kosta', age: '28 anos', query: 'Urgência', schedule: '15:00', text: 'Cancelar' }
    // Adicione mais itens aqui...
];
const data2 = [
    { id: '1', img: require('../../assets/foto-de-perfil-2.png'), name: 'Nicole Sarga', age: '22 anos', query: 'Rotina', schedule: '14:00', text: 'Ver Prontuário' },
    { id: '2', img: require('../../assets/foto-de-perfil.png'), name: 'Richard Kosta', age: '28 anos', query: 'Urgência', schedule: '15:00', text: 'Ver Prontuário' },
    // Adicione mais itens aqui...
];
const data3 = [
    { id: '1', img: require('../../assets/foto-de-perfil.png'), name: 'Richard Kosta', age: '28 anos', query: 'Urgência', schedule: '15:00', text: '' }
    // Adicione mais itens aqui...
];


export const HomeMedic = () => {
    const [press, setPress] = useState(0);

    function isPress() {
        if (press === 0) {
            return data
        }
        else if (press === 1)
        {
            return data2
        }
        else {
            return data3
        }
    }

    return (
        <Container>
            <Header />
            <Calendar />

            <StatusButtonContainer>
                <StatusButton onPress={() => setPress(0)} style={{ backgroundColor: press === 0 ? "#607EC5" : null}}>
                    <StatusButtonText style={{ color: press === 0 ? 'white' : '#607EC5'}}>Agendadas</StatusButtonText>
                </StatusButton>

                <StatusButton onPress={() => setPress(1)} style={{ backgroundColor: press === 1 ? "#607EC5" : null}}>
                    <StatusButtonText style={{ color: press === 1 ? 'white' : '#607EC5'}}>Realizadas</StatusButtonText>
                </StatusButton>

                <StatusButton onPress={() => setPress(2)} style={{ backgroundColor: press === 2 ? "#607EC5" : null}}>
                    <StatusButtonText style={{ color: press === 2 ? 'white' : '#607EC5'}}>Canceladas</StatusButtonText>
                </StatusButton>
            </StatusButtonContainer>
            

            <FlatList
                data={isPress()}
                renderItem={({ item }) => (
                    <Card
                        img={item.img}
                        name={item.name}
                        age={item.age}
                        query={item.query}
                        schedule={item.schedule}
                        text={item.text}
                    />
                )}
            />
        </Container>
    )
}