import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;

    align-items: center;
    justify-content: center;
`

export const LocaleButton = styled(TouchableOpacity)`
    width: 160px;
    height: 160px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: 50%;
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 96,
    color: theme.COLORS.GRAY_500
}))``