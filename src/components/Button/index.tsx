import { useTheme } from "styled-components/native";
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, Container } from "./styles";
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: boolean;
  iconType?: 'add' | 'edit' | 'delete'
  ghost?: boolean;
}

export const Button = ({ icon, iconType, title, ghost = false, ...rest }: ButtonProps) => {
  const { COLORS } = useTheme();

  return (
    <Container ghost={ghost} {...rest}>
      { icon && (
        iconType === 'add' ? (
          <Plus size={16} color={COLORS.WHITE} />  
        ) :
        iconType === 'edit' ? (
          <PencilSimpleLine size={16} color={COLORS.WHITE} />  
        ) :
        (
          <Trash size={16} color={COLORS.GRAY_900} />  
        )
      )
      }
      <ButtonText ghost={ghost}>
       {title}
      </ButtonText>
    </Container>
  )
}