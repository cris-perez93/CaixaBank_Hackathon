/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components'
import '@fontsource/montserrat'
import { LogoNeo } from '../../Atoms/Logo'
import SettingsLogo from '../../../../static/settings.png'
import propTypes from 'prop-types'

// this code is available too for react-native
/* ex: const Wrapper = styled.View`
  ${wrapperButton}
  `
  */

const header = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:40px;

`

export const HeaderContainer = styled.div`
    ${header}
`

export const Header = ({ mobile }) => {
  return (
        <HeaderContainer>
            <LogoNeo />
            {mobile ? null : <img src={SettingsLogo}></img>}
        </HeaderContainer>
  )
}

Header.PropTypes = {
  mobile: propTypes.bool

}

Header.defaultProps = {
  mobile: false
}
