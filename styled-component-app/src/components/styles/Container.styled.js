import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  background-color: blue;
  margin-top: 40px;
  color: ${({cor}) => cor ? cor : 'red'};
`

export const ContainerRed = styled(Container)`
  background-color: red;
  color: blue;
`

export const Input = styled.input.attrs({type:'text'})`
  border: 2px solid purple;
  font-size: 1.2rem;
  line-height: 1.5;
  color: red;

  &:focus{
    outline: 2px solid lime;
  }
`

export const Label = styled.label`
  padding: 8px;
`

export const LabelText = styled.span`
  ${Input}:focus + && {
    color: black;
  }
`