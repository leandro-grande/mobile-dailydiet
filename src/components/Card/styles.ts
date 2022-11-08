import styled, { css } from "styled-components/native";

export type ButtonStyleProps = 'normal' | 'in' | 'out'

type ButtonProps = {
  type: ButtonStyleProps;
  short?: boolean;
}

export const Container = styled.View<ButtonProps>`
  width: 100%;
  flex: ${({ short }) => short ? 1 : 'none'};
  margin-bottom: 12px;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content:  center;

  background-color: 
  ${({theme, type}) => type === 'normal' 
    ? theme.COLORS.GRAY_200
    : type === 'in'  
     ? theme.COLORS.GREEN_LIGHT
     : theme.COLORS.RED_LIGHT};

`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_900};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;
  margin-top: 8px;
  color: ${({theme}) => theme.COLORS.GRAY_800};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR}
`;