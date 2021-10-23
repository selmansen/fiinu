import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Animate, IsMobile } from "./Function";
import { ScreenLg, ScreenMd, ScreenXs, SHeight, ColorFantasy } from "./Variables";
import { H2, H4 } from "./Typography";
import NextContent from "./NextContent";

const Second = styled.section`
	background: ${ColorFantasy};
	height: calc(${SHeight}* 2.2);
	min-height: calc(820px * 2.2);
	@media (max-width: ${ScreenLg}) {
		min-height: calc(740px * 2.2);
	}
	@media (max-width: ${ScreenMd}) {
		min-height: calc(568px * 2.2);
	}
`;
const Second1 = styled.div`
	height: 100vh;
	min-height: 820px;
	position: sticky;
	top: 0;
	@media (max-width: ${ScreenLg}) {
		min-height: 740px;
	}
	@media (max-width: ${ScreenMd}) {
		min-height: 568px;
	}
	h2 {
		bottom: 15px;
		display: flex;
		font-size: 360px;
		left: calc(50% - 1935px);
		line-height: 130px;
		opacity: 0;
		position: absolute;
		right: 0;
		transform: translateY(150px);
		width: 7865px;
		@media (max-width: ${ScreenMd}) {
			width: 5990px;
			left: calc(50% - 1335px);
			bottom: -10px;
			font-size: 240px;
		}
		@media (max-width: ${ScreenXs}) {
			width: 4130px;
			left: calc(50% - 1000px);
			bottom: -7px;
			line-height: 100px;
			font-size: 180px;
		}
	}
	h4 {
		opacity: 0;
		@media (max-width: ${ScreenLg}) {
			margin-top: -150px;
		}
		@media (max-width: ${ScreenMd}) {
			margin-top: -50px;
		}
	}
	h4:nth-child(2) {
		margin-top: 70px;
		@media (max-width: ${ScreenMd}) {
			margin-top: 50px;
		}
	}
`;
const SecondOverflow = styled.div`
	position: relative;
	overflow: hidden;
	height: 100%;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.container {
		position: initial;
		> div {
			@media (max-width: ${ScreenXs}) {
				display: none;
			}
		}
	}
`;

const HomeAnimate1 = () => {
	const [opacity, setOpacity] = useState(0);
	const [transform, setTransform] = useState(0);

	const animateRatio = Animate("second");
	const isMobile = IsMobile();

	useEffect(() => {
		setOpacity(animateRatio);
		setTransform(animateRatio * 150 - 150);
	}, [animateRatio]);

	const a1 = {
		opacity: isMobile ? (opacity > 1 ? "1" : opacity < 0 ? "0" : opacity) : "1"
	};
	const a2 = {
		opacity: opacity > 2 ? "1" : opacity < 1 ? "0" : opacity - 1
	};
	const a3 = {
		transform: `translateY(${transform > 100 ? (transform < 250 ? 250 - transform : "0") : "150"}px)`,
		opacity: opacity > 2.5 ? "1" : opacity < 1.5 ? "0" : opacity - 1.5
	};

	return (
		<Second data-child="3" id="second">
			<Second1>
				<SecondOverflow>
					<div className="container">
						<H4 style={a1}>Fiinu is a pre-IPO fintech group with an expected deposit-taking banking licence from the Bank of England regulators. </H4>
						<H4 style={a2}>Subject to the London Stock Exchange admission approval, the Group will enter the AIM-market with the ticker ‘BANK’.</H4>
						<H2 style={a3}>Pre-IPO fintech with an expected bank licence</H2>
						<NextContent nextContent="third">Next—Services</NextContent>
					</div>
				</SecondOverflow>
			</Second1>
		</Second>
	);
};

export default HomeAnimate1;
