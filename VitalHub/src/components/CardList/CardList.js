import { AppointmentCard } from "../../components/Card/Card";
import { ModalAppointment } from "../Modal/Modal";
import { ListCard } from "./Styles";
import { useState } from "react";

export const CardList = ({ status, cardsData }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => status == item.situation && (
                <>
                    <AppointmentCard
                        situation={item.situation}
                        img={item.img}
                        onPressAppoiment={() => setModalVisible(true)}
                        onPressCancel={() => setModalVisible(true)}
                        name={item.name}
                        age={item.age}
                        query={item.query}
                        schedule={item.schedule}
                        email={item.email}
                        crm={item.crm}
                        speacialty={item.speacialty}
                    />
                    <ModalAppointment
                        visible={modalVisible}
                        onPress={() => setModalVisible(false)}
                        animation={'fade'}
                        transparent={true}
                        img={item.img}
                        name={item.name}
                        age={item.age}
                        email={item.email}
                        situation={item.situation}
                    />
                </>
            )}
        />
    )
}