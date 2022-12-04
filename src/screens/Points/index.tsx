import { useState } from "react";
import { AddressCard } from "../../components/AddressCard";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { SubHighlight } from "../../components/SubHighlight";
import { Container } from "./styles";
import { FlatList } from 'react-native'

export function Points() {
    const [ points, setPoints ] = useState<string[]>(['Rua Brasil', 'Rua Argentina', 'Rua Chile'])

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
                title='Pontos para coleta'
            />

            <FlatList 
                data={points}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <AddressCard 
                        address={item}
                    />
                )}
                style={{ marginTop: 12 }}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}