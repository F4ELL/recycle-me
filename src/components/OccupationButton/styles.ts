import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

type ButtonOccupationProps = {
    isActive: boolean
}

export const Container = styled(TouchableOpacity)<ButtonOccupationProps>`
    width: 100%;

    min-height: 56px;
    max-height: 56px;    

    background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_700};

    border-radius: 6px;

    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`