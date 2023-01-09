import styled from "styled-components";

// Create a Wrapper component that'll render a <header> tag with some styles
const Wrapper = styled.footer`
  padding: 0.5em 1em;
  background: #dddee1;
  width: 100%;
`;

const ButtonChart = styled.button`
  padding: 0.5em 1em;
  margin: 1em 0;
  background: #017eff;
  color: #fff;
  border-radius: 5px;
`;

const Footer = () => {
  return (
    <Wrapper style={{ position: "absolute", bottom: 0 }}>
      <ButtonChart>GENERATE CHART</ButtonChart>
    </Wrapper>
  );
};

export default Footer;
