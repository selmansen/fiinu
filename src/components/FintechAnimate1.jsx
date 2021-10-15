import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { Animate } from "./Function";
import { ScreenLg, ScreenMd, ScreenSm, ScreenXs, SHeight, ColorWarmBlue } from "./Variables";
import { H2, H3, P } from "./Typography";

const Solutions = styled.section`
	height: calc(${SHeight}* 3);
	min-height: calc(940px * 3);
	@media (max-width: ${ScreenLg}) {
		min-height: calc(800px * 3);
	}
	@media (max-width: ${ScreenMd}) {
		min-height: calc(630px * 3);
	}
	@media (max-width: ${ScreenSm}) {
		min-height: calc(1085px * 3);
	}
	@media (max-width: ${ScreenXs}) {
		min-height: auto;
		height: calc(${SHeight}* 4.5);
	}
`;

const SolutionsDisplay = styled.div`
	height: ${SHeight};
	min-height: 940px;
	position: sticky;
	top: 0;
	@media (max-width: ${ScreenLg}) {
		min-height: 800px;
	}
	@media (max-width: ${ScreenMd}) {
		min-height: 630px;
	}
	@media (max-width: ${ScreenSm}) {
		min-height: 1085px;
	}
	@media (max-width: ${ScreenXs}) {
		height: auto;
		min-height: auto;
	}
`;

const SolutionsOverflow = styled.div`
	height: 100%;
	overflow: hidden;
	position: relative;
	z-index: 1;
	@media (max-width: ${ScreenXs}) {
		padding-bottom: 36px;
	}
	> .container {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		@media (max-width: ${ScreenSm}) {
			display: block;
		}
	}
	h2 {
		opacity: 0;
		position: absolute;
		text-align: center;
		@media (max-width: ${ScreenMd}) {
			align-items: center;
			display: flex;
			height: 100vh;
			justify-content: center;
			right:0;
			left:0;
		}
		@media (max-width: ${ScreenXs}) {
			left:10px;
			right:10px;
		}
	}
`;

const SolutionsBg = styled.div`
	background: rgba(253, 243, 239, 0.8);
	backdrop-filter: blur(10px);
	bottom: 0;
	height: calc(100% - 82.5px);
	position: absolute;
	right: 0;
	transform: translateX(100vw);
	width: 100vw;
	z-index: 1;
	@media (max-width: ${ScreenMd}) {
		height: 100%;
	}
`;

const SolutionsContent = styled.div`
	display: flex;
	padding-top: 32px;
	position: absolute;
	z-index: 3;
	left: 15px;
	right: 15px;
	@media (max-width: ${ScreenMd}) {
		padding-top: 0;
	}
	@media (max-width: ${ScreenSm}) {
		padding-top: 36px;
		flex-direction: column-reverse;
	}
	@media (max-width: ${ScreenXs}) {
		left: 0;
		right: 0;
		position: relative;
	}
	@media (max-width: 500px) {
		padding-top:0;
	}
	> div {
		@media (min-width: calc(${ScreenSm} + 1px)) {
			width: 50%;
		}
		&:first-child {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 80.5px 20px 0px 0px;
			@media (max-width: ${ScreenMd}) {
				padding: 0px;
			}
		}
		&:nth-child(2) {
			margin-left: 20px;
			transform: translateY(100vh);
			opacity: 0;
			@media (max-width: ${ScreenSm}) {
				max-width: 500px;
				margin: auto;
			}
			@media (max-width: 500px) {
				max-width: 500px;
				margin: 0px -10px;
			}
		}
	}
	.personal-image {
		max-width: 727px;
		border-radius: 32px;
		box-shadow: 0px 70px 100px -50px rgba(51, 61, 71, 0.2);
		margin-bottom: 75px;
		@media (max-width: ${ScreenLg}) {
			max-width: 617px;
			margin-botton: 36px;
		}
		@media (max-width: 500px) {
			border-radius:0;
		}
	}
	p {
		margin-top: 36px;
		@media (max-width: ${ScreenSm}) {
			margin-top: 24px;
		}
	}
	h3,
	p {
		opacity: 0;
		transition: 0.7s;
		transform: translate3d(0, 50%, 0);
		&.animate {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}
`;

const BankingAnimate2 = () => {
	const [opacity, setOpacity] = useState(0);
	const [transform, setTransform] = useState(0);

	const data = useStaticQuery(graphql`
		query {
			solutionsImage: file(relativePath: { eq: "personal-finance.jpg" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
		}
	`);

	const animateRatio = Animate("first");
	const solutionsImage = getImage(data.solutionsImage);

	useEffect(() => {
		setOpacity(animateRatio);
		setTransform(animateRatio * 50 - 50);
	}, [animateRatio]);

	const a1 = {
		opacity: opacity > 1 ? "1" : opacity < 0 ? "0" : opacity,
		transform: `translateX(${transform > 1 ? (transform < 100 ? transform : "100") : "0"}vw)`
	};
	const a2 = {
		transform: `translateX(${transform > 1 ? (transform < 100 ? 100 - transform : "0") : "100"}vw)`
	};
	const a3 = {
		transform: `translateY(${transform > 25 ? (transform < 125 ? 125 - transform : "0") : "100"}vh)`,
		opacity: opacity > 3.5 ? "1" : opacity < 1.5 ? "0" : (opacity - 1.5) / 2
	};

	return (
		<Solutions id="first" data-child="3">
			<SolutionsDisplay>
				<SolutionsOverflow>
					<div className="container">
						<H2 color={ColorWarmBlue} style={a1}>
							Fintech Solutions
						</H2>
						<SolutionsContent>
							<div>
								<H3 className={opacity > 3.5 ? "animate" : false}>Personal Finance Management app with integrated Plugin Overdraft®</H3>
								<P className={opacity > 3.65 ? "animate" : false}>Fiinu’s proprietary transaction tagging technology will analyse the user’s spending into categories, providing an automatically updating, consolidated view of their financial lives. We collect anonymised transactional banking data with our Open Banking enabled app with integrated Plugin Overdraft, allowing users to benefit from intelligent cost-saving nudges relating to their connected bank accounts, credit cards or store cards in one secure place. </P>
							</div>
							<div style={a3}>
								<GatsbyImage className="personal-image" image={solutionsImage} alt="Personal Finance Management app with integrated Plugin Overdraf" />
							</div>
						</SolutionsContent>
					</div>
					<SolutionsBg style={a2} />
				</SolutionsOverflow>
			</SolutionsDisplay>
		</Solutions>
	);
};

export default BankingAnimate2;
