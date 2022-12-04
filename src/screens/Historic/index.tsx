import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { HistoricItem } from "../../components/HistoricItem";
import { SubHighlight } from "../../components/SubHighlight";
import { Container } from "./styles";
import { FlatList } from 'react-native'
import { useState } from "react";

export function Historic() {
    const [ dates, setDates ] = useState<string[]>(['04/11/2022', '05/11/2022', '06/11/2022', '07/11/2022', '08/11/2022', '09/11/2022', '10/11/2022'])

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
            />

        </Container>
    )
}