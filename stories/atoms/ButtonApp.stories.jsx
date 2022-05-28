import { ButtonApp } from '../../common/Desing/StyledComponents/Atoms/Buttons'

export default {
  title: 'Atoms/Buttons/ButtonApp',
  component: ButtonApp
}

export const MobilePrimary = () => <ButtonApp primary>children</ButtonApp>
export const MobileSecondary = () => <ButtonApp primary= {false}>children</ButtonApp>
