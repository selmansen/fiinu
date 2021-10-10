import * as React from "react";
import styled from "styled-components";
import {ColorWarmBlue, ScreenMd, ScreenXs} from "./Variables";

const TypeH2 = styled.h2`
	font-family: "Acta Display";
	font-size: 160px;
	line-height: 130px;
	color: ${(props) => (props.ColorWarmBlue ? ColorWarmBlue : "white")};
	letter-spacing: 0.02em;
	@media (max-width:${ScreenMd}){
		font-size:108px;
		line-height: 110px;
	}
	@media (max-width:${ScreenXs}){
		font-size:56px;
		line-height: 50px;
	}
`;

const TypeH3 = styled.h3`
	font-family: "Acta Display";
	font-size: 56px;
	line-height: 56px;
	letter-spacing: 0.02em;
`;

const TypeH4 = styled.h4`
	font-size: 52px;
	line-height: 64px;
	text-align: center;
	letter-spacing: 0.015em;
	@media (max-width:${ScreenMd}){
		font-size:38px;
		line-height:50px;
	}
	@media (max-width:${ScreenXs}){
		font-size:24px;
		line-height:36px;
	}
`;

const TypeP = styled.p`
	font-size: 24px;
	line-height: 36px;
	@media (max-width:${ScreenMd}){
		font-size:21px;
		line-height:32px;
	}
	@media (max-width:${ScreenXs}){
		font-size:18px;
		line-height:28px;
	}
	b {
		font-weight: 700;
	}
`;

const H2 = ({ id, children }) => {
	return <TypeH2 id={id}>{children}</TypeH2>;
};

const H3 = ({ id, children }) => {
	return <TypeH3 id={id}>{children}</TypeH3>;
};

const H4 = ({ id, children }) => {
	return <TypeH4 id={id}>{children}</TypeH4>;
};

const P = ({ id, children }) => {
	return <TypeP id={id}>{children}</TypeP>;
};

export { H2, H3, H4, P };
