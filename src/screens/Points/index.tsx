import { useState } from "react";
import { AddressCard } from "../../components/AddressCard";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { SubHighlight } from "../../components/SubHighlight";
import { Container } from "./styles";
import { FlatList } from 'react-native'
import { EmptyList } from "../../components/EmptyList";
import { useEffect } from 'react'
import { apiUrl } from "../../utils/api";

export type Deposit = {
    id: string 
    user_id: string
    address: string
    danger_items: boolean
    status: string
    created_at: Date
}

export function Points() {
    const [ points, setPoints ] = useState<Deposit[]>([])

    async function getDeposits() {
        const response = await fetch(`${apiUrl}/gathering`) 
        const data = await response.json()

        setPoints(data)
    }

    useEffect(() => {
        getDeposits()
    }, [points])

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
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <AddressCard 
                        address={item.address}
                        idToDone={item.id}
                        danger={item.danger_items}
                    />
                )}
                style={{ marginTop: 12 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={points.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <EmptyList 
                        message='Ainda não há pontos de coleta cadastrados. Volte daqui alguns instantes!'
                    />
                )}
            />
        </Container>
    )
}