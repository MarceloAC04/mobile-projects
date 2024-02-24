import SelectDropdown from "react-native-select-dropdown"
import { AntDesign } from '@expo/vector-icons';
import { LabelText } from "../LabelText/Styles"
import { StyleSheet, View } from "react-native";


export const SelectInput = ({textInput, textLabel }) => {
    return (
        <View style={styles.container}>
            <LabelText>{textLabel}</LabelText>
            <SelectDropdown
                data={['13:00', '14:00', '15:00', '16:00']}
                defaultButtonText={textInput}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonStyle={styles.button}
                buttonTextStyle={styles.buttonText}
                renderDropdownIcon={() => <AntDesign name="caretdown" size={24} color="#34898F" />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 25,
        marginBottom: 25,
        gap: 10,
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 8,
        borderColor: '#60BFC5',
        borderWidth: 2,
        width: '100%',
        height: 54,
        paddingLeft: 16,
        paddingRight: 16
    },
    buttonText: {
        color: '#34898F',
        fontSize: 16,
        fontFamily: 'MontserratAlternates_600SemiBold',
        textAlign: 'left'
    }
});