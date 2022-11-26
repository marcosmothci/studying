import styled from "styled-components";

const WrapperIcons = styled.section`
  background-color: ${(props)=> props.theme.backgroundColor};
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
`;

const DivIcon = styled.div`
  width: 25%;
  height: 80%;
  text-align: center;
  font-family: "MontSerrat", sans-serif;
`;

const Icon = styled.span`
  font-size: 6rem;
  color: ${(props) => props.theme.primaryColor}
`;

const Title = styled.h4`
  font-size: 2rem;
  color: #3a3a3a;
`;

const TextDescription = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.fontColor}
`;

export { WrapperIcons, DivIcon, Icon, Title, TextDescription };
