import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { HistoricItem } from "../../components/HistoricItem";
import { SubHighlight } from "../../components/SubHighlight";
import { Container } from "./styles";
import { FlatList } from 'react-native'
import { useState } from "react";
import { EmptyList } from "../../components/EmptyList";

export function Historic() {
    const [ dates, setDates ] = useState<string[]>(['01/11/2022', '16/11/2022'])

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
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoricItem 
                        title={item}
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