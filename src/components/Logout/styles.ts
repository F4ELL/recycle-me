import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
    width: 100%;

    position: absolute;
    bottom: 40px;

    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

    margin-right: 2px;
`