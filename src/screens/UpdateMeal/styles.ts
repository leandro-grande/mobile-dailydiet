import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_300}; 
`;

export const Header = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  position: relative;
`

export const BackButton = styled.TouchableOpacity`
  padding: 24px;
  position: absolute;
  z-index: 9;
`;

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({theme}) => ({
  color: theme.COLORS.GRAY_800,
  size: 32
}))`
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_800};
  `}
`;

export const Form = styled.View`
  flex: 1;
  padding: 48px 24px 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const FlexRow = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  margin-bottom: 8px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_900};
  `}
`;
