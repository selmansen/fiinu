import React, { useState, useEffect } from "react"
import { Link } from "gatsby";
import styled from "styled-components";
import * as Variables from './Variables';

const HeaderStyle = styled.header`
    position:absolute;
    top:36px;
    width:100%;
    z-index:99;
`;

const Menu = styled.div`
    display:flex;
    position:fixed;
    top:36px;
    &.fixedMenu{
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(12px);
        &:before, &:after{
            background: ${Variables.ColorTuna};
            content:"";
            height:2px;
            position:absolute;
            top:32px;
            width:44px;
        }
        &:after{
            top:48px;
        }
    }
    &.open{
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(24px);
    }
`;

const Logo = styled.img`
    position:absolute;
    top:0;
    left:0;
`;

const MenuLink = styled(Link)`
    color:#fff;
    display:block;
    font-size: 18px;
    line-height: 28px;
    transition:.4s;
    + a{
        margin-left: 24px;
    }
    &:hover{
        filter: blur(0px) !important;
    }
`;

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:end;
`;

const Header = ({ logo }) => {
    const [blur, setBlur] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [scrolling, setScrolling] = useState(false);

    const handleHover = () => setBlur(!blur);
    const handleStyle = {
        filter: `blur(${blur ? "2px" : "0px"})`,
    }

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
    
	return (
        <HeaderStyle>
            <Container className="container">
                <Link to="/">
                    <Logo src={ logo } alt="Fiinu Logo" />
                </Link>
                <Menu className={scrollTop > 0 ? "fixedMenu" : false}>
                    <MenuLink onMouseEnter={handleHover} onMouseLeave={handleHover} style={handleStyle} to="/">Fintech solutions</MenuLink>
                    <MenuLink onMouseEnter={handleHover} onMouseLeave={handleHover} style={handleStyle} to="/banking-solutions">Banking solutions</MenuLink>
                    <MenuLink onMouseEnter={handleHover} onMouseLeave={handleHover} style={handleStyle} to="/investors">Investors</MenuLink>
                    <MenuLink onMouseEnter={handleHover} onMouseLeave={handleHover} style={handleStyle} to="/about">About</MenuLink>
                    <MenuLink onMouseEnter={handleHover} onMouseLeave={handleHover} style={handleStyle} to="/careers">Careers</MenuLink>
                </Menu>
            </Container>
		</HeaderStyle>
	);
};

export default Header;
