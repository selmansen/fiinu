import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import MenuLink from "./MenuLink";
import * as Variables from "./Variables";

import LogoBlack from "../images/fiinu-logo-black.svg";

const HeaderStyle = styled.header`
	position: absolute;
	top: 36px;
	width: 100%;
	z-index: 99;
`;

const Logo = styled(Link)`
	position: absolute;
	top: 0;
	left: 0;
`;

const Menu = styled.div`
	display: flex;
	position: fixed;
	top: 36px;
	display: flex;
	padding: 16px 36px;
	border-radius: 32px;
	transition: 0.5s;
	transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
	&.menuUp {
		top: 36px;
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(24px);
		a {
			color: ${Variables.ColorTuna};
		}
	}
	&.menuDown {
		top: -61px;
	}
	&.open {
		&:before,
		&:after {
			background: ${Variables.ColorTuna};
			content: "";
			height: 2px;
			position: absolute;
			top: 32px;
			width: 44px;
		}
		&:after {
			top: 48px;
		}
	}
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const Header = ({ logo }) => {
	const prevScrollY = useRef(0);
	const [menuUp, setMenuUp] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				const currentScrollY = window.scrollY;
				if (prevScrollY.current < currentScrollY) {
					setMenuUp("menuDown");
				}
				if (prevScrollY.current > currentScrollY) {
					setMenuUp("menuUp");
				}

				prevScrollY.current = currentScrollY;
			} else {
				setMenuUp();
			}
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, [menuUp]);

	return (
		<HeaderStyle>
			<Container className="container">
				<Logo to="/">
					<img src={logo || LogoBlack} alt="Fiinu Logo" />
				</Logo>
				<Menu className={menuUp}>
					<MenuLink color="#fff" />
				</Menu>
			</Container>
		</HeaderStyle>
	);
};

export default Header;
