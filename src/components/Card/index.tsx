import { ViewProps } from 'react-native';
import { ButtonStyleProps, Container, Subtitle, Title } from "./styles";

type DietCardProps = ViewProps & {
  type?: ButtonStyleProps;
  short?: boolean;
  title: number;
  subtitle: string;
}

export const Card = ({ type = 'normal', short = false, title, subtitle }: DietCardProps) => {
  return (
    <Container type={type} short={short} >
      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}