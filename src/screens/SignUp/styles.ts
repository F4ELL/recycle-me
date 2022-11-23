import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`

export const TitleArea = styled.View`
    width: 100%;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

    text-align: center;
`