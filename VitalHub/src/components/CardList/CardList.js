import { CancelCard,RealizedCard, ScheduleCard } from "../../components/Card/Card";
import { FlatList } from "react-native";

export const CardList = ({ status, verify }) => {
    if (status === "pendente") {
        return (
            <FlatList
                data={verify}
                renderItem={({ item }) => (
                    <ScheduleCard
                        img={item.img}
                        name={item.name}
                        age={item.age}
                        query={item.query}
                        schedule={item.schedule}
                    />
                )}
            />
        )
    } else if (status === "realizada") {
        return (
            <FlatList
                data={verify}
                renderItem={({ item }) => (
                    <RealizedCard
                        img={item.img}
                        name={item.name}
                        age={item.age}
                        query={item.query}
                        schedule={item.schedule}
                    />
                )}
            />
        )
    } else {
        return (
            <FlatList
                data={verify}
                renderItem={({ item }) => (
                    <CancelCard
                        img={item.img}
                        name={item.name}
                        age={item.age}
                        query={item.query}
                        schedule={item.schedule}
                    />
                )}
            />
        )
    }
}