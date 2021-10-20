import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { Animate } from "./Function";
import { ScreenMd, ScreenSm, ScreenXs, SHeight, ColorTuna, ColorGoldenYellow } from "./Variables";
import { H2, H3 } from "./Typography";

const Market = styled.section`
	height: calc(${SHeight}* 5.5);
	min-height: calc(676px * 5.5);
	margin-bottom: -150px;
	@media (max-width: ${ScreenMd}) {
		min-height: calc(630px * 5.5);
	}
	@media (max-width: ${ScreenSm}) {
		margin-bottom: -220px;
	}
	@media (max-width: ${ScreenXs}) {
		margin-bottom: 0px;
	}
`;

const Display = styled.div`
	height: ${SHeight};
	min-height: 676px;
	position: sticky;
	top: 0;
	@media (max-width: ${ScreenMd}) {
		min-height: 630px;
	}
`;

const Overflow = styled.div`
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

const Title = styled(H3)`
	font-size: 72px;
	text-align: center;
	position: absolute;
	max-width: 1260px;
	opacity: 1;
	@media (max-width: ${ScreenSm}) {
		font-size: 36px;
		line-height: 44px;
	}
	@media (max-width: ${ScreenSm}) {
		right:10px;
		left:10px;
	}
`;

const BigTitle = styled(H2)`
	color: ${ColorTuna};
	padding: 0 43px;
	position: relative;
	z-index: 1;
	opacity: 0;
	@media (max-width: ${ScreenSm}) {
		font-size: 77px;
		line-height: 77px;
		padding: 0 18px;
	}
	@media (max-width: ${ScreenXs}) {
		font-size: 44px;
		line-height: 56px;
		padding: 0 15px;
	}
	span {
		background: ${ColorGoldenYellow};
		height: calc(100% + 67px);
		left: 0;
		position: absolute;
		top: -28px;
		width: 64px;
		z-index: -1;
		@media (max-width: ${ScreenSm}) {
			height: calc(100% + 40px);
			top: -20px;
		}
		@media (max-width: ${ScreenXs}) {
			height: calc(100% + 9px);
			top: -5px;
		}
	}
`;

const Imgs = styled.div`
	height: 676px;
	position: absolute;
	width: 1495px;
	margin-top: -100px;
	@media (max-width: ${ScreenXs}) {
		height: 690px;
		width: 320px;
	}
	@media (max-width: ${ScreenMd}) {
		transform: scale(0.75);
	}
	@media (max-width: ${ScreenSm}) {
		margin-top: -60px;
		transform: scale(0.5);
	}
	@media (max-width: ${ScreenXs}) {
		margin-top: -58px;
		transform: scale(1);
	}
	span {
		animation-timing-function: ease-in-out;
		border-radius: 10px;
		height: 10px;
		position: absolute;
		transform: scale(0);
		transition: 0.5s;
		width: 10px;
		z-index: -1;
		@media (max-width: ${ScreenXs}) {
			width: 6px;
			height: 6px;
		}
		&.animate {
			transform: scale(1);
		}
		&.b1 {
			background: #cbf4f0;
		}
		&.b2 {
			background: #fcde02;
		}
		&.b3 {
			background: #f79714;
		}
		&.s1 {
			left: 146px;
			top: 631px;
			@media (max-width: ${ScreenXs}) {
				left: 290px;
				top: 260px;
			}
		}
		&.s2 {
			left: 279px;
			top: 579px;
			@media (max-width: ${ScreenXs}) {
				left: 138px;
				top: 225px;
			}
		}
		&.s3 {
			left: 617px;
			top: 185px;
			@media (max-width: ${ScreenXs}) {
				left: 130px;
				top: 167px;
			}
		}
		&.s4 {
			left: 81px;
			top: 171px;
			@media (max-width: ${ScreenXs}) {
				left: 45px;
				top: 280px;
			}
		}
		&.s5 {
			left: 479px;
			top: 564px;
			@media (max-width: ${ScreenXs}) {
				left: 98px;
				top: 340px;
			}
		}
		&.s6 {
			left: 900px;
			top: 780px;
			@media (max-width: ${ScreenXs}) {
				left: 313px;
				top: 160px;
			}
		}
		&.s7 {
			left: 793px;
			top: 393px;
		}
		&.s8 {
			left: 880px;
			top: 694px;
		}
		&.s9 {
			left: 1174px;
			top: 56px;
			@media (max-width: ${ScreenXs}) {
				left: 125px;
				top: 440px;
			}
		}
		&.s10 {
			left: 1253px;
			top: 153px;
		}
		&.s11 {
			left: 1374px;
			top: 415px;
		}
	}
`;

const ImgWrap = styled.div`
	animation-timing-function: ease-in-out;
	border-radius: 100%;
	overflow: hidden;
	position: absolute;
	transform: scale(0);
	transition: 0.5s;
	&.animate {
		transform: scale(1);
	}
	&:nth-child(1) {
		left: -90px;
		top: 350px;
		@media (max-width: ${ScreenXs}) {
			left: -60px;
			top: 422px;
			width: 123px;
		}
	}
	&:nth-child(2) {
		left: 240px;
		top: 32px;
		@media (max-width: ${ScreenXs}) {
			left: -10px;
			top: 181px;
			width: 92px;
		}
	}
	&:nth-child(3) {
		left: 340px;
		top: 666px;
		@media (max-width: ${ScreenXs}) {
			left: 176px;
			top: 534px;
			width: 27px;
		}
	}
	&:nth-child(4) {
		left: 389px;
		top: 498px;
		@media (max-width: ${ScreenXs}) {
			left: 82px;
			top: 477px;
			width: 71px;
		}
	}
	&:nth-child(5) {
		left: 81px;
		top: 191px;
		@media (max-width: ${ScreenXs}) {
			left: -40px;
			top: 305px;
			width: 54px;
		}
	}
	&:nth-child(6) {
		left: 505px;
		top: 641px;
		@media (max-width: ${ScreenXs}) {
			left: 103px;
			top: 583px;
			width: 101px;
		}
	}
	&:nth-child(7) {
		left: 617px;
		top: 67px;
		@media (max-width: ${ScreenXs}) {
			left: 80px;
			top: 134px;
			width: 30px;
		}
	}
	&:nth-child(8) {
		left: 695px;
		top: 506px;
		@media (max-width: ${ScreenXs}) {
			left: 123px;
			top: 265px;
			width: 59px;
		}
	}
	&:nth-child(9) {
		left: 684px;
		top: 143px;
		@media (max-width: ${ScreenXs}) {
			left: 300px;
			top: 200px;
			width: 55px;
		}
	}
	&:nth-child(10) {
		left: 793px;
		top: 661px;
		@media (max-width: ${ScreenXs}) {
			left: 240px;
			top: 530px;
			width: 30px;
		}
	}
	&:nth-child(11) {
		left: 957px;
		top: 514px;
		@media (max-width: ${ScreenXs}) {
			left: 10px;
			top: 125px;
			width: 24px;
		}
	}
	&:nth-child(12) {
		left: 858px;
		top: 46px;
		@media (max-width: ${ScreenXs}) {
			left: 118px;
			top: 64px;
			width: 96px;
		}
	}
	&:nth-child(13) {
		left: 877px;
		top: 573px;
		@media (max-width: ${ScreenXs}) {
			left: 163px;
			top: 420px;
			width: 43px;
		}
	}
	&:nth-child(14) {
		left: 1240px;
		top: 184px;
		@media (max-width: ${ScreenXs}) {
			left: 233px;
			top: 388px;
			width: 140px;
		}
	}
	&:nth-child(15) {
		left: 1073px;
		top: 526px;
		@media (max-width: ${ScreenXs}) {
			left: 185px;
			top: 175px;
			width: 85px;
		}
	}
	&:nth-child(16) {
		left: 1194px;
		top: 51px;
		@media (max-width: ${ScreenXs}) {
			left: 278px;
			top: 295px;
			width: 40px;
		}
	}
`;

const BankingAnimate3 = () => {
	const [width, setWidth] = useState(0);
	const [scale, setScale] = useState(0);

	const data = useStaticQuery(graphql`
		query {
			marketImg1: file(relativePath: { eq: "market-a-img-1.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg2: file(relativePath: { eq: "market-a-img-2.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg3: file(relativePath: { eq: "market-a-img-3.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg4: file(relativePath: { eq: "market-a-img-4.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg5: file(relativePath: { eq: "market-a-img-5.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg6: file(relativePath: { eq: "market-a-img-6.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg7: file(relativePath: { eq: "market-a-img-7.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg8: file(relativePath: { eq: "market-a-img-8.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg9: file(relativePath: { eq: "market-a-img-9.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg10: file(relativePath: { eq: "market-a-img-10.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg11: file(relativePath: { eq: "market-a-img-11.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg12: file(relativePath: { eq: "market-a-img-12.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg13: file(relativePath: { eq: "market-a-img-13.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg14: file(relativePath: { eq: "market-a-img-14.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg15: file(relativePath: { eq: "market-a-img-15.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
			marketImg16: file(relativePath: { eq: "market-a-img-16.png" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
				}
			}
		}
	`);

	const animateRatio = Animate("market");

	const marketImg1 = getImage(data.marketImg1);
	const marketImg2 = getImage(data.marketImg2);
	const marketImg3 = getImage(data.marketImg3);
	const marketImg4 = getImage(data.marketImg4);
	const marketImg5 = getImage(data.marketImg5);
	const marketImg6 = getImage(data.marketImg6);
	const marketImg7 = getImage(data.marketImg7);
	const marketImg8 = getImage(data.marketImg8);
	const marketImg9 = getImage(data.marketImg9);
	const marketImg10 = getImage(data.marketImg10);
	const marketImg11 = getImage(data.marketImg11);
	const marketImg12 = getImage(data.marketImg12);
	const marketImg13 = getImage(data.marketImg13);
	const marketImg14 = getImage(data.marketImg14);
	const marketImg15 = getImage(data.marketImg15);
	const marketImg16 = getImage(data.marketImg16);

	useEffect(() => {
		setWidth(animateRatio * 75 + 9);
		setScale(animateRatio);
	}, [animateRatio]);

	const a3 = {
		opacity: scale > 1.5 ? "0" : 1.5 - scale
	};

	const a1 = {
		width: `${width > 234 ? (width < 325 ? width - 225 : width < 418 ? 425 - width : "7") : "9"}%`
	};
	const a2 = {
		opacity: scale > 2.5 ? "1" : scale < 1.5 ? "0" : scale - 1.5
	};
	return (
		<>
			<Market id="market" data-child="5">
				<Display>
					<Overflow>
						<div className="container">
							<Title style={a3}>Ultimately, our technology will create a new market where unbundled overdraft has increased financial fairness and freedom for...</Title>
							<BigTitle style={a2}>
								<span style={a1}></span> {width < 326 ? "everyone" : "everywhere"}
							</BigTitle>
							<Imgs>
								<ImgWrap className={scale > 6.2 ? "animate" : false}>
									<GatsbyImage image={marketImg1} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 5.8 ? "animate" : false}>
									<GatsbyImage image={marketImg2} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.4 ? "animate" : false}>
									<GatsbyImage image={marketImg3} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.6 ? "animate" : false}>
									<GatsbyImage image={marketImg4} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6 ? "animate" : false}>
									<GatsbyImage image={marketImg5} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 5.6 ? "animate" : false}>
									<GatsbyImage image={marketImg6} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 5.9 ? "animate" : false}>
									<GatsbyImage image={marketImg7} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.7 ? "animate" : false}>
									<GatsbyImage image={marketImg8} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.5 ? "animate" : false}>
									<GatsbyImage image={marketImg9} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6 ? "animate" : false}>
									<GatsbyImage image={marketImg10} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 7.1 ? "animate" : false}>
									<GatsbyImage image={marketImg11} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 5.7 ? "animate" : false}>
									<GatsbyImage image={marketImg12} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.9 ? "animate" : false}>
									<GatsbyImage image={marketImg13} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.3 ? "animate" : false}>
									<GatsbyImage image={marketImg14} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.1 ? "animate" : false}>
									<GatsbyImage image={marketImg15} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.8 ? "animate" : false}>
									<GatsbyImage image={marketImg16} alt="Everywhere" />
								</ImgWrap>
								<span className={`s1 b1 ${scale > 5.8 ? "animate" : ""}`}></span>
								<span className={`s2 b1 ${scale > 6.5 ? "animate" : ""}`}></span>
								<span className={`s3 b2 ${scale > 6.3 ? "animate" : ""}`}></span>
								<span className={`s4 b3 ${scale > 7.1 ? "animate" : ""}`}></span>
								<span className={`s5 b3 ${scale > 6.7 ? "animate" : ""}`}></span>
								<span className={`s6 b1 ${scale > 6.3 ? "animate" : ""}`}></span>
								<span className={`s9 b3 ${scale > 5.9 ? "animate" : ""}`}></span>
							</Imgs>
						</div>
					</Overflow>
				</Display>
			</Market>
		</>
	);
};

export default BankingAnimate3;
