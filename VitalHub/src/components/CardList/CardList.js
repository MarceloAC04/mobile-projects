import { AppointmentCard, ClinicSelectCard, MedicSelectCard } from "../../components/Card/Card";
import { ListCard } from "./Styles";
import { useState } from "react";

export const CardList = ({ status, cardsData }) => {
    return (
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => status == item.situation && (
                <AppointmentCard
                    id={item.id}
                    situation={item.situation}
                    img={item.img}
                    name={item.name}
                    age={item.age}
                    query={item.query}
                    schedule={item.schedule}
                    email={item.email}
                    crm={item.crm}
                    speacialty={item.speacialty}
                />
            )}
        />
    )
}

export const ClinicCardList = ({ cardsData }) => {
    return (
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                <ClinicSelectCard
                    id={item.id}
                    clinicName={item.clinicName}
                    score={item.score}
                    city={item.city}
                    uf={item.uf}
                    days={item.days}
                    select={item.select}
                />
            }
        />
    )
}

export const MedicSelectCardList = ({ cardsData }) => {
    return (
        <ListCard
            data={cardsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                <MedicSelectCard
                    id={item.id}
                    img={item.img}
                    medicName={item.medicName}
                    speciality={item.speciality}
                />
            }
        />
    )
}