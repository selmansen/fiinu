import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import MenuLink from "./MenuLink";
import { ColorTuna } from "./Variables";

import LogoBlack from "../images/fiinu-logo-black.svg";

const FooterStyle = styled.footer`
	background: #fff;
	padding: 88px 0 52px;
	.container {
		justify-content: space-between;
		align-items: center;
		display: flex;
	}
`;
const Menu = styled.div`
	display: flex;
`;

const Footer = () => (
	<FooterStyle>
		<div className="container">
			<Link to="/">
				<img src={LogoBlack} alt="Fiinu Logo" />
			</Link>
			<Menu>
				<MenuLink color={ColorTuna} />
			</Menu>
		</div>
	</FooterStyle>
);

export default Footer;
