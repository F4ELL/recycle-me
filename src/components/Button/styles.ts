import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_500};

    border-radius: 6px;

    justify-content: center;
    align-items: center;    
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`