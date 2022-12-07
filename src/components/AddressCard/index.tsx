import { Alert } from "react-native";
import { Deposit } from "../../screens/Points";
import { apiUrl } from "../../utils/api";
import { ButtonIcon } from "../ButtonIcon";
import { Address, Container, Icon } from "./styles";

type Props = {
    address: string
    idToDone: string
    danger: boolean
    setPoints: React.Dispatch<React.SetStateAction<Deposit[]>>
}

export function AddressCard({ address, idToDone, danger, setPoints }: Props) {

    function handleDone() {
        Alert.alert('Coleta', 'A coleta desse lixo já foi realizada?', [
            {
                text: 'Não',
            },
            {
                text: 'Sim',
                onPress: () => setDepositAsDone()
            }
        ])
    }

    
    async function setDepositAsDone() {
        const response = await fetch(`${apiUrl}/gathering`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: idToDone })
        })

        const data = await response.json()
        setPoints(data)
        console.log(data)
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