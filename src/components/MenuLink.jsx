import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { ScreenSm } from "./Variables";

const MenuLink = styled(Link)`
	color: ${(props) => props.theme.color};
	display: block;
	font-size: 18px;
	line-height: 28px;
	position: relative;
	transition: 0.3s;
	&:before {
		background-color: #5754ea;
		border-radius: 5px;
		content: "";
		height: 5px;
		left: 0;
		opacity: 0;
		position: absolute;
		top: 13px;
		transition: 0.3s;
		width: 5px;
	}
	+ a {
		margin-left: 24px;
		@media (max-width: ${ScreenSm}) {
			margin-left:0;
			margin-top:16px;
		}
	}
	&:hover {
		filter: blur(0px) !important;
	}
	&.active {
		&:before {
			left: -9px;
			opacity: 1;
		}
	}
`;

const MenuLinks = ({ color }) => {
	const [blur, setBlur] = useState(false);

	const handleEnter = () => setBlur(true);
	const handleLeave = () => setBlur(false);

	const handleStyle = {
		filter: `blur(${blur ? "2px" : "0px"})`
	};

	const theme = {
		color: color
	};

	return (
		<ThemeProvider theme={theme}>
			<MenuLink activeClassName="active" onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={handleStyle} to="/fintech-solutions">
				Fintech solutions
			</MenuLink>
			<MenuLink activeClassName="active" onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={handleStyle} to="/banking-solutions">
				Banking solutions
			</MenuLink>
			<MenuLink activeClassName="active" onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={handleStyle} to="/investors">
				Investors
			</MenuLink>
			<MenuLink activeClassName="active" onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={handleStyle} to="/about">
				About
			</MenuLink>
			<MenuLink activeClassName="active" onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={handleStyle} to="/careers">
				Careers
			</MenuLink>
		</ThemeProvider>
	);
};

export default MenuLinks;
