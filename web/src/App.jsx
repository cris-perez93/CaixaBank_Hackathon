import HeaderComponent from './components/Header'
import { Graphic, GraphicPie } from '../../common/Desing/StyledComponents/Molecules/Graphics'
import { ContainerTransactions, ContainerConversionComponent } from '../../common/Desing/StyledComponents/Molecules/Containers'
import styled, { keyframes } from 'styled-components'
import FakeAppBakground from '../../common/static/phone.png'
import { LogoNeo } from '../../common/Desing/StyledComponents/Atoms/Logo'
import { Heading } from '../../common/Desing/StyledComponents/Atoms/Heading'
import { ButtonApp } from '../../common/Desing/StyledComponents/Atoms/Buttons'
import { useState } from 'react'


const Animation = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`

const WrapperPhone = styled.div`
 width:390px;
 height:784px;
 background-image: url(${FakeAppBakground});
 background-size:cover;
 background-position:center;
 margin:0 auto ;
 margin-bottom:50px;
 margin-top:60px;
 padding:60px;
 display:flex;
 flex-direction:column ;
 align-items:center;
 justify-content:center ;
 gap:10px;
 overflow-x:hidden;
 animation: ${Animation} 1s ease-in-out;
`

const Wrapper = styled.div`
  display: flex;
  width:1300px ;
  max-width:90%;
  min-height:650px;
  margin: 0 auto;
  margin-top:60px;
  justify-content: space-evenly;
  flex-wrap:wrap;
  gap:20px;
  animation: ${Animation} 1s ease-in-out;
  



`
const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between ;
  max-width:80%;
  width:400px;
  height:100%;
  gap:20px;
`
const WrapperFlex = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap ;


@media (max-width: 768px) {
  margin-bottom:50px;
  justify-content:center ;
  gap:20px ;
}
`

const WrapContainerFlexApp = styled.div`
display:flex;
gap:10px;
`

const WrapGraphicMobile = styled.div`
 width:325px;
 height:300px;
 `

const ButtonVista = styled.div`
width:200px;
background-color: #6979F8;
padding: 10px 20px ;
border-radius: 50px;
margin:0 auto ;
text-align:center;
color:white;
font-family:'Montserrat', sans-serif;
cursor: pointer;

`

function App () {
  const [mobile, setMobile] = useState(false)

  const handleClick = () => {
    setMobile(!mobile)
  }

  return (
    <>
      <HeaderComponent />
      <ButtonVista onClick={handleClick}>{mobile ? 'Vista web' : 'Vista mobile'}</ButtonVista>
      {mobile
        ? <WrapperPhone>
        <LogoNeo/>
        <Heading title>Transaction history</Heading>
        <Heading >These are your monthly and daily actions</Heading>
        <WrapContainerFlexApp>
         <ContainerTransactions mobile quantity='35' date= 'last month'/>
         <ContainerTransactions mobile quantity='3' date= 'today'/>
        </WrapContainerFlexApp>
        <WrapGraphicMobile>
          <GraphicPie/>
        </WrapGraphicMobile>
        <ButtonApp>children</ButtonApp>
      </WrapperPhone>
        : <Wrapper>
       <WrapperLeft>
         <WrapperFlex>
         <ContainerTransactions mobile={false} quantity='35' date= 'last month'/>
         <ContainerTransactions mobile={false} quantity='3' date= 'today'/>
        </WrapperFlex>
        <ContainerConversionComponent/>
        </WrapperLeft>
       <Graphic/>
      </Wrapper>}

    </>
  )
}

export default App
