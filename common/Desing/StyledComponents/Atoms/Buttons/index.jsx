import ButtonLogo from '../../../../static/Small.png'
import styled, { css } from 'styled-components'
import propTypes from 'prop-types'
// this code is available too for react-native
/* ex: const Wrapper = styled.View`
  ${wrapperButton}
  `
  */

const button = css`
  cursor: pointer;
  width:max-content;
  top:10px;
  right:10px;
  position:absolute ;

  `

export const Button = styled.div`
  ${button}
  `

export const Buttondots = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={ButtonLogo}/>
    </Button>
  )
}

Buttondots.propTypes = {
  onClick: propTypes.func
}

Buttondots.defaultProps = {
  onClick: () => { alert('click') }
}

const buttonmobile = css`
  cursor: pointer;
  width:max-content;
  padding:10px 90px ;
  border-radius:31px;
  background-color:${props => props.primary ? '#6979F8' : 'transparent'};
  color:${props => props.primary ? '#fff' : '#6979F8'};
  font-family:'Montserrat', sans-serif;
  transition: all 0.3s ease-in-out;
  border:${props => props.primary ? '1px solid #6979F8' : '1px solid #6979F8'};
  &:hover{
    background-color:${props => props.primary ? 'transparent' : '#6979F8'};
    color: ${props => props.primary ? '#6979F8' : '#fff'};
    
  }

`

export const ButtonMobile = styled.div`
  ${buttonmobile}
`

export const ButtonApp = ({ onClick, children, primary }) => {
  return (
    <ButtonMobile primary={primary} onClick={onClick}>
      {children}
    </ButtonMobile>
  )
}

ButtonApp.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node,
  primary: propTypes.bool
}

ButtonApp.defaultProps = {
  onClick: () => { alert('click') },
  primary: true
}
