import { Camera, CameraType } from 'expo-camera'
import { ButtonFlip, CameraApp, TextFlip, ViewFlip } from "./Styles"
import { Container } from '../Container/Styles'
import { useEffect, useState } from 'react'
import { Modal } from 'react-native'

export const AppCamera = ({visibleCamera}) => {
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)

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
                    cameraType={cameraType}
                    style={{ flex: 1, width: '100%', height: '80%' }}
                >
                    <ViewFlip>
                        <ButtonFlip onPress={() => setCameraType(cameraType == CameraType.front ? CameraType.back : CameraType.front)}>
                            <TextFlip>Trocar</TextFlip>
                        </ButtonFlip>
                        <ButtonFlip onPress={() => visibleCamera = false }>
                            <TextFlip>Sair</TextFlip>
                        </ButtonFlip>
                    </ViewFlip>
                </Camera>
            </Container>
        </Modal>
    )
}