import * as React from "react";
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
    position:fixed;
    top:36px;
    &.fixed{
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
`

const MenuLink = styled(Link)`
    color:#fff;
    display:block;
	font-size: 18px;
	line-height: 28px;
	margin-top: 8px;
    text-align: right;
	&:first-child {
		margin-top: 0px;
	}
`;

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:end;
`

const Header = ({ logo }) => {
	return (
        <HeaderStyle>
            <Container className="container">
                <Link to="/">
                    <Logo src={ logo } alt="Fiinu Logo" />
                </Link>
                <Menu>
                    <MenuLink to="/services/">Services</MenuLink>
                    <MenuLink to="/fiinu-2-ltd/">Fiinu 2 LTD</MenuLink>
                    <MenuLink to="/aim-rule-26/">AIM Rule 26</MenuLink>
                </Menu>
            </Container>
		</HeaderStyle>
	);
};

export default Header;
