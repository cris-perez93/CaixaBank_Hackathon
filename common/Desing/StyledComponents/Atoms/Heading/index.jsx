import styled, { css } from 'styled-components'
import '@fontsource/montserrat'

// this code is available too for react-native
/* ex: const Wrapper = styled.View`
  ${wrapperButton}
  `
  */

const heading = css`
  font-family: 'Montserrat', sans-serif;
  font-size: ${props => props.title ? '20px' : '14px'};
  font-weight: ${props => props.title ? 600 : 'normal'};
  margin-bottom:${props => props.title ? '5px' : '0px'};
  color: ${props => props.primary ? '#6979F8' : '#000'};
  color: ${props => props.secondary ? '#8C8CA1' : '#000'};
  color: ${props => props.tertiary ? '#4AAF05' : '#000'};

`

export const Heading = styled.div`
  ${heading}
`
