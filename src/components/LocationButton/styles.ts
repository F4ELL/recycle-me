import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
    width: 160px;
    height: 160px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: 80px;
`