import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`

export const ButtonArea = styled.View`
    width: 100%;

    justify-content: center;
    align-items: center;
`