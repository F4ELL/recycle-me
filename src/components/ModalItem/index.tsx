import { Button } from "../Button";
import { SubHighlight } from "../SubHighlight";
import { Container } from "./styles";
import { TouchableOpacityProps } from 'react-native'
import { CloseButton } from "../CloseButton";

type Props = TouchableOpacityProps & {
    toogleModal: () => void
}

export function ModalItem({ toogleModal, ...rest }: Props) {

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

            <Button 
                title="Enviar localização"
            />
        </Container>
    )
}