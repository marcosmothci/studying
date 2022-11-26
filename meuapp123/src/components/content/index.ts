import styled from 'styled-components'

const WrapperContent = styled.section`
  background-color: ${(props)=> props.theme.backgroundColor};
  width: 100%;
  height: 65vh;
  display: flex;  
`;

const ContentDiv = styled.div`  
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;  
  `
const ContentImg = styled.img`
width: 100%;
height: 100%;
`
const ContentTitle = styled.h4`
  font-size: 2rem;
  color: #3a3a3a;
  margin: 10% 10% 0 ;
  `;

const ContentText = styled.p`
  margin: 0 10% 0 10% ;
  font-size: 1.6rem;
  color: ${(props) => props.theme.fontColor}
`;

export {ContentDiv, ContentImg, WrapperContent, ContentText, ContentTitle}

