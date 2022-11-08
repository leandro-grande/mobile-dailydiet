import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 14px 12px 14px;
  margin-bottom: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
`;

export const Hour = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_900};
  `}
`
export const Divider = styled.View`
  height: 14px;
  width: 1px;
  margin: 0 12px;
  background-color: ${({theme}) => theme.COLORS.GRAY_400};
`

export const Description = styled.Text`
  flex: 1;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_800};
  `}
`

export const Status = styled.View<{type: "" | 'in' | 'out'}>`
  height: 14px;
  width: 14px;
  border-radius: 999px;
  background-color: ${({theme, type}) => type === 'in' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID}
`