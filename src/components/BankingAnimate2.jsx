import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { Animate } from "./Function";
import { ScreenLg, ScreenMd, ScreenSm, ScreenXs, SHeight, ColorTuna } from "./Variables";
import { H3, H5, P } from "./Typography";

const Second = styled.section`
	height: calc(${SHeight}* 3.5);
	min-height: calc(840px * 3.5);
	@media (max-width: ${ScreenLg}) {
		min-height: calc(780px * 3.5);
	}
	@media (max-width: ${ScreenMd}) {
		min-height: calc(630px * 3.5);
	}
	@media (max-width: ${ScreenSm}) {
		min-height: calc(1135px * 2.5);
	}
	@media (max-width: ${ScreenXs}) {
		min-height: auto;
		height: calc(${SHeight}* 4);
	}
`;

const SecondDisplay = styled.div`
	height: ${SHeight};
	min-height: 840px;
	position: sticky;
	top: 0;
	@media (max-width: ${ScreenLg}) {
		min-height: 780px;
	}
	@media (max-width: ${ScreenMd}) {
		min-height: 630px;
	}
	@media (max-width: ${ScreenSm}) {
		min-height: 1135px;
	}
	@media (max-width: ${ScreenXs}) {
		height: auto;
		min-height: auto;
	}
`;

const SecondOverflow = styled.div`
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
`;

const SecondTopic = styled.div`
	position: absolute;
	text-align: center;
	@media (max-width: ${ScreenMd}) {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: center;
		right:0;
		left:0;
	}
	@media (max-width: ${ScreenXs}) {
		right:10px;
		left:10px;
	}
	h3,
	h5 {
		opacity: 0;
	}
	h3{
		@media (max-width: ${ScreenSm}) {
			br{
				display:none;
			}
		}
	}
	h5 {
		margin-top: 75px;
		@media (max-width: ${ScreenMd}) {
			margin-top:36px;
		}
	}
`;

const SecondBg = styled.div`
	background: rgba(203, 244, 240, 0.8);
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

const SecondContent = styled.div`
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
		}
		@media (max-width: ${ScreenMd}) {
			margin-bottom: 0px;
		}
		@media (max-width: ${ScreenSm}) {
			margin-bottom: 36px;
		}
		@media (max-width: 500px) {
			border-radius:0;
		}
	}
	h5,
	p {
		opacity: 0;
		transition: 0.7s;
		transform: translate3d(0, 50%, 0);
		&.animate {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}
	p {
		margin-top: 24px;
		+ p {
			margin-top: 16px;
		}
	}
`;

const BankingAnimate2 = () => {
	const [opacity, setOpacity] = useState(0);
	const [transform, setTransform] = useState(0);

	const data = useStaticQuery(graphql`
		query {
			margotImage: file(relativePath: { eq: "margot-img.jpg" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
		}
	`);

	const animateRatio = Animate("second");
	const margotImage = getImage(data.margotImage);

	useEffect(() => {
		setOpacity(animateRatio);
		setTransform(animateRatio * 50 - 50);
	}, [animateRatio]);

	const a1 = {
		opacity: opacity > 1 ? "1" : opacity < 0 ? "0" : opacity,
		transform: `translateX(${transform > 50 ? (transform < 150 ? transform - 50 : "100") : "0"}vw)`
	};
	const a2 = {
		opacity: opacity > 2 ? "1" : opacity < 1 ? "0" : opacity - 1,
		transform: `translateX(${transform > 50 ? (transform < 150 ? transform - 50 : "100") : "0"}vw)`
	};
	const a3 = {
		transform: `translateX(${transform > 50 ? (transform < 150 ? 150 - transform : "0") : "100"}vw)`
	};
	const a4 = {
		transform: `translateY(${transform > 75 ? (transform < 175 ? 175 - transform : "0") : "100"}vh)`,
		opacity: opacity > 4.5 ? "1" : opacity < 2.5 ? "0" : (opacity - 2.5) / 2
	};

	return (
		<Second id="second" data-child="4">
			<SecondDisplay>
				<SecondOverflow>
					<div className="container">
						<SecondTopic>
							<H3 color={ColorTuna} style={a1}>
								At one point in their life, everyone <br />
								needs access to credit
							</H3>
							<H5 style={a2}>Like Margot...</H5>
						</SecondTopic>
						<SecondContent>
							<div>
								<H5 className={opacity > 4.5 ? "animate" : false}>She is;</H5>
								<P className={opacity > 4.6 ? "animate" : false}>A real estate agent.</P>
								<P className={opacity > 4.7 ? "animate" : false}>Aged 35.</P>
								<P className={opacity > 4.8 ? "animate" : false}>She’s a working mum with a son, age 4.</P>
								<P className={opacity > 4.9 ? "animate" : false}>Recently divorced.</P>
								<P className={opacity > 5 ? "animate" : false}>She’s just started paying nursery fees for her son.</P>
								<P className={opacity > 5.1 ? "animate" : false}>Her son also plays football at the local club and has a range of other hobbies.</P>
								<P className={opacity > 5.2 ? "animate" : false}>She’s committed to giving her son every chance in life.</P>
								<P className={opacity > 5.3 ? "animate" : false}>Few times a year she’s maxed out at the end of the month and needs to go into her overdraft.</P>
							</div>
							<div style={a4}>
								<GatsbyImage className="personal-image" image={margotImage} alt="Personal Finance Management app with integrated Plugin Overdraf" />
							</div>
						</SecondContent>
					</div>
					<SecondBg style={a3} />
				</SecondOverflow>
			</SecondDisplay>
		</Second>
	);
};

export default BankingAnimate2;
