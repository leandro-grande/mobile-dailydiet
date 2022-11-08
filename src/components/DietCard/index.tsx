import { TouchableOpacityProps } from 'react-native';
import { Container, IconArrowUpRight, PercentText, Subtitle } from "./styles";

type DietCardProps = TouchableOpacityProps & {
  percent: number;
  icon?: boolean;
}

export const DietCard = ({ percent, icon, ...rest }: DietCardProps) => {
  return (
    <Container percent={percent} {...rest}>
      { icon && <IconArrowUpRight percent={percent} /> }

      <PercentText>
        {percent}%
      </PercentText>

      <Subtitle>
        das refeições dentro da dieta
      </Subtitle>
    </Container>
  )
}