import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 80%;
    height: 300px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 16px;

    padding: 32px 24px 24px;
    position: relative;
`
