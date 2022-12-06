import { useNavigation } from '@react-navigation/native'
import { ButtonArea, Container, ModalArea } from "./styles";
import { Highlight } from "../../components/Highlight";
import { Header } from "../../components/Header";
import { SubHighlight } from "../../components/SubHighlight";
import { Logout } from "../../components/Logout";
import { LocationButton } from "../../components/LocationButton";
import { InfoCard } from "../../components/InfoCard";
import { Alert, Modal } from 'react-native'
import { useState } from 'react'
import { ModalItem } from '../../components/ModalItem';
import * as Location from 'expo-location'
import { apiUrl } from '../../utils/api';

export function HomeUser() {
    const [ modalVisible, setModalVisible ] = useState(false)

    const navigation = useNavigation()

    function handleStatisticsUser() {
        navigation.navigate('statisticsuser')
    }

    function handleHistoric() {
        navigation.navigate('historic')
    }

    function toogleModal() {
        setModalVisible(!modalVisible)
    }

    return (
        <Container>
            <Header 
                showBackButton
            />

            <Highlight 
                title='Recycle.me'
                subtitle='mais que uma obrigação, a reciclagem é uma necessidade'
            />

            <SubHighlight 
                title='Já reciclou seu lixo hoje?'
                subtitle='clique no botão abaixo para enviar a localização aos coletores'
            />

            <ButtonArea>
                <LocationButton 
                    onPress={toogleModal}
                    style={{ marginTop: 24 }}
                />
            </ButtonArea>


            <Modal
                animationType='slide'
                transparent
                visible={modalVisible}
                onRequestClose={toogleModal}                
            >
                <ModalArea>
                    <ModalItem 
                        toogleModal={toogleModal}
                    />
                </ModalArea>
            </Modal>


            <InfoCard 
                title='Histórico'
                iconName='timer'
                onPress={handleHistoric}
                style={{ marginTop: 24 }}
            />

            <InfoCard 
                title='Estatísticas'
                iconName='insights'
                onPress={handleStatisticsUser}
            />

            <Logout />
        </Container>
    )
}