import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import MenuLink from "./MenuLink";
import { ColorTuna, ScreenMd, ScreenSm } from "./Variables";

import LogoBlack from "../images/fiinu-logo-black.svg";

const FooterStyle = styled.footer`
	background: #fff;
	padding: 88px 0 52px;
	@media (max-width: ${ScreenMd}) {
		padding: 36px 0px;
	}
	.container {
		justify-content: space-between;
		align-items: center;
		display: flex;
		@media (max-width: ${ScreenSm}) {
			display: block;
		}
	}
`;
const Menu = styled.div`
	display: flex;
	@media (max-width: ${ScreenSm}) {
		display: block;
		margin-top: 24px;
	}
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
