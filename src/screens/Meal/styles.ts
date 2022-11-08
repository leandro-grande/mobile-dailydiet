import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

type DietProps = {
  type: "in" | "out";
}

export const Container = styled(SafeAreaView)<DietProps>`
  flex: 1;
  background-color: ${({theme, type}) => type === "in" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
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

export const HeaderTitle = styled.Text`
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

export const Contain = styled.View`
  flex: 1;
`;


export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
  `}
`;

export const Description = styled.Text`
  margin-top: 8px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `}
`;

export const DateTitle = styled.Text`
  margin-top: 24px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `}
`;

export const Date = styled.Text`
  margin-top: 8px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `}
`;

export const Status = styled.View`
  margin-top: 24px;
  max-width: 160px;
  flex-direction: row;
  padding: 8px 16px;
  background-color: ${({theme}) => theme.COLORS.GRAY_200};
  border-radius: 999px;

  align-items: center;
  justify-content: center;
`

export const StatusBadge = styled.View<DietProps>`
  height: 8px;
  width: 8px;
  border-radius: 999px;
  background-color: ${({theme, type}) => type === "in" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };

`

export const StatusText = styled.Text`
  margin-left: 12px;
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
  `}
`;

