
import { Container, Title, SubTitle, DietImage } from "./styles";

import dietOutImage from '../../assets/outDiet.png'
import { Button } from "@components/Button";

export const FeedbackOutDiet = () => {
  return (
    <Container>
      <Title>
        Que pena!
      </Title>

      <SubTitle>
        Você <SubTitle style={{fontWeight: 'bold'}}>saiu da dieta</SubTitle>, mas continue se esforçando e não desista!
      </SubTitle>

      <DietImage source={dietOutImage}  />

      <Button title="Ir para página inicial" />

    </Container>
  )
}