import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 56px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    padding: 12px;
    margin-bottom: 12px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

    margin-left: 12px;
`

