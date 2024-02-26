import SelectDropdown from "react-native-select-dropdown"
import RNPickerSelect from "react-native-picker-select"
import { AntDesign } from '@expo/vector-icons';
import { LabelText } from "../LabelText/Styles"
import { StyleSheet, View } from "react-native";

const dataTime = [
    { label: '13:00', value: '13:00' },
    { label: '14:00', value: '14:00' },
    { label: '15:00', value: '15:00' },
    { label: '16:00', value: '16:00' },
]

export const SelectInput = ({ textInput, textLabel }) => {
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

export const SelectInputPicker = ({ textInput, textLabel }) => {
    return (
        <View style={styles.container}>
            <LabelText>{textLabel}</LabelText>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={dataTime}
                placeholder={{ label: textInput, value: null }}
                Icon={() => <AntDesign name="caretdown" size={24} color="#34898F" />}
                style={{
                    viewContainer: {
                        justifyContent: 'center',
                        borderColor: '#60BFC5',
                        borderWidth: 2,
                        borderRadius: 5,
                        height: 53,
                        paddingLeft: 16,
                    },
                    iconContainer: {
                        bottom: 0,
                        right: 13
                    },
                    ...styles,
                    placeholder: {
                        color: '#34898F',
                        fontSize: 16,
                        fontFamily: 'MontserratAlternates_600SemiBold',
                        textAlign: 'justify'
                    }
                }}
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
    inputIOS: {
        color: '#34898F',
        fontSize: 16,
        fontFamily: 'MontserratAlternates_600SemiBold'
    },
    inputAndroid: {
        color: '#34898F',
        fontSize: 16,
        fontFamily: 'MontserratAlternates_600SemiBold',
        textAlign: 'left'
    }
});