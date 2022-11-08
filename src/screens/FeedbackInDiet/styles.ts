import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
    color: ${theme.COLORS.GREEN_DARK};
  `}
`;

export const SubTitle = styled.Text`
  margin: 8px 0 40px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_900};
  `}
`;

export const DietImage = styled.Image`
  margin-bottom: 32px;
`;

