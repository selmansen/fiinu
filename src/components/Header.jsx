import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { IsTablet } from "./Function";
import MenuLink from "./MenuLink";
import { ColorTuna, ScreenSm, ScreenXs } from "./Variables";

import LogoBlack from "../images/fiinu-logo-black.svg";

const HeaderStyle = styled.header`
	min-width: 360px;
	position: fixed;
	top: 23px;
	transition-timing-function: ease-in-out;
	transition: top 0.4s;
	width: 100%;
	z-index: 99;
	.wrap {
		padding: 12px 24px;
		position: relative;
		z-index: 1;
		&:before {
			content: "";
			width: 100%;
			height: 100%;
			border-radius: 32px;
			transition: backdrop-filter 0.4s, background 0.4s;
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
		}
	}
	&.menuUp {
		top: 23px;
		.wrap {
			&:before {
				backdrop-filter: blur(14px);
				background: rgba(255, 255, 255, 0.7);
			}
			img {
				width: 90px;
				height: auto;
			}
		}
		.menu {
			a {
				color: ${ColorTuna};
			}
		}
		.hamb-menu {
			&:before,
			&:after {
				background: ${ColorTuna};
			}
		}
	}
	&.menuDown {
		top: -70px;
	}
`;

const Logo = styled(Link)`
	img {
		transition: 0.4s;
		@media (max-width: ${ScreenSm}) {
			height: auto;
			width: 100px;
		}
	}
`;

const Menu = styled.div`
	border-radius: 32px;
	display: flex;
	@media (max-width: ${ScreenSm}) and (min-width: calc(${ScreenXs} + 1px)) {
		align-items: center;
		justify-content: center;
	}
	@media (max-width: ${ScreenSm}) {
		backdrop-filter: blur(14px);
		background: rgba(255, 255, 255, 0.7);
		border-radius: 0;
		flex-direction: column;
		height: 100%;
		left: -100%;
		min-width: 320px;
		padding: 24px 30px;
		top: 0;
		position: fixed;
		transition-timing-function: ease-in-out;
		transition: left 0.4s;
		width: 100%;
		z-index: 99;
		a {
			color: ${ColorTuna};
			font-size: 24px;
			line-height: 36px;
			margin-left: 0;
			+ a {
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
`;

const Hamburger = styled.div`
	@media (max-width: ${ScreenSm}) {
		cursor: pointer;
		height: 10px;
		padding: 17px 15px;
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
				@media (max-width: ${ScreenSm}) {
					background: ${ColorTuna};
				}
			}
			&:after {
				transform: rotate(-225deg);
				top: 13px;
				@media (max-width: ${ScreenSm}) {
					background: ${ColorTuna};
				}
			}
		}
	}
`;

const Container = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
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
				if (prevScrollY.current < currentScrollY && !hamMenu) {
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
	}, [menuUp, hamMenu]);

	// useEffect(() => {
	// 	hamMenu ? document.querySelector("html").classList.add("lock") : document.querySelector("html").classList.remove("lock");
	// }, [hamMenu]);
	return (
		<HeaderStyle className={menuUp}>
			<div className="container">
				<Container className="wrap">
					<Logo to="/">
						<img src={menuUp === undefined ? logo || LogoBlack : menuUp === "menuDown" ? logo || LogoBlack : LogoBlack} alt="Fiinu Logo" width="165" height="57" />
					</Logo>

					{!isTablet ? <Hamburger className={`hamb-menu ${hamMenu ? "active" : ""} ${logo ? "white" : ""}`} onClick={menuToggle} /> : false}

					<Menu className={hamMenu ? "open menu" : "menu"}>
						<MenuLink color={logo ? "#fff" : ColorTuna} />
					</Menu>
				</Container>
			</div>
		</HeaderStyle>
	);
};

export default Header;
