import styled from 'styled-components';
import BaseButton from './BaseButton';

const PrimaryButton = styled(BaseButton)`
background-color:${(props) =>
  props.variant === 'outline' ? 'white' : '#e74c3c'};
color:  ${(props) => (props.variant === 'outline' ? '#e74c3c' : 'white')};
&:hover{
  background-color:#bdc3c7
}`;



export default PrimaryButton;
