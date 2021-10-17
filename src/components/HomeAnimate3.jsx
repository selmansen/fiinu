import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { Animate, IsMobile } from "./Function";
import { ScreenMd, ScreenXs, SHeight, SDeadHeight, SMinHeight, ColorWarmBlue, ScreenSm, ColorTuna } from "./Variables";
import { H2, H4 } from "./Typography";

const Fourth = styled.section`
	background: #e5e7e9;
	height: calc(${SHeight} * 2 + ${SDeadHeight});
	position: relative;
	&:before {
		opacity: 0;
	}
`;
const Fourth1 = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	align-items: center;
	justify-content: center;
	height: ${SHeight};
	min-height: ${SMinHeight};
	overflow: hidden;
	@media (max-width: ${ScreenMd}) {
		min-height: 568px;
	}
	&:before {
		content: "";
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0);
		z-index: 2;
		transition: 0.4s;
		backdrop-filter: blur(0px);
	}
	&.start {
		&:before {
			backdrop-filter: blur(5px);
			background: rgba(255, 255, 255, 0.4);
		}
	}
	h2 {
		position: absolute;
		color: ${ColorWarmBlue};
		text-align: center;
		transform: translateY(0) scale(1);
		transition: 0.4s;
		opacity: 0;
		z-index: 3;
		&.start {
			color: #fff;
			transform: translateY(calc(50vh - 80px)) scale(2.2);
			@media (max-width: ${ScreenMd}) {
				transform: translateY(calc(50vh - 50px)) scale(2);
			}
			@media (max-width: ${ScreenSm}) {
				transform: translateY(calc(50vh - -64px)) scale(2);
			}
			@media (max-width: ${ScreenXs}) {
				transform: translateY(calc(50vh - -24px)) scale(2);
				width: 400px;
			}
			@media (max-height: ${SMinHeight}) and (min-width: calc( ${ScreenMd} + 1px )) {
				transform: translateY(300px) scale(2.2);
			}
			@media (max-height: 568px) and (max-width: calc( ${ScreenMd} )) {
				transform: translateY(233px) scale(2);
			}
			@media (max-height: 568px) and (max-width: calc( ${ScreenSm} )) {
				transform: translateY(343px) scale(2);
			}
			@media (max-height: 568px) and (max-width: calc( ${ScreenXs} )) {
				transform: translateY(310px) scale(2);
			}
		}
	}
	h4 {
		position: absolute;
		opacity: 0;
		margin-top: 0;
		transition: 0.4s;
		z-index: 4;
		&.start {
			opacity: 1;
			margin-top: -205px;
			@media not all and (min-resolution: 0.001dpcm) {
				@media {
					margin-top: -102px;
				}
			}
		}
	}
	.button-wrapper {
		position: absolute;
		opacity: 0;
		margin-top: 0;
		transition: 0.4s;
		z-index: 5;
		&.start {
			opacity: 1;
			margin-top: 150px;
			@media not all and (min-resolution: 0.001dpcm) {
				@media {
					margin-top: 75px;
				}
			}
		}
	}
`;
const TunaButton = styled(Link)`
	align-items: center;
	background: ${ColorTuna};
	border-radius: 100px;
	color: #fff;
	display: flex;
	font-size: 24px;
	justify-content: flex-start;
	line-height: 28px;
	padding: 16px 24px;
	transition: 0.4s;
	margin-top: ${({ marginTop }) => marginTop};
	@media (max-width: ${ScreenXs}) {
		padding: 8px 20px;
		font-size: 16px;
		line-height: 24px;
	}
	svg {
		margin-left: 15px;
	}
	&:hover {
		background: #0f1216;
	}
`;
const IphoneImage = styled.div`
	transform: scale(0);
	position: absolute;
	width: 100%;
	z-index: 1;
`;

const HomeAnimate3 = () => {
	const [transform, setTransform] = useState(0);

	const data = useStaticQuery(graphql`
		query {
			iphoneBig: file(relativePath: { eq: "iphone.jpg" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
		}
	`);

	const animateRatio = Animate("fourth");
	const isMobile = IsMobile();
	const iphoneBig = getImage(data.iphoneBig);

	useEffect(() => {
		setTransform(animateRatio);
	}, [animateRatio]);

	const a1 = {
		transform: isMobile ? `scale(${transform > 0 ? (transform < 1 ? transform : "1") : "0"})` : `scale(${transform > 0 ? (transform < 1 ? transform * 3 : "3") : "0"})`
	};
	const a2 = {
		opacity: transform - 1 > 1 ? "1" : transform - 1 < 0 ? "0" : transform - 1
	};

	return (
		<Fourth data-child="4" id="fourth">
			<Fourth1 className={transform > 1 ? "start" : false}>
				<IphoneImage style={a1}>
					<GatsbyImage image={iphoneBig} alt="Fiinu Mobile" />
				</IphoneImage>
				<H2 className={transform > 2.5 ? "start" : false} style={a2}>
					<div className="container">Fiinu 2 Limited</div>
				</H2>
				<H4 className={transform > 3 ? "start" : false}>
					<div className="container">Fiinu 2 Limited is anticipating obtaining a UK deposit-taking banking licence from the Prudential Regulation Authority (PRA) and the Financial Conduct Authority (FCA) in 2021.</div>
				</H4>
				<div className={`button-wrapper ${transform > 3 ? "start" : false}`}>
					<TunaButton to="/banking-solutions">Visit Fiinu Bank</TunaButton>
				</div>
			</Fourth1>
		</Fourth>
	);
};

export default HomeAnimate3;
