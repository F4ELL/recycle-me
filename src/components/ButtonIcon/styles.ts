import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_500
}))``