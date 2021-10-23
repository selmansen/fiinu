import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { Animate } from "./Function";
import { ScreenLg, ScreenMd, ScreenSm, ScreenXs, SHeight, ColorTuna, ColorGoldenYellow } from "./Variables";
import { H3, H5, P } from "./Typography";

const Second = styled.section`
	height: calc(${SHeight}* 3);
	min-height: calc(840px * 3);
	@media (max-width: ${ScreenLg}) {
		min-height: calc(800px * 3);
	}
	@media (max-width: ${ScreenMd}) {
		min-height: calc(650px * 3);
	}
	@media (max-width: ${ScreenSm}) {
		min-height: calc(840px * 3);
	}
	@media (max-width: ${ScreenXs}) {
		min-height: auto;
		height: calc(${SHeight}* 3.5);
	}
`;

const SecondDisplay = styled.div`
	height: ${SHeight};
	min-height: 840px;
	position: sticky;
	top: 0;
	@media (max-width: ${ScreenLg}) {
		min-height: 800px;
	}
	@media (max-width: ${ScreenMd}) {
		min-height: 650px;
	}
	@media (max-width: ${ScreenSm}) {
		min-height: 840px;
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
	.container {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
	}
`;

const SecondTopic = styled.div`
	position: absolute;
	text-align: center;
	right: 0;
	left: 0;
	bottom: 0;
	top: 0;
	.container {
		flex-direction: column;
	}
	h3,
	h5 {
		opacity: 0;
	}
	h3 {
		@media (max-width: ${ScreenSm}) {
			br {
				display: none;
			}
		}
	}
	h5 {
		margin-top: 75px;
		@media (max-width: ${ScreenMd}) {
			margin-top: 36px;
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
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 3;
	@media (max-width: ${ScreenMd}) {
		padding-top: 0;
	}
	@media (max-width: ${ScreenSm}) {
		flex-direction: column;
	}
	@media (max-width: ${ScreenXs}) {
		position: relative;
	}
	.container {
		justify-content: flex-start;
		@media (max-width: ${ScreenSm}) {
			height: auto;
			align-items: flex-start;
			margin: 0 auto;
		}
		> div {
			padding: 80.5px 50px 0px 0px;
			width: 50%;
			@media (max-width: ${ScreenMd}) {
				padding: 0 50px 0px 0px;
			}
			@media (max-width: ${ScreenSm}) {
				width: 100%;
				padding: 36px 0px 0px 0px;
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
			position: relative;
			padding-left: 20px;
			&:before {
				content: "";
				background: ${ColorTuna};
				border-radius: 8px;
				left: 0;
				top: 14px;
				height: 8px;
				width: 8px;
				position: absolute;
			}
			+ p {
				margin-top: 16px;
			}
		}
	}
`;

const Marlot = styled.div`
	width: 50%;
	bottom: 0;
	height: calc(100% - 82.5px);
	right: 0;
	position: absolute;
	z-index: 2;
	overflow: hidden;
	@media (max-width: ${ScreenMd}) {
		height: 100%;
	}
	@media (max-width: ${ScreenSm}) {
		position: relative;
		height: 450px;
		width: 100%;
	}
	@media (max-width: ${ScreenXs}) {
		height: 300px;
	}
	.image {
		width: 100%;
		box-shadow: 0px 70px 100px -50px rgba(51, 61, 71, 0.2);
		height: 100%;
	}
`;

const Location = styled.div`
	background: ${ColorGoldenYellow};
	border-radius: 36px;
	padding: 36px;
	position: absolute;
	top: 44px;
	left: 44px;
	z-index: 2;
	color: ${ColorTuna};
	opacity: 0;
	transition: 0.7s;
	transform: translateX(-100%);
	@media (max-width: ${ScreenSm}) {
		border-radius: 0;
		padding: 26px;
		top: 0;
		left: 0;
	}
	@media (max-width: ${ScreenXs}) {
		padding: 10px 10px 15px;
	}
	&.animate {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
	span {
		margin-top: 14px;
		background: white;
		padding: 7px 10px;
		border-radius: 36px;
		font-size: 16px;
		line-height: 16px;
		display: inline-flex;
		align-items: center;
		@media (max-width: ${ScreenXs}) {
			margin-top: 10px;
		}
		svg {
			margin-right: 6px;
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
		transform: `translateX(${transform > 50 ? (transform < 150 ? 150 - transform : "0") : "100"}vw)`
	};
	const a5 = {
		transform: `scale(${transform > 150 ? (transform < 200 ? 1.5 - (transform - 150) / 50 / 2 : "1") : "1.5"})`
	};

	return (
		<Second id="second" data-child="4">
			<SecondDisplay>
				<SecondOverflow>
					<SecondTopic>
						<div className="container">
							<H3 color={ColorTuna} style={a1}>
								At one point in their life, everyone <br />
								needs access to credit
							</H3>
							<H5 style={a2}>Like Margot...</H5>
						</div>
					</SecondTopic>
					<SecondContent>
						<Marlot style={a4}>
							<Location className={opacity > 4 ? "animate" : false}>
								<P>
									<b>Margot Chederholm, 35</b>
								</P>
								<P>Real estate agent</P>
								<span>
									<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7 0C3.7 0 0.25 2.55 0.25 6.75C0.25 10.725 6.25 16.8 6.475 17.025C6.625 17.175 6.775 17.25 7 17.25C7.225 17.25 7.375 17.175 7.525 17.025C7.75 16.8 13.75 10.725 13.75 6.75C13.75 2.55 10.3 0 7 0ZM7 9C5.725 9 4.75 8.025 4.75 6.75C4.75 5.475 5.725 4.5 7 4.5C8.275 4.5 9.25 5.475 9.25 6.75C9.25 8.025 8.275 9 7 9Z" fill="#F79714" />
									</svg>
									Living in London
								</span>
							</Location>
							<BgImage className="image" image={margotImage} style={a5} />
						</Marlot>
						<div className="container">
							<div>
								<H5 className={opacity > 4 ? "animate" : false}>She is;</H5>
								<P className={opacity > 4.1 ? "animate" : false}>A real estate agent.</P>
								<P className={opacity > 4.2 ? "animate" : false}>Aged 35.</P>
								<P className={opacity > 4.3 ? "animate" : false}>She’s a working mum with a son, age 4.</P>
								<P className={opacity > 4.4 ? "animate" : false}>Recently divorced.</P>
								<P className={opacity > 4.5 ? "animate" : false}>She’s just started paying nursery fees for her son.</P>
								<P className={opacity > 4.6 ? "animate" : false}>Her son also plays football at the local club and has a range of other hobbies.</P>
								<P className={opacity > 4.7 ? "animate" : false}>She’s committed to giving her son every chance in life.</P>
								<P className={opacity > 4.8 ? "animate" : false}>A few times a year she’s maxed out at the end of the month and needs to dip into her overdraft.</P>
							</div>
						</div>
					</SecondContent>
					<SecondBg style={a3} />
				</SecondOverflow>
			</SecondDisplay>
		</Second>
	);
};

export default BankingAnimate2;
