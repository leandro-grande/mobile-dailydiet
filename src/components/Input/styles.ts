import { TextInput } from 'react-native';
import styled, { css } from "styled-components/native";
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View<{short: boolean}>`
  flex: ${({ short }) => short ? 1 : 'none'};
`;

export const Label = styled.Text`
  margin-bottom: 4px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_900};
  `}
`;

export const InputContainer = styled(TextInput)`
  height: 50px;
  margin-bottom: 24px;    
  border-radius: 6px;
  padding: 12px 14px;
  

  ${({theme}) => css`
    border: 1px solid ${theme.COLORS.GRAY_400};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.MD};
    color: ${({theme}) => theme.COLORS.GRAY_900};
  `}
`;

