import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Animate, IsMobile, ScrollTop } from "./Function";
import { ScreenLg, ScreenXs, SHeight, ColorTuna } from "./Variables";
import { H2, H4 } from "./Typography";

const First = styled.section`
	background: #fff;
	height: calc(${SHeight}* 3);
	min-height: calc(750px * 3);
	@media (max-width: ${ScreenLg}) {
		min-height: calc(650px * 3);
	}
	@media (max-width: ${ScreenXs}) {
		min-height: calc(568px * 3);
	}
	h2 {
		text-align: center;
		position: absolute;
		left:0;
		right:0;
		@media (max-width: ${ScreenXs}) {
			left:10px;
			right:10px;
		}
	}
`;
const FirstDisplay = styled.div`
	height: 100vh;
	min-height: 750px;
	position: sticky;
	top: 0;
	@media (max-width: ${ScreenLg}) {
		min-height: 650px;
	}
	@media (max-width: ${ScreenXs}) {
		min-height: 568px;
	}
`;
const FirstOverflow = styled.div`
	height: 100%;
	overflow: hidden;
	position: relative;
	z-index: 1;
	> .container {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
	}
`;
const FirstsBg = styled.div`
	background: rgba(253, 243, 239, 0.8);
	backdrop-filter: blur(10px);
	bottom: 0;
	top: 0;
	position: absolute;
	left: 0;
	right: 0;
	transform: translateX(100vh);
	z-index: 1;
	transition: left 0.4s, top 0.4s, bottom 0.4s, right 0.4s;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BankingAnimate1 = () => {
	const [opacity, setOpacity] = useState(0);
	const [transform, setTransform] = useState(0);

	const animateRatio = Animate("first");
	const scrollTop = ScrollTop();
	const isMobile = IsMobile();

	useEffect(() => {
		setOpacity(animateRatio);
		setTransform(animateRatio * 50);
	}, [animateRatio]);

	const a1 = {
		opacity: opacity > 2.5 ? "0" : 2.5 - opacity
	};
	const a2 = {
		transform: `translateY(${transform > 1 && scrollTop > 1 ? (transform < 100 ? 100 - transform : "0") : "100"}vh)`,
		right: `${transform > 125 ? (isMobile ? "20" : "10") : "0"}px`,
		left: `${transform > 125 ? (isMobile ? "20" : "10") : "0"}px`,
		top: `${transform > 125 ? (isMobile ? "20" : "10") : "0"}px`,
		bottom: `${transform > 125 ? (isMobile ? "20" : "10") : "0"}px`
	};
	const a3 = {
		opacity: opacity > 3.5 ? "1" : opacity < 2.5 ? "0" : opacity - 2.5
	};

	return (
		<First id="first" data-child="3">
			<FirstDisplay>
				<FirstOverflow>
					<div className="container">
						<H2 style={a1} color={ColorTuna}>
							Financing the future fairly with Plugin Overdraft®
						</H2>
					</div>
					<FirstsBg style={a2}>
						<div className="container" style={a3}>
							<H4>Fiinu 2 Limited is anticipating obtaining a UK deposit-taking banking licence from the Prudential Regulation Authority (PRA) and the Financial Conduct Authority (FCA) in 2021. On successful completion of the banking application process, Fiinu 2 Limited will change its name to Fiinu Bank Limited. </H4>
						</div>
					</FirstsBg>
				</FirstOverflow>
			</FirstDisplay>
		</First>
	);
};

export default BankingAnimate1;
