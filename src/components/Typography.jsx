import * as React from "react";
import styled from "styled-components";
import * as Variables from "./Variables";

const TypeH2 = styled.h2`
	font-family: "Acta Display";
	font-size: 160px;
	line-height: 130px;
	color: ${(props) => (props.ColorWarmBlue ? Variables.ColorWarmBlue : "white")};
	letter-spacing: 0.02em;
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
`;

const TypeP = styled.p`
	font-size: 24px;
	line-height: 36px;
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
