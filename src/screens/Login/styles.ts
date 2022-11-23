import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
` 

export const SignUpButton = styled(TouchableOpacity)`
    flex: 1;

    margin-top: 12px;
`

export const SignUpText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    
    text-align: center;
`
