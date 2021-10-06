import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import * as Variables from "./Variables";


const Btn = styled(Link)`
	background: ${Variables.ColorTuna};
	color: #fff;
	font-size: 24px;
	line-height: 28px;
    align-items: center;
    border-radius:100px;
    display: flex;
    justify-content: flex-start;
    padding:16px 24px;
    margin-top: ${props => props.size};
    svg{
        margin-left:15px;
    }
`;

const Button = ({ mtop, href, children }) => {
	return (
        <Btn size={ mtop } to={href}>
			{children}{" "}
			<svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1.5L25 25.5" stroke="CurrentColor" strokeWidth="2" strokeMiterlimit="10" />
				<path d="M14.7143 25.4999H25V15.2142" stroke="CurrentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
			</svg>
		</Btn>
	);
};

export default Button;
