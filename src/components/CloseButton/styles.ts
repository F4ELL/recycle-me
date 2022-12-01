import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
    width: 32px;
    height: 32px;

    position: absolute;
    top: 24px;
    right: 24px;

    align-items: center;
    justify-content: center;
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_200
}))``