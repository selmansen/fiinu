import * as React from "react";
import styled from "styled-components";
import { ScreenMd, ScreenXs } from "./Variables";

const TypeH2 = styled.h2`
	font-family: "Acta Display";
	color: #fff;
	font-size: 160px;
	line-height: 130px;
	color: "white";
	letter-spacing: 0.02em;
	@media (max-width: ${ScreenMd}) {
		font-size: 108px;
		line-height: 92px;
	}
	@media (max-width: ${ScreenXs}) {
		font-size: 56px;
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
	@media (max-width: ${ScreenMd}) {
		font-size: 38px;
		line-height: 50px;
	}
	@media (max-width: ${ScreenXs}) {
		font-size: 24px;
		line-height: 36px;
	}
`;

const TypeH5 = styled.h5`
	font-size: 32px;
	line-height: 38px;
	letter-spacing: 0.005em;
`;

const TypeP = styled.p`
	font-size: 24px;
	line-height: 36px;
	@media (max-width: ${ScreenMd}) {
		font-size: 21px;
		line-height: 32px;
	}
	@media (max-width: ${ScreenXs}) {
		font-size: 18px;
		line-height: 28px;
	}
	b {
		font-weight: 700;
	}
`;

const H2 = ({ id, children, color, style }) => {
	const h2InlineStyle = {
		color: color
	};
	return (
		<TypeH2 style={{ ...h2InlineStyle, ...style }} id={id}>
			{children}
		</TypeH2>
	);
};

const H3 = ({ id, children, style, className }) => {
	return (
		<TypeH3 style={style} id={id} className={className}>
			{children}
		</TypeH3>
	);
};

const H4 = ({ id, children }) => {
	return <TypeH4 id={id}>{children}</TypeH4>;
};

const H5 = ({ id, children, style, className }) => {
	return (
		<TypeH5 className={className} style={style} id={id}>
			{children}
		</TypeH5>
	);
};

const P = ({ id, children, className, style }) => {
	return (
		<TypeP style={style} id={id} className={className}>
			{children}
		</TypeP>
	);
};

export { H2, H3, H4, H5, P };
