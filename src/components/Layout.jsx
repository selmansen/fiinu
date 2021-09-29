import * as React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import * as Variables from './Variables';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: "lato";
        overflow-x:hidden;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        color:${Variables.ColorTuna};
    }
    html, button, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background: transparent;
        font-weight: normal;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote{
        &:before, &:after{
            content: '';
            content: none;
        }
    }
    q{
        &:before, &:after {
            content: '';
            content: none;
        }
    }
    :focus {
        outline:0;
    }

    ins {
        text-decoration: none;
    }
    del {
        text-decoration: line-through;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button{
        outline:0 !important;
    }	
    a{
        text-decoration: none;
    }
    .clear{clear:both;}
    * {
        box-sizing: border-box;
    }

    h2,h3,h4{
        font-family:serif;
    }
    &.h100{
        height:100%;
    }
    .container{
        position:relative;
        width:100%;
        max-width:1525px;
        margin:auto;
        padding:0 15px;
        @media (max-width:${Variables.ScreenLg}){
            max-width:1360px;
        }
    }
`;

const Layout = ({ logo, children }) => {
	return (
        <>
            <GlobalStyle />
            <Header logo={logo} />
			<main>{children}</main>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
