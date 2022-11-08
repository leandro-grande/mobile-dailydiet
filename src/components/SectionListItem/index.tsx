import { MealData } from "@screens/Home";
import { TouchableOpacityProps } from "react-native";
import { Container, Description, Divider, Hour, Status } from "./style";

type SectionListItemProps = TouchableOpacityProps & {
  item: MealData;
}

export const SectionListItem = ({ item, ...rest }: SectionListItemProps) => {
  return (
    <Container {...rest}>
      <Hour>{item.hour}</Hour>
      <Divider />
      <Description>
        {item.name}
      </Description>

      <Status type={item.type}/>
    </Container>
  )
}