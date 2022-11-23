import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
` 

export const SignUpButton = styled(TouchableOpacity)`
    margin-top: 12px;
`

export const SignUpText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    
    text-align: center;
`
