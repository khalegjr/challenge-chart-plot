import styled from "styled-components";

interface IProps {
  name?: string;
}

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 2em;
  text-align: left;
`;

// Create a Wrapper component that'll render a <header> tag with some styles
const Wrapper = styled.header`
  padding: 0.5em 1em;
  background: #dddee1;
`;

const Header: React.FC<IProps> = ({ name }) => {
  return (
    <Wrapper>
      <Title>{name || "Júnior"}'s Challenge</Title>
    </Wrapper>
  );
};

export default Header;
