
import { Container, Title, SubTitle, DietImage } from "./styles";

import dietInImage from '../../assets/inDiet.png'
import { Button } from "@components/Button";


export const FeedbackInDiet = () => {
  return (
    <Container>
      <Title>
        Continue Assim!
      </Title>

      <SubTitle>
        Você continua <SubTitle style={{fontWeight: 'bold'}}>dentro da dieta</SubTitle>. Muito bem!
      </SubTitle>

      <DietImage source={dietInImage}  />

      <Button title="Ir para página inicial" />

    </Container>
  )
}