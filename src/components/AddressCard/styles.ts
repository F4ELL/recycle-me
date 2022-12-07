import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    width: 100%;
    height: 56px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    margin-bottom: 12px;
`

export const Address = styled.Text`
    flex: 1;

    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`

type IconProps = {
    colorIcon: boolean
}

export const Icon = styled(MaterialIcons).attrs<IconProps>(({ theme, colorIcon }) => ({
    size: 24,
    color: colorIcon ? theme.COLORS.RED : theme.COLORS.WHITE
}))`
    margin-left: 16px;
    margin-right: 8px;
`