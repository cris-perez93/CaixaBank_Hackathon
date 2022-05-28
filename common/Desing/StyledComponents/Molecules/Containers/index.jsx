/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Heading } from '../../Atoms/Heading'
import { GraphicPie } from '../Graphics'
import { Buttondots } from '../../Atoms/Buttons'

// this code is available too for react-native
/* ex: const Wrapper = styled.View`
  ${wrapperButton}
  `
  */

const containerTransactions = css`
   width:${props => props.mobile ? '150px' : '180px'};
   height:145px;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   font-weight:700;
   font-family:'Montserrat', sans-serif;
   font-size:15px;
   border-radius:10px;
   background-color:white;
   box-shadow:0px 0px 5px 0px rgba(0,0,0,0.75);
   color: black;
`
const textContainer = css`
font-weight:${props => props.grey ? 'normal' : '600'};
color:${props => props.grey ? '#8C8CA1' : 'black'};

`

const numberContainer = css`
font-weight:600;
font-size:48px;
color: #6979F8 ;
`
export const Container = styled.div`
  ${containerTransactions}
`
export const Number = styled.p`
    ${numberContainer}
`
export const TextContainer = styled.p`
${textContainer}`

export const ContainerTransactions = ({ mobile, quantity, date }) => {
  return (
        <Container mobile={mobile}>
            <TextContainer>Transactions</TextContainer>
            <Number>{quantity}</Number>
            <TextContainer grey>{date}</TextContainer>
        </Container>
  )
}

ContainerTransactions.propTypes = {
  mobile: PropTypes.bool,
  children: PropTypes.node
}

ContainerTransactions.defaultProps = {
  mobile: true
}

const containerConversion = css`
width:100%;
height:490px;
position: relative;
padding:10px;
display:flex;
flex-direction:column;
border-radius:10px;
border: solid 1px #E6E6E6;

`
export const ContainerConversion = styled.div`
  ${containerConversion}
`

export const ContainerConversionComponent = ({ children, mobile }) => {
  return (
        <ContainerConversion>

            <Heading title>Conversion</Heading>
            <Buttondots/>

            <GraphicPie />
         </ContainerConversion>
  )
}
