import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};

    padding: 16px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

    text-align: center;

    margin-bottom: 8px;
`

export const Subtitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

    text-align: center;
`