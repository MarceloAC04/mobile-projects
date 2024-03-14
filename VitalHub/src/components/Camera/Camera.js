import { Camera, CameraType } from 'expo-camera'
import { ButtonCapture, ButtonExit, ButtonFlip, TextFlip, ViewButton, ViewFlip } from "./Styles"
import { Container } from '../Container/Styles'
import { Modal } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react'

export const AppCamera = ({ visibleCamera, type, onPressType, onPressExit }) => {
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.front)

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

            //   const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
        })();
    }, [])
    return (
        <Modal
            visible={visibleCamera}
            animationType='slide'
            transparent={false}
        >
            <Container>
                <Camera
                    type={cameraType}
                    style={{ flex: 1, width: '100%', height: '80%' }}
                >
                    <ViewFlip>
                        <ButtonFlip onPress={() => setCameraType(cameraType == CameraType.front ? CameraType.back : CameraType.front)}>
                            <TextFlip>Trocar</TextFlip>
                        </ButtonFlip>
                    </ViewFlip>
                </Camera>
                <ViewButton>
                    <ButtonCapture>
                        <FontAwesome name='camera' size={23} color={'#fff'} />
                    </ButtonCapture>
                    <ButtonExit onPress={onPressExit}>
                        <Ionicons name="exit-outline" size={27} color="#fff" />
                    </ButtonExit>
                </ViewButton>
            </Container>
        </Modal>
    )
}