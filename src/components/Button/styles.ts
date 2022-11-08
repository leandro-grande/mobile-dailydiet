import { Plus } from 'phosphor-react-native';
import styled, { css } from "styled-components/native";

type ButtonProps = {
  ghost?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  padding: 16px 24px;
  background-color: ${({theme, ghost}) => ghost ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_800};
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_800};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  margin-left: 12px;

  ${({theme, ghost}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${ghost ? theme.COLORS.GRAY_800 : theme.COLORS.WHITE};
  `}
`;

