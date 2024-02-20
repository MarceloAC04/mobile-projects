import { AppointmentCard, CancelCard, RealizedCard, ScheduleCard } from "../../components/Card/Card";
import { FlatList } from "react-native";
import { ListCard } from "./Styles";

export const CardList = ({status, cardsData }) => {
    return(
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => status == item.situation && (
                <AppointmentCard
                    situation={item.situation}
                    img={item.img}
                    name={item.name}
                    age={item.age}
                    query={item.query}
                    schedule={item.schedule}
                    email={item.email}
                />
            )}
        />
    )
}