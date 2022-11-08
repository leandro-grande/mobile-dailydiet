import styled, { css } from "styled-components/native";

export type ButtonStyleProps = 'in' | 'out' | "";

type ButtonProps = {
  type?: ButtonStyleProps;

}


export const Container = styled.View`
  flex: 1;
`

export const Button = styled.TouchableOpacity<ButtonProps>`
  max-height: 50px;
  min-height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: 'transparent';
  border-radius: 6px;

  ${({theme, type}) => css`
    background-color: ${ type === "" ? theme.COLORS.GRAY_200 
    : type === 'in' ?
    theme.COLORS.GREEN_LIGHT :
    theme.COLORS.RED_LIGHT
    };
    border-color: ${ type === "" ? theme.COLORS.GRAY_200 
    : type === 'in' ?
    theme.COLORS.GREEN_DARK :
    theme.COLORS.RED_DARK
    };;
  `}
`;

export const ButtonText = styled.Text`
  ${({theme}) => css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM};
    `}
`;

export const ButtonStatus = styled.TouchableOpacity<{title: string}>`
  height: 10px;
  width: 10px;
  border-radius: 999px;
  margin-right: 8px;

  ${({theme, title}) => css`
    background-color: ${title === 'Sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
  
`