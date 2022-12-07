import { Button } from "../Button";
import { SubHighlight } from "../SubHighlight";
import { Container, ModalButtonsArea, TextWarning } from "./styles";
import { Alert, TouchableOpacityProps } from 'react-native'
import { CloseButton } from "../CloseButton";
import { ModalButton } from "../ModalButton";
import { useContext, useEffect, useState } from "react";
import { apiUrl } from "../../utils/api";
import { getLocationUser } from '../../utils/location'
import { UserContext } from "../../contexts/auth";

type Props = TouchableOpacityProps & {
    toogleModal: () => void
}

export function ModalItem({ toogleModal, ...rest }: Props) {
    const [ type, setType ] = useState('chill')
    const { user } = useContext(UserContext)

    function hiddenModal() {
        toogleModal()
    }

    function getPositionUser() {
        getLocationUser()
    }

    function sendLocation() {
        
        return fetch(`${apiUrl}/deposit`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id: user?.id, address: user?.address, danger_items: type === 'danger' })
        })
    }

    function handleSendLocation() {
        sendLocation()
        .then(response => response.json())
        .then(data => data)

        Alert.alert('Sucesso!', 'Aguarde que em instantes seu lixo será coletado.')
        hiddenModal()
    }

    useEffect(() => {
        getPositionUser()
    }, [])

    return (
        <Container>
            <CloseButton 
                onPress={hiddenModal}
            />    

            <SubHighlight 
                title='Detalhes'
                subtitle='Selecione abaixo para garantir a segurança dos coletores'
            />

            <TextWarning>
                Possui algum objeto cortante?
            </TextWarning>

            <ModalButtonsArea>
                <ModalButton 
                    title='Não!'
                    iconName='eco'
                    style={{ marginRight: 4 }}
                    onPress={ () => setType('chill') }
                    isActive={ type === 'chill' }
                />

                <ModalButton 
                    title='Sim!'
                    iconName='warning'
                    onPress={ () => setType('danger') }
                    isActive={ type === 'danger' }
                />
            </ModalButtonsArea>            

            <Button 
                title="Enviar localização"
                onPress={handleSendLocation}
            />
        </Container>
    )
}