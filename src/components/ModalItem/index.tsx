import { Button } from "../Button";
import { SubHighlight } from "../SubHighlight";
import { Container, ModalButtonsArea, TextWarning } from "./styles";
import { TouchableOpacityProps } from 'react-native'
import { CloseButton } from "../CloseButton";
import { ModalButton } from "../ModalButton";
import { useState } from "react";

type Props = TouchableOpacityProps & {
    toogleModal: () => void
}

export function ModalItem({ toogleModal, ...rest }: Props) {
    const [ type, setType ] = useState('chill')

    function hiddenModal() {
        toogleModal()
    }

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
            />
        </Container>
    )
}