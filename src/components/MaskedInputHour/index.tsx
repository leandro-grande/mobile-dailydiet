import { TextInputProps } from 'react-native';
import { Container, InputContainer, Label } from './styles';

type InputProps = TextInputProps & {
  label: string;
  short?: boolean;
}

export const MaskedInputHour = ({ label, short = false, ...rest }: InputProps) => {
  return (
    <Container short={short}>
      <Label>{label}</Label>
      <InputContainer type='datetime' options={{format: 'HH:mm'}}  {...rest} /> 
    </Container>
  )
}