import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
    justify-content: center;
    align-items: center;

    margin-top: 32px;
`

export const Message = styled.Text`
    text-align: center;

    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GRAY_300
}))`
    margin-bottom: 12px;
`