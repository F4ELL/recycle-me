import { ButtonIcon } from "../ButtonIcon";
import { Address, Container, Icon } from "./styles";

type Props = {
    address: string
}

export function AddressCard({ address }: Props) {
    return (
        <Container>
            <Icon 
                name='home'
            />

            <Address>
                {address}
            </Address>

            <ButtonIcon />

        </Container>
    )
}