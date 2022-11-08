import styled, { css } from "styled-components/native";


export const Container = styled.View`
  margin: 40px 0 8px;
`

export const Label = styled.Text`

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_900};
  `}
`;