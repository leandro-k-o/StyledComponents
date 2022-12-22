import { useState } from 'react'
import { Container, ContainerRed, Input, Label, LabelText } from './components/styles/Container.styled'
import styled from 'styled-components';
import Header from './components/Header';

const CustomContainer = styled(Container)`
  background-color: black;
  color: ${({cor})=> cor ? 'green' : 'white'};
  padding: 20px;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Container>
          <Label >
            <Input />
            <LabelText>Insira o nome</LabelText>
          </Label>
          
          <h1>Hello World</h1>
          <ContainerRed as="span">
            <h2>Olá Mundo</h2>
          </ContainerRed>
          <CustomContainer cor>
            <h3>CustomContainer</h3>
          </CustomContainer>
      </Container>
    </>
  )
}

export default App
