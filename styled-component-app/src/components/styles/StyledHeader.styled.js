import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 40px 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80vw;

  & nav{
    display: flex;
    gap: 20px;

    li{
      list-style: none;
    }
  }
` 