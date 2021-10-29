import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TrackVisibility from "react-on-screen";

import { Animate } from "./Function";
import { ScreenLg, ScreenMd, ScreenXs, ColorGoldenYellow, ColorTuna } from "./Variables";
import List from "../components/List";
import { H3, P } from "./Typography";
import ButtonWarm from "./ButtonWarm";

import DevelopmentBanner from "../images/development-banner.jpg";

const ThirdWrapper = styled.section`
	height:150vh;
	min-height: 780px;
	@media (max-height: 780px) and (min-width: calc( ${ScreenLg} + 1px )) {
		height:100vh;
	}
	@media (max-width: ${ScreenLg}) {
		min-height: 724px;
		@media (max-height: 724px) {
			height:100vh;
		}
	}
	@media (max-width: ${ScreenMd}) {
		height: auto;
		min-height: auto;
	}
`;

const Third = styled.section`
	background: ${ColorGoldenYellow};
	position: sticky;
	top: 0;
	z-index: 1;
	
`;
const ThirdBgCover = styled.div`
	height: 100%;
	overflow: hidden;
	position: absolute;
	right: 0;
	top: 0;
	width: 50%;
	@media (max-width: ${ScreenLg}) {
		width: 45%;
	}
	@media (max-width: ${ScreenMd}) {
		width: 50%;
	}
	@media (max-width: ${ScreenXs}) {
		position: relative;
		height: 300px;
		width: 100%;
	}
	.s3_a1 {
		background: url(${DevelopmentBanner}) center center / cover no-repeat;
		content: "";
		height: 100%;
		position: absolute;
		top: 0;
		transform: scale(1.5);
		width: 100%;
	}
`;
const ThirdContent = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	padding: 30px 40px 30px 0px;
	width: 50%;
	@media (max-width: ${ScreenLg}) {
		width: 55%;
	}
	@media (max-width: ${ScreenMd}) {
		width: 50%;
	}
	@media (max-width: ${ScreenMd}) {
		padding: 36px 15px 36px 0px;
	}
	@media (max-width: ${ScreenXs}) {
		width: 100%;
		padding: 24px 0 36px;
		min-height: auto;
	}
	p {
		margin-top: 24px;
		&:after {
			border-bottom: 4px solid ${ColorTuna};
			border-radius: 10px;
			content: "";
			display: block;
			margin-bottom: 50px;
			margin-top: 44px;
			@media (max-width: ${ScreenMd}) {
				margin: 36px 0px;
			}
		}
	}
	a {
		margin-top: 100px;
		@media (max-width: ${ScreenLg}) {
			margin-top: 44px;
		}
		@media (max-width: ${ScreenMd}) {
			margin-top: 36px;
		}
	}
	.animated {
		opacity: 0;
	}
`;

const HomeAnimate2 = () => {
	const [transform, setTransform] = useState(0);
	const animateRatio = Animate("third");

	useEffect(() => {
		setTransform(animateRatio);
	}, [animateRatio]);

	const ThirdContent_Data = ["Open Banking enabled tech licensing and alternative data.", "Become a leader in collection of transactional source data.", "The UK alt-data market projected to grow 62,000% by 2028."];

	const a1 = {
		transform: `scale(${transform > -1 ? (transform !== 0 ? (transform < 0 && transform ? 1 - transform / 2 : "1") : "1.5") : "1.5"})`
	};

	return (
		<ThirdWrapper>
			<Third data-child="1" id="third">
				<ThirdBgCover>
					<div className="s3_a1" style={a1}></div>
				</ThirdBgCover>
				<div className="container h100">
					<ThirdContent>
						<TrackVisibility once>{({ isVisible }) => <H3 className={`animated ${isVisible ? "fadeInUp" : ""}`}>R&D firm developing intelligent fintech and alternative data insight solutions.</H3>}</TrackVisibility>
						<TrackVisibility once>{({ isVisible }) => <P className={`animated ${isVisible ? "fadeInUp" : ""}`}>Our technology arm will generate revenue from licencing Open Banking enabled technology and alternative data solutions. </P>}</TrackVisibility>
						<TrackVisibility once>{({ isVisible }) => <List data={ThirdContent_Data} className={`animated ${isVisible ? "fadeInUp" : ""}`} />}</TrackVisibility>
						<TrackVisibility once>
							{({ isVisible }) => (
								<ButtonWarm toLink="/fintech-solutions" className={`animated ${isVisible ? "fadeInUp" : ""}`}>
									Fintech solutions
								</ButtonWarm>
							)}
						</TrackVisibility>
					</ThirdContent>
				</div>
			</Third>
		</ThirdWrapper>
	);
};

export default HomeAnimate2;
