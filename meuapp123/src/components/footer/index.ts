import styled from "styled-components";

const WrapperFooter = styled.section`
  background-color: ${(props)=> props.theme.backgroundColor};
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const FooterDiv = styled.div`
  height: 25%;
   width: 25%;     
   margin-left: 10%;
  
 
  `

const FooterIcon = styled.span`
  font-size: 3rem;
  color: ${(props) => props.theme.primaryColor};
  padding: 4px

`;

const LinkFooter = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor};
    font-size: 1.6rem;
`


export {WrapperFooter, FooterDiv, FooterIcon, LinkFooter }