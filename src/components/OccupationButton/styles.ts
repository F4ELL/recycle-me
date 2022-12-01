import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

type ButtonOccupationProps = {
    isActive: boolean
}

export const Container = styled(TouchableOpacity)<ButtonOccupationProps>`
    width: 100%;

    min-height: 56px;
    max-height: 56px;    

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border: 1px solid ${({ theme, isActive }) => isActive ? theme.COLORS.GREEN_500 : 'transparent'};

    border-radius: 6px;

    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`