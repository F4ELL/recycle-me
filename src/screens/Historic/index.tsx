import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { HistoricItem } from "../../components/HistoricItem";
import { SubHighlight } from "../../components/SubHighlight";
import { Container } from "./styles";
import { FlatList } from 'react-native'
import { useContext, useEffect, useState } from "react";
import { EmptyList } from "../../components/EmptyList";
import { UserContext } from "../../contexts/auth";
import { apiUrl } from "../../utils/api";
import { Deposit } from "../Points";
import { formatDateString } from "../../utils/formatDate";

export function Historic() {
    const [ dates, setDates ] = useState<Deposit[]>([])
    const { user } = useContext(UserContext)

    async function loadDeposits() {
        const response = await fetch(`${apiUrl}/gathering`) 
        const data = await response.json()

        setDates(data)
    }

    useEffect(() => {
        loadDeposits()
    }, [dates])

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
                title='Histórico'
            />

            <FlatList 
                data={dates}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <HistoricItem 
                        title={item.created_at.toString()}
                    />
                )}
                style={{ marginTop: 12 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={dates.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <EmptyList 
                        message='Seu histórico de depósitos está vazio! Que tal reciclar seu lixo agora?'
                    />
                )}
            />

        </Container>
    )
}