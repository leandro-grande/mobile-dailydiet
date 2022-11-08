import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from "styled-components/native";

type ButtonProps = {
  percent: number;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  padding: 20px 16px;
  background-color: ${({theme, percent}) => percent >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
  border-radius: 8px;

  align-items: center;
  justify-content:  center;
  position: relative;
`;

export const IconArrowUpRight = styled(ArrowUpRight).attrs<ButtonProps>(({theme, percent}) => ({
  color: percent >= 50  ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24,
}))<ButtonProps>`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const PercentText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE['1XL']};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_900};
  `}
`;

export const Subtitle = styled.Text`
  margin-top: 8px;
  color: ${({theme}) => theme.COLORS.GRAY_800};
`;