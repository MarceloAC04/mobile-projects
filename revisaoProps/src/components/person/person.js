import { StyleSheet, Text, View } from "react-native";

//Component person
//Prpos: name, age

const Person = ({name, age}) => {
    return(
        <View style={styles.container}>
            <Text>Nome: {name}</Text>
            <Text>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#fde100',
    borderRadius: 5,
    padding: 10,
    margin: 10
  }
});


export default Person;