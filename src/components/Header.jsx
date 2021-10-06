import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import * as Variables from "./Variables";

const HeaderStyle = styled.header`
	position: absolute;
	top: 36px;
	width: 100%;
	z-index: 99;
`;

const Logo = styled.img`
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

const MenuLink = styled(Link)`
	color: #fff;
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

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
`;

const Header = ({ logo }) => {
	const [blur, setBlur] = useState(false);
	const prevScrollY = useRef(0);
	const [menuUp, setMenuUp] = useState();

	const handleHover = () => setBlur(!blur);
	const handleStyle = {
		filter: `blur(${blur ? "2px" : "0px"})`
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

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, [menuUp]);

	return (
		<HeaderStyle>
			<Container className="container">
				<Link to="/">
					<Logo src={logo} alt="Fiinu Logo" />
				</Link>
				<Menu className={menuUp}>
					<MenuLink activeClassName="active" onMouseEnter={handleHover} onMouseLeave={handleHover} style={handleStyle} to="/">
						Fintech solutions
					</MenuLink>
					<MenuLink activeClassName="active" onMouseEnter={handleHover} onMouseLeave={handleHover} style={handleStyle} to="/banking-solutions">
						Banking solutions
					</MenuLink>
					<MenuLink activeClassName="active" onMouseEnter={handleHover} onMouseLeave={handleHover} style={handleStyle} to="/investors">
						Investors
					</MenuLink>
					<MenuLink activeClassName="active" onMouseEnter={handleHover} onMouseLeave={handleHover} style={handleStyle} to="/about">
						About
					</MenuLink>
					<MenuLink activeClassName="active" onMouseEnter={handleHover} onMouseLeave={handleHover} style={handleStyle} to="/careers">
						Careers
					</MenuLink>
				</Menu>
			</Container>
		</HeaderStyle>
	);
};

export default Header;
