import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { Animate, IsMobile } from "./Function";
import { ScreenMd, ScreenSm, ScreenXs, SHeight, ColorTuna, ColorGoldenYellow } from "./Variables";
import { H2, H3 } from "./Typography";

const Market = styled.section`
	height: calc(${SHeight}* 5.6);
	min-height: calc(676px * 5.6);
	margin-bottom:-150px;
	@media (max-width: ${ScreenMd}) {
		min-height: calc(630px * 5.6);
	}
	@media (max-width: ${ScreenSm}) {
		margin-bottom:-220px;
	}
	@media (max-width:${ScreenXs}){
		margin-bottom: -70px;
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

const Title = styled.div`
	position: relative;
	height: calc(${SHeight} * 1.5);
	.container {
		height: 100%;
	}
	h3 {
		align-items: center;
		display: flex;
		font-size: 72px;
		height: ${SHeight};
		justify-content: center;
		line-height: 64px;
		position: sticky;
		text-align: center;
		top: 0;
		@media (max-width: ${ScreenSm}) {
			font-size: 36px;
			line-height: 44px;
		}
	}
`;

const BigTitle = styled(H2)`
	color: ${ColorTuna};
	padding: 0 43px;
	position: relative;
	z-index: 1;
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
	margin-top:-100px;
	@media (max-width: ${ScreenXs}) {
		height: 690px;
		width: 360px;
	}
	@media (max-width: ${ScreenMd}) {
		transform: scale(0.75);
	}
	@media (max-width: ${ScreenSm}) {
		margin-top:-150px;
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
			left: 229px;
			top: 595px;
			@media (max-width: ${ScreenXs}) {
				left: 290px;
				top: 260px;
			}
		}
		&.s2 {
			left: 382px;
			top: 563px;
			@media (max-width: ${ScreenXs}) {
				left: 138px;
				top: 225px;
			}
		}
		&.s3 {
			left: 365px;
			top: 724px;
			@media (max-width: ${ScreenXs}) {
				left: 130px;
				top: 167px;
			}
		}
		&.s4 {
			left: 477px;
			top: 255px;
			@media (max-width: ${ScreenXs}) {
				left: 45px;
				top: 280px;
			}
		}
		&.s5 {
			left: 564px;
			top: 480px;
			@media (max-width: ${ScreenXs}) {
				left: 98px;
				top: 340px;
			}
		}
		&.s6 {
			left: 617px;
			top: 180px;
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
			left: 982px;
			top: 188px;
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
		left: 68px;
		top: 234px;
		@media (max-width: ${ScreenXs}) {
			left: -60px;
			top: 399px;
			width: 123px;
		}
	}
	&:nth-child(2) {
		left: 268px;
		top: 84px;
		@media (max-width: ${ScreenXs}) {
			left: -10px;
			top: 181px;
			width: 92px;
		}
	}
	&:nth-child(3) {
		left: 423px;
		top: 587px;
		@media (max-width: ${ScreenXs}) {
			left: 176px;
			top: 534px;
			width: 27px;
		}
	}
	&:nth-child(4) {
		left: 418px;
		top: 423px;
		@media (max-width: ${ScreenXs}) {
			left: 82px;
			top: 477px;
			width: 71px;
		}
	}
	&:nth-child(5) {
		left: 477px;
		top: 280px;
		@media (max-width: ${ScreenXs}) {
			left: 20px;
			top: 305px;
			width: 54px;
		}
	}
	&:nth-child(6) {
		left: 514px;
		top: 507px;
		@media (max-width: ${ScreenXs}) {
			left: 103px;
			top: 583px;
			width: 101px;
		}
	}
	&:nth-child(7) {
		left: 689px;
		top: 136px;
		@media (max-width: ${ScreenXs}) {
			left: 80px;
			top: 134px;
			width: 30px;
		}
	}
	&:nth-child(8) {
		left: 698px;
		top: 458px;
		@media (max-width: ${ScreenXs}) {
			left: 183px;
			top: 440px;
			width: 59px;
		}
	}
	&:nth-child(9) {
		left: 751px;
		top: 204px;
		@media (max-width: ${ScreenXs}) {
			left: 300px;
			top: 200px;
			width: 55px;
		}
	}
	&:nth-child(10) {
		left: 796px;
		top: 613px;
		@media (max-width: ${ScreenXs}) {
			left: 240px;
			top: 530px;
			width: 30px;
		}
	}
	&:nth-child(11) {
		left: 843px;
		top: 351px;
		@media (max-width: ${ScreenXs}) {
			left: 10px;
			top: 125px;
			width: 24px;
		}
	}
	&:nth-child(12) {
		left: 858px;
		top: 51px;
		@media (max-width: ${ScreenXs}) {
			left: 118px;
			top: 64px;
			width: 96px;
		}
	}
	&:nth-child(13) {
		left: 880px;
		top: 515px;
		@media (max-width: ${ScreenXs}) {
			left: 263px;
			top: 460px;
			width: 43px;
		}
	}
	&:nth-child(14) {
		left: 994px;
		top: 189px;
		@media (max-width: ${ScreenXs}) {
			left: 103px;
			top: 258px;
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
		left: 1273px;
		top: 148px;
		@media (max-width: ${ScreenXs}) {
			left: 298px;
			top: 385px;
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
	const isMobile = IsMobile();
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

	const a1 = {
		width: `${width > 234 ? (width < 325 ? width - 225 : width < 418 ? 425 - width : "7") : "9"}%`
	};
	const a2 = {
		transform: `scale( ${scale > 5.5 ? (scale < 6.5 ? 6.5 - scale : "0") : "1"} )`
	};
	return (
		<>
			<Market id="market" data-child="5">
				<Title>
					<div className="container">
						<H3>Ultimately, our technology will create a new market where unbundled overdraft has increased financial fairness and freedom for...</H3>
					</div>
				</Title>
				<Display>
					<Overflow>
						<div className="container">
							<BigTitle style={a2}>
								<span style={a1}></span> {width < 326 ? "everyone" : "everywhere"}
							</BigTitle>
							<Imgs>
								<ImgWrap className={scale > 7.2 ? "animate" : false}>
									<GatsbyImage image={marketImg1} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.8 ? "animate" : false}>
									<GatsbyImage image={marketImg2} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 7.4 ? "animate" : false}>
									<GatsbyImage image={marketImg3} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 7.6 ? "animate" : false}>
									<GatsbyImage image={marketImg4} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 7 ? "animate" : false}>
									<GatsbyImage image={marketImg5} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.6 ? "animate" : false}>
									<GatsbyImage image={marketImg6} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.9 ? "animate" : false}>
									<GatsbyImage image={marketImg7} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 7.7 ? "animate" : false}>
									<GatsbyImage image={marketImg8} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 7.5 ? "animate" : false}>
									<GatsbyImage image={marketImg9} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 8 ? "animate" : false}>
									<GatsbyImage image={marketImg10} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 8.1 ? "animate" : false}>
									<GatsbyImage image={marketImg11} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 6.7 ? "animate" : false}>
									<GatsbyImage image={marketImg12} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 7.9 ? "animate" : false}>
									<GatsbyImage image={marketImg13} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 7.3 ? "animate" : false}>
									<GatsbyImage image={marketImg14} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 7.1 ? "animate" : false}>
									<GatsbyImage image={marketImg15} alt="Everywhere" />
								</ImgWrap>
								<ImgWrap className={scale > 7.8 ? "animate" : false}>
									<GatsbyImage image={marketImg16} alt="Everywhere" />
								</ImgWrap>
								<span className={`s1 b1 ${scale > 6.8 ? "animate" : ""}`}></span>
								<span className={`s2 b1 ${scale > 7.5 ? "animate" : ""}`}></span>
								<span className={`s3 b2 ${scale > 7.3 ? "animate" : ""}`}></span>
								<span className={`s4 b3 ${scale > 8.1 ? "animate" : ""}`}></span>
								<span className={`s5 b3 ${scale > 6.7 ? "animate" : ""}`}></span>
								<span className={`s6 b2 ${scale > 7.3 ? "animate" : ""}`}></span>
								<span className={`s9 b2 ${scale > 6.9 ? "animate" : ""}`}></span>
								{isMobile ? (
									<>
										<span className={`s7 b1 ${scale > 7.7 ? "animate" : ""}`}></span>
										<span className={`s8 b1 ${scale > 6.6 ? "animate" : ""}`}></span>
										<span className={`s10 b3 ${scale > 7.4 ? "animate" : ""}`}></span>
										<span className={`s11 b2 ${scale > 7.6 ? "animate" : ""}`}></span>
									</>
								) : (
									false
								)}
							</Imgs>
						</div>
					</Overflow>
				</Display>
			</Market>
		</>
	);
};

export default BankingAnimate3;
