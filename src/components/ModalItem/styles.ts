import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 80%;
    height: 350px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 16px;

    padding: 32px 24px 24px;
    position: relative;
`

export const TextWarning = styled.Text`
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

    text-align: center;

    margin-top: 32px;
`

export const ModalButtonsArea = styled.View`
    flex-direction: row;

    margin-top: 24px;
    margin-bottom: 24px;
`
