import styled from 'styled-components';
import { baseCss, padding } from './baseCSS';

const BaseButton = styled.button`
color:#222;
${padding};
${baseCss};
color:${({ theme }) => theme.color};
background-color:${(props) => props.theme.backgroundColor};
cursor:pointer;
text-decoration:none;
border:3px solid #222;
border-radius:10px;
`;

export default BaseButton;
