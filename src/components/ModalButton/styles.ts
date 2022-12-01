import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

type ModalButtonProps = {
    isActive: boolean
}

export const Container = styled(TouchableOpacity)<ModalButtonProps>`
    flex: 1;

    background-color: transparent;
    border: ${({ theme, isActive }) => isActive ? theme.COLORS.GREEN_500 : theme.COLORS.GRAY_500};
    border-radius: 6px;
    
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    padding: 16px;    
`

export const Title = styled.Text<ModalButtonProps>`
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.WHITE : theme.COLORS.GRAY_400};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const Icon = styled(MaterialIcons).attrs<ModalButtonProps>(({ theme, isActive }) => ({
    size: 12,
    color: isActive ? theme.COLORS.WHITE : theme.COLORS.GRAY_400
}))`
    margin-right: 3px;
`