import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

type StatisticsProps = {
  percent: number;
}

export const Container = styled(SafeAreaView)<StatisticsProps>`
  flex: 1;
  background-color: ${({theme, percent}) => percent >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
`;

export const Header = styled.View`
  padding: 16px;
  position: relative;  
`

export const BackButton = styled.TouchableOpacity`
  padding: 8px;
  top: 16px;
  left: 16px;
  position: absolute;
  z-index: 99;
`;

export const ArrowLeftIcon = styled(ArrowLeft).attrs<StatisticsProps>(({theme, percent}) => ({
  color: percent >= 50  ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 32
}))<StatisticsProps>`
`;

export const Title = styled.Text`
  margin-bottom: 24px;
  text-align: center;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_900};
  `}
`;

export const StatisticArea = styled.View`
  flex: 1;
  padding: 32px 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const CardRowArea = styled.View`
  flex-direction: row;
`