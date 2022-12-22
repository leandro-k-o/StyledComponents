import react from "react";  
import { StyledHeader } from "./styles/StyledHeader.styled";

const Header = () => {
  return (
    <StyledHeader>
      <div>LOGO</div>
      <nav>
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
        <li>Item VSCode/GitHib</li>
      </nav>
    </StyledHeader>
  );
}

export default Header;
