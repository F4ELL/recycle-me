import { apiUrl } from "../../utils/api";
import { ButtonIcon } from "../ButtonIcon";
import { Address, Container, Icon } from "./styles";

type Props = {
    address: string
    idToDone: string
}

export function AddressCard({ address, idToDone }: Props) {

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
        console.log(data)
    }

    return (
        <Container>
            <Icon 
                name='home'
            />

            <Address>
                {address}
            </Address>

            <ButtonIcon 
                onPress={setDepositAsDone}
            />

        </Container>
    )
}