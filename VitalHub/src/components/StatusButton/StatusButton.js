import { StatusButton, StatusButtonText } from "./Styles"


export const FilterStatusButton = ({
    textButton,
    clickButton = false,
    onPress
}) => {
    return (
        <StatusButton clickButton={clickButton} onPress={onPress}>
            <StatusButtonText clickButton={clickButton}>{textButton}</StatusButtonText>
        </StatusButton>
    )
}