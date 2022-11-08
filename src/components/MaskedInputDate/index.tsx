import { TextInputProps } from 'react-native';
import { Container, InputContainer, Label } from './styles';

type InputProps = TextInputProps & {
  label: string;
  short?: boolean;
}

export const MaskedInputDate = ({ label, short = false, ...rest }: InputProps) => {
  return (
    <Container short={short}>
      <Label>{label}</Label>
      <InputContainer type='datetime' options={{format: 'DD/MM/YYYY'}}  {...rest} /> 
    </Container>
  )
}