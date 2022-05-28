import styled, { css } from 'styled-components'
import LogoImage from '../../../../static/logo.png'

// this code is available too for react-native
/* ex: const Wrapper = styled.View`
  ${wrapperButton}
  `
  */

const logoNeo = css`
   background-image:url(${LogoImage});
   background-size:contain;
   background-repeat:no-repeat ;
   background-position:center;
   width:180px;
   height:22px;

`

export const LogoNeo = styled.div`
  ${logoNeo}
`
