import { TouchableOpacityProps } from 'react-native';
import { Button, ButtonStatus, ButtonStyleProps, ButtonText, Container } from "./styles";

type ButtonDietProps = TouchableOpacityProps & { 
  type?: ButtonStyleProps;
  title: string;
}

export const ButtonDiet = ({ type, title, ...rest}: ButtonDietProps) => {
  return (
    <Container>
      <Button type={type} {...rest}>
        <ButtonStatus title={title} />
        <ButtonText>
          {title}
        </ButtonText>
      </Button>
    </Container>
  )
}