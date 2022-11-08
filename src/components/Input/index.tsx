import { TextInputProps } from 'react-native';
import { Container, InputContainer, Label } from './styles';

type InputProps = TextInputProps & {
  label: string;
  short?: boolean;
}

export const Input = ({ label, short = false, ...rest }: InputProps) => {
  return (
    <Container short={short}>
      <Label>{label}</Label>
      <InputContainer  {...rest} /> 
    </Container>
  )
}