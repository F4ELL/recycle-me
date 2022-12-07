import { Alert } from "react-native";
import { Deposit } from "../../screens/Points";
import { apiUrl } from "../../utils/api";
import { ButtonIcon } from "../ButtonIcon";
import { Address, Container, Icon } from "./styles";

type Props = {
    address: string
    idToDone: string
    danger: boolean
}

export function AddressCard({ address, idToDone, danger }: Props) {

    function handleDone() {
        Alert.alert('Coleta', 'A coleta desse lixo já foi realizada?', [
            {
                text: 'Não',
            },
            {
                text: 'Sim',
                onPress: () => handleMarkAsDone()
            }
        ])
    }
    
    function markAsDone(id: string) {

        return fetch(`${apiUrl}/gathering`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
    }

    function handleMarkAsDone() {
        markAsDone(idToDone)
        .then(response => response.json())
        .then(data => data)

        Alert.alert('Recolhido!', 'Lixo recolhido.')
    }

    return (
        <Container>
            <Icon 
                name={danger ? 'warning' : 'home'}
                colorIcon={danger}
            />

            <Address>
                {address}
            </Address>

            <ButtonIcon 
                onPress={handleDone}
            />

        </Container>
    )
}