import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { IsTablet } from "./Function";
import MenuLink from "./MenuLink";
import { ColorTuna, ScreenSm, ScreenXs } from "./Variables";

import LogoBlack from "../images/fiinu-logo-black.svg";

const HeaderStyle = styled.header`
	min-width: 360px;
	position: absolute;
	top: 36px;
	width: 100%;
	z-index: 99;
`;

const Logo = styled(Link)`
	left: 15px;
	position: absolute;
	top: 0;
	@media (max-width: ${ScreenSm}) {
		img {
			height: auto;
			width: 100px;
		}
	}
`;

const Menu = styled.div`
	border-radius: 32px;
	display: flex;
	padding: 16px 36px;
	position: fixed;
	top: 36px;
	@media (max-width: ${ScreenSm}) and (min-width: calc(${ScreenXs} + 1px)) {
		align-items: center;
		justify-content: center;
	}
	@media (max-width: ${ScreenSm}) {
		backdrop-filter: blur(21px);
		background: rgba(255, 255, 255, 0.8);
		border-radius: 0;
		flex-direction: column;
		height: 100%;
		left: -100%;
		min-width: 360px;
		padding: 24px 30px;
		top: 0;
		transition-timing-function: ease-in-out;
		transition: left 0.4s;
		width: 100%;
		z-index: 99;
		a {
			color: ${ColorTuna};
			font-size: 24px;
			line-height: 36px;
			margin-left: 0;
			a + {
				margin-top: 26px;
			}
			&:before {
				top: 16px;
			}
		}
		&.open {
			left: 0;
		}
	}
	@media (max-width: ${ScreenXs}) {
		width: calc(100% - 40px);
	}
	&.menuUp {
		backdrop-filter: blur(24px);
		background: rgba(255, 255, 255, 0.7);
		top: 36px;
		transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
		transition: top 0.4s, background 0.4s;
		a {
			color: ${ColorTuna};
		}
	}
	&.menuDown {
		top: -61px;
		transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
		transition: top 0.4s;
	}
`;

const Hamburger = styled.div`
	@media (max-width: ${ScreenSm}) {
		cursor: pointer;
		height: 10px;
		padding: 18.5px 15px;
		position: relative;
		width: 22px;
		z-index: 100;
		&:before,
		&:after {
			background: ${ColorTuna};
			content: "";
			height: 2px;
			position: absolute;
			right: 0;
			top: 13px;
			transition: 0.4s;
			width: 22px;
		}
		&:after {
			top: 21px;
		}
		&.white {
			&:before,
			&:after {
				background: #fff;
			}
		}
		&.active {
			&:before {
				transform: rotate(225deg);
			}
			&:after {
				transform: rotate(-225deg);
				top: 13px;
			}
		}
	}
`;

const Container = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-end;
`;

const Header = ({ logo }) => {
	const prevScrollY = useRef(0);
	const [menuUp, setMenuUp] = useState(null);
	const [hamMenu, sethamMenu] = useState(false);

	const isTablet = IsTablet();

	const menuToggle = () => {
		sethamMenu(!hamMenu);
	};

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

	useEffect(() => {
		hamMenu ? document.querySelector("html").classList.add("lock") : document.querySelector("html").classList.remove("lock");
	}, [hamMenu]);

	return (
		<HeaderStyle>
			<Container className="container">
				<Logo to="/">
					<img src={logo || LogoBlack} alt="Fiinu Logo" width="165" height="57" />
				</Logo>

				{!isTablet ? <Hamburger className={`hamb-menu ${hamMenu ? "active" : ""} ${logo ? "white" : ""}`} onClick={menuToggle} /> : false}

				<Menu className={`${menuUp} ${hamMenu ? "open" : ""}`}>
					<MenuLink color={logo ? "#fff" : ColorTuna} />
				</Menu>
			</Container>
		</HeaderStyle>
	);
};

export default Header;
