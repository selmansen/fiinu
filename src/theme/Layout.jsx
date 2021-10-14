import { createGlobalStyle } from "styled-components";
import { ColorTuna, ScreenLg, ScreenMd, ScreenSm, ScreenXs } from "../components/Variables";
import "./Typography.css";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        overflow-x:hidden;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        color:${ColorTuna};
        min-width:320px;
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
    &.h100{
        height:100%;
    }
    .container{
        position:relative;
        width:100%;
        max-width:1525px;
        margin:auto;
        padding:0 15px;
        @media (max-width:${ScreenLg}){
            max-width:1350px;
        }
        @media (max-width:${ScreenMd}){
            max-width:1014px;
        }
        @media (max-width:${ScreenSm}){
            max-width:758px;
        }
        @media (max-width:${ScreenXs}){
            max-width:100%;
            padding:0 10px;
        }
    }
    .animated {
        animation-duration: .7s;
        animation-fill-mode: both;
      }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
    .fadeIn {
        animation-name: fadeIn;
    }
    
    }
    @keyframes fadeOut {
        from {
          opacity: 1;
        }
      
        to {
          opacity: 0;
        }
      }
      .fadeOut {
        animation-name: fadeOut;
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 50%, 0);
        }
      
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      .fadeInUp {
        animation-name: fadeInUp;
      }
`;

export default GlobalStyle;
