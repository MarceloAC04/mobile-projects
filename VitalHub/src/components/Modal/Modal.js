import { ModalStyle } from "./Styles"


export const Modal = ({animation, transparent, visible, onRequestClose}) => {
    return (
        <ModalStyle
            animationType={animation}
            transparent={transparent}
            visible={visible}
            onRequestClose={onRequestClose}>

        </ModalStyle>
    )
}