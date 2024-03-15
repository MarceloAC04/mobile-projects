import { Camera, CameraType } from 'expo-camera'
import { ButtonCapture, ButtonExit,ButtonModalPhotoView, ModalPhoto, ModalPhotoContainer, ViewButton } from "./Styles"
import { Container, ContainerIcons } from '../Container/Styles'
import { Alert, Modal } from 'react-native'
import { FontAwesome, FontAwesome6, Ionicons, AntDesign } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { ButtonModalAppointment } from '../Button/Button';
import { ButtonSecondary } from '../SecondaryButton/SecondaryButton';
import * as MediaLibrary from 'expo-media-library';

export const AppCamera = ({ visibleCamera, onPressExit}) => {
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
    const [openModalPhoto, setOpenModalPhoto] = useState(false)
    const cameraRef = useRef(null)
    const [photo, setPhoto] = useState(null)

    async function CapturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhoto(photo.uri)

            setOpenModalPhoto(true)
        }
    }

    function ClearPhoto() {
        setPhoto(null)

        setOpenModalPhoto(false)
    }

    async function SavePhoto() {
        if (photo) {
            await MediaLibrary.createAssetAsync(photo)
                .then(() => {
                    Alert.alert('Sucesso', 'foto salva na galeria')
                    setOpenModalPhoto(false)
                }).catch(erro => {
                    alert("Error ao processar foto")
                })
        }
    }

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
        })();
    }, [])
    return (
        <Modal
            visible={visibleCamera}
            animationType='slide'
            transparent={false}
        >
            {openModalPhoto ? (
                <ModalPhotoContainer>
                    <ContainerIcons>
                        <AntDesign onPress={() => ClearPhoto()} name="arrowleft" size={30} color="#49B3BA" />
                    </ContainerIcons>
                    <ModalPhoto source={{ uri: photo }} />

                    <ButtonModalPhotoView>
                        <ButtonModalAppointment onPress={() => SavePhoto()} placeholder={'Confirmar'}/>

                        <ButtonSecondary onPress={() => ClearPhoto()} placeholder='Refazer'/>
                    </ButtonModalPhotoView>
                </ModalPhotoContainer>
            ) : (
                <Container>
                    <Camera
                        ref={cameraRef}
                        type={cameraType}
                        style={{ flex: 1, width: '100%', height: '80%' }}
                    >
                    </Camera>
                    <ViewButton>
                        <ButtonCapture onPress={() => setCameraType(cameraType == CameraType.front ? CameraType.back : CameraType.front)}>
                            <FontAwesome6 name="camera-rotate" size={24} color="#fff" />
                        </ButtonCapture>
                        <ButtonCapture onPress={() => CapturePhoto()}>
                            <FontAwesome name='camera' size={23} color={'#fff'} />
                        </ButtonCapture>
                        <ButtonExit onPress={onPressExit}>
                            <Ionicons name="exit-outline" size={27} color="#fff" />
                        </ButtonExit>
                    </ViewButton>
                </Container>
            )}
        </Modal>
    )
}