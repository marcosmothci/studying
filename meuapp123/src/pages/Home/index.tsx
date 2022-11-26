import { Banner, TitleBanner } from "../../components/banner"
import { WrapperIcons, DivIcon, Icon, TextDescription, Title } from "../../components/SectionIcons"
import { HiComputerDesktop, HiOutlineCheckCircle } from 'react-icons/hi2'
import { RiStackLine } from 'react-icons/ri'
import { ContentDiv, ContentImg, ContentTitle, WrapperContent, ContentText } from "../../components/content"
import {WrapperFooter, FooterDiv, FooterIcon, LinkFooter } from '../../components/footer'
import {BsFacebook} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'




function Home () {
    return (
         <>      
        <Banner size={60}>
            <TitleBanner> Minha primeira página com React</TitleBanner>
        </Banner>

        <WrapperIcons>           
            
            <DivIcon>
                <Icon>
                    <HiComputerDesktop/>
               </Icon>
                    <Title>Somente para desktop</Title>
                    <TextDescription>Vamos aprender como utilizar um Framework</TextDescription>             
            </DivIcon>

            <DivIcon>
                <Icon>
                    <RiStackLine/>
                </Icon>
                    <Title>Criado com componentes</Title>
                    <TextDescription>Utilizamos o Styled Componentes</TextDescription>               
            </DivIcon>          

            <DivIcon>
                <Icon>
                    <HiOutlineCheckCircle/>
                </Icon>
                    <Title>Facil aproveitamento</Title>
                    <TextDescription>Estamos no caminho</TextDescription>             
            </DivIcon>

        </WrapperIcons>

        <WrapperContent>
            <ContentDiv>
                <ContentImg src="./assets/images/tech.jpeg"/>                
            </ContentDiv>
            <ContentDiv>
                <ContentTitle>Lorem Ipsum</ContentTitle>
                <ContentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veritatis suscipit accusantium perspiciatis voluptas saepe vero iste cum, non inventore nobis corrupti earum facere id error autem cumque magni officiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae itaque cum expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio neque dignissimos saepe rem, ratione Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aspernatur maxime tempora consequatur doloribus, debitis culpa et iure similique explicabo sed cupiditate quae eligendi quas tenetur, ut ea. Cum, aspernatur! aliquam iure. Reprehenderit, iure, voluptates magnam veniam cum perferendis tempore error ad exercitationem doloremque necessitatibus nesciunt. odio odit ratione quibusdam aut eos hic nulla? Tempore dicta eligendi tempora suscipit facilis officiis! Quisquam, sequi neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, impedit eaque reprehenderit ipsam quasi dicta explicabo? Excepturi, explicabo sit inventore neque, fuga error quo nesciunt, natus quidem officia dolorem illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem earum doloremque, suscipit placeat nihil a nesciunt adipisci unde veritatis eaque, sint inventore nam delectus odit saepe commodi id deleniti!</ContentText>
            </ContentDiv>                           
        </WrapperContent>
        
        <WrapperContent >           
            <ContentDiv>
                <ContentTitle>Lorem Ipsum</ContentTitle>
                <ContentText>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente natus veritatis aliquid consequatur, sunt id corrupti iusto beatae labore blanditiis, non optio placeat inventore veniam? Amet dolores veniam reiciendis atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, natus sequi laboriosam accusamus placeat, eos amet sunt at maiores commodi accusantium non officiis id expedita qui et sit atque. Ullam? sit amet consectetur adipisicing elit. Perferendis veritatis suscipit accusantium perspiciatis voluptas saepe vero iste cum, non inventore nobis corrupti earum facere id error autem cumque magni officiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae itaque cum expedita odio odit ratione quibusdam aut eos hic nulla? Tempore dicta eligendi tempora suscipit facilis officiis! Quisquam, sequi neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, impedit eaque reprehenderit ipsam quasi dicta explicabo? Excepturi, explicabo sit inventore neque, fuga error quo nesciunt, natus quidem officia dolorem illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem earum doloremque, suscipit placeat nihil a nesciunt adipisci unde veritatis eaque, sint inventore nam delectus odit saepe commodi id deleniti!</ContentText>
            </ContentDiv>
            <ContentDiv>
                <ContentImg src="./assets/images/tech2.jpeg"/>                
            </ContentDiv>                           
        </WrapperContent>
        
        <WrapperContent>
            <ContentDiv>
                <ContentImg src="./assets/images/tech3.jpeg"/>
                
            </ContentDiv>
            <ContentDiv>
                <ContentTitle>Lorem Ipsum</ContentTitle>
                <ContentText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum fuga voluptates laudantium error. Amet reiciendis sed, magnam consectetur saepe vel tenetur nemo repellendus culpa atque dolorem numquam pariatur vitae eligendi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis esse totam modi amet reiciendis. Fugit iure iste, voluptatem voluptatibus repudiandae minima temporibus quod a inventore, maiores voluptates accusamus obcaecati fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veritatis suscipit accusantium perspiciatis voluptas saepe vero iste cum, non inventore nobis corrupti earum facere id error autem cumque magni officiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae itaque cum expedita odio odit ratione quibusdam aut eos hic nulla? Tempore dicta eligendi tempora suscipit facilis officiis! Quisquam, sequi neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, impedit eaque reprehenderit ipsam quasi dicta explicabo? Excepturi, explicabo sit inventore neque, fuga error quo nesciunt, natus quidem officia dolorem illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem earum doloremque, suscipit placeat nihil a nesciunt adipisci unde veritatis eaque, sint inventore nam delectus odit saepe commodi id deleniti!</ContentText>
            </ContentDiv>                           
        </WrapperContent>

        <Banner size={30}>
            <TitleBanner> Contato</TitleBanner>
        </Banner>

        <WrapperFooter>
            <FooterDiv>
               <LinkFooter>About &sdot; Contact &sdot; Terms of Use &sdot; Privacy Policy</LinkFooter>            
               <TextDescription> &copy; Your Website 2020. All right reserved.</TextDescription> 
            </FooterDiv>
            <FooterDiv>
                <FooterIcon> <BsFacebook/>  </FooterIcon>
                <FooterIcon> <FaTwitterSquare/>  </FooterIcon>
                <FooterIcon> <AiOutlineInstagram/>  </FooterIcon>
            </FooterDiv>
        </WrapperFooter>

        </>
        )
}

export default Home
