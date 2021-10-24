import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TrackVisibility from "react-on-screen";
import scrollTo from "gatsby-plugin-smoothscroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BankingAnimate1 from "../components/BankingAnimate1";
import BankingAnimate2 from "../components/BankingAnimate2";
import BankingAnimate3 from "../components/BankingAnimate3";
import { ScrollTop, IsMobile, IsTablet } from "../components/Function";
import * as Variables from "../components/Variables";
import { H3, H5, P } from "../components/Typography";

import UKMaps from "../images/uk-map.svg";
import TSB from "../images/tsb-logo.svg";
import Nationwide from "../images/nationwide-logo.svg";
import Barclays from "../images/barclays-logo.svg";
import LloydsBank from "../images/lloyds-bank-logo.svg";
import Cashier from "../images/cashier.svg";
import CalculatorsTrue from "../images/calculators-true.svg";
import CalculatorsFalse from "../images/calculators-false.svg";
import Service from "../images/service.svg";
import RightCircle from "../images/icon-right-circle.svg";
import ResearchCircle1 from "../images/research-circle-1.svg";
import ResearchCircle1Mobile from "../images/research-circle-1-m.svg";
import ResearchCircle2 from "../images/research-circle-2.svg";
import ResearchCircle2Mobile from "../images/research-circle-2-m.svg";

const ScrollToBar = styled.div`
	position: fixed;
	right: 30px;
	z-index: 99;
	height: 100%;
	width: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const ScrollToBarButton = styled.span`
	transition: 0.4s;
	width: 12px;
	height: 12px;
	border: 1px solid ${Variables.ColorLightGray};
	border-radius: 12px;
	cursor: pointer;
	+ span {
		margin-top: 8px;
	}
	&:hover,
	&.active {
		background: ${Variables.ColorTuna};
		border-color: ${Variables.ColorTuna};
	}
`;
const Container = styled.section`
	.container {
		display: flex;
		flex-wrap: wrap;
	}
	.left {
		padding-right: 100px;
		width: 50%;
		@media (max-width: ${Variables.ScreenMd}) {
			width: 100%;
			padding-right: 0;
		}
	}
	.right {
		width: 50%;
		@media (max-width: ${Variables.ScreenMd}) {
			width: 100%;
			margin-top: 36px;
		}
	}
	.animated {
		opacity: 0;
	}
	@media (max-width: ${Variables.ScreenMd}) {
		br {
			display: none;
		}
	}
`;
const Carousel = styled(Slider)`
	width: 100%;
	opacity: 0;
	@media (max-width: ${Variables.ScreenXs}) {
		opacity: 1;
	}
	.slick-slide {
		padding: 0 10px;
	}
	.slick-list {
		transition: 0.3s;
	}
	.slick-dots {
		display: flex !important;
		align-items: center;
		justify-content: center;
		margin-top: 50px;
		li {
			button {
				width: 12px;
				height: 12px;
				background: ${Variables.ColorLightGray};
				border-radius: 12px;
				font-size: 0;
				display: block;
				transition: 0.3s;
			}
			+ li {
				margin-left: 8px;
			}
			&.slick-active {
				button {
					background: ${Variables.ColorWarmBlue};
				}
			}
		}
	}
`;
const Location = styled(Container)`
	padding-top: 240px;
	backdrop-filter: opacity(1);
	@media (max-width: ${Variables.ScreenMd}) {
		padding-top: 72px;
	}
	h3 {
		color: ${Variables.ColorWarmBlue};
	}
`;
const UKMap = styled.div`
	position: relative;
	&:before {
		content: "";
		width: 515px;
		height: 778px;
		background: url(${UKMaps}) no-repeat;
		position: absolute;
		top: -184px;
		left: 73px;
		z-index: -1;
		@media (max-width: ${Variables.ScreenMd}) {
			display: none;
		}
	}
`;
const PurpleBox = styled.div`
	background: ${Variables.ColorWarmBlue};
	border-radius: 16px;
	mix-blend-mode: multiply;
	padding: 36px;
	color: #fff;
	margin-top: ${({ marginTop }) => marginTop || 0}px;
	p {
		margin-top: 50px;
	}
`;
const WhyLose = styled(Container)`
	padding-top: 100px;
	margin-top: 200px;
	@media (max-width: ${Variables.ScreenMd}) {
		margin-top: 0px;
		padding-top: 72px;
	}
	.animated {
		animation-timing-function: ease-in-out;
		animation-duration: 0.5s;
	}

	.right {
		display: flex;
		margin-bottom: -28px;
		@media (max-width: ${Variables.ScreenXs}) {
			margin: 36px -10px 0;
			width: calc(100% + 20px);
		}
		> div {
			width: 50%;
			&:nth-child(2) {
				> div > div {
					animation-delay: 0.2s;
				}
			}
			@media (max-width: ${Variables.ScreenXs}) {
				width: 100%;
			}
			&:first-child {
				margin-right: 28px;
				@media (max-width: ${Variables.ScreenXs}) {
					margin-right: 0;
				}
			}
			&:nth-child(2) {
				div:nth-child(2) {
					img {
						margin-top: 30px;
					}
				}
			}
		}
	}
	p {
		margin-top: 24px;
	}
`;
const BankBox = styled.div`
	background: #f0f0f2;
	border-radius: 16px;
	padding: 36px;
	margin-bottom: 28px;
	@media (max-width: ${Variables.ScreenXs}) {
		margin-bottom: 0;
	}
	img {
		margin-top: 45px;
	}
`;
const Consumers = styled(Container)`
	padding-top: 100px;
	margin-top: 200px;
	@media (max-width: ${Variables.ScreenMd}) {
		margin-top: 0px;
		padding-top: 72px;
	}
	@media (max-width: ${Variables.ScreenSm}) {
		.slick-slider {
			opacity: 1;
			margin-top: 36px;
		}
	}
	p {
		+ p  {
			margin-top: 24px;
		}
	}
`;
const ConsumersList = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 92px;
	@media (max-width: ${Variables.ScreenMd}) {
		margin-top: 45px;
	}
`;
const ConsumersBox = styled.div`
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;

	@media (max-width: ${Variables.ScreenSm}) {
		max-width: 500px !important;
		width: auto !important;
		margin: auto;
		display: block !important;
	}
	+ div {
		.animated {
			&:before {
				content: "";
				background: url(${RightCircle}) no-repeat;
				background-size: 32px;
				width: 32px;
				height: 32px;
				position: absolute;
				left: -16px;
				top: calc(50% - 16px);
			}
		}
		&:nth-child(2) {
			.animated {
				animation-delay: 0.15s;
			}
		}
		&:nth-child(3) {
			.animated {
				animation-delay: 0.3s;
			}
		}
		&:nth-child(4) {
			.animated {
				animation-delay: 0.45s;
			}
		}
		&:nth-child(5) {
			.animated {
				animation-delay: 0.6s;
			}
		}
	}
	.animated {
		padding: 0 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		animation-duration: 0.5s;
		@media (max-width: ${Variables.ScreenMd}) {
			padding: 0 15px;
		}
	}
	span {
		text-align: center;
		font-size: 18px;
		line-height: 28px;
		display: block;
		margin-top: 45px;
	}
	img {
		@media (max-width: ${Variables.ScreenMd}) {
			max-width: 75%;
			margin: auto;
			height: auto;
		}
		@media (max-width: ${Variables.ScreenSm}) {
			max-width: 100%;
		}
	}
`;
const Wellcome = styled(Container)`
	margin-top: 270px;
	padding-top: 145px;
	background: ${Variables.ColorFantasy};
	@media (max-width: ${Variables.ScreenMd}) {
		margin-top: 36px;
		padding-top: 46px;
	}
	p {
		margin-top: 36px;
	}
	.right {
		position: relative;
		height: 810px;
		@media (max-width: ${Variables.ScreenMd}) {
			height: 423px;
			width: 290px;
			margin-left: auto;
			margin-right: auto;
		}
	}
	.iphone1,
	.iphone2 {
		position: absolute;
		animation-duration: 0.5s;
	}
	.iphone1 {
		width: 400px;
		left: 0;
		top: 0;
		z-index: 2;
		filter: drop-shadow(15px 50px 100px rgba(51, 61, 71, 0.2));
		@media (max-width: ${Variables.ScreenMd}) {
			filter: drop-shadow(0px 20px 40px rgba(51, 61, 71, 0.2));

			width: 209px;
		}
	}
	.iphone2 {
		width: 367px;
		left: 206px;
		top: 33px;
		z-index: 1;
		animation-delay: 0.15s;
		@media (max-width: ${Variables.ScreenMd}) {
			width: 192px;
			left: 100px;
			top: 9px;
		}
	}
`;
const Research = styled(Container)`
	padding: 240px 0 150px;
	background: ${Variables.ColorFantasy};
	@media (max-width: ${Variables.ScreenMd}) {
		padding: 72px 0 36px;
	}
	p {
		margin-top: 36px;
	}
	span {
		font-size: 16px;
		line-height: 24px;
		margin-top: 24px;
	}
	.left {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.research-img1,
	.research-img2 {
		width: 100%;
		height: auto;
		max-width: 780px;
		display: block;
	}
	.research-img2 {
		margin-top: 73px;
	}
	.slick-slide {
		img {
			margin: auto;
		}
	}
`;

const BanksContent = [
	{
		title: "We are removing the unarranged overdraft.",
		alt: "TSB Logo",
		src: TSB,
		width: 65,
		height: 24
	},
	{
		title: "You can only make payments if you have enough money available.",
		alt: "BARCLAYS Logo",
		src: Barclays,
		width: 119,
		height: 22
	},
	{
		title: "We won’t let you go over to an unarranged overdraft.",
		alt: "Nationwide Logo",
		src: Nationwide,
		width: 105,
		height: 21
	},
	{
		title: "If you don’t have enough money, we refuse to make the payment.",
		alt: "LLOYDS BANK Logo",
		src: LloydsBank,
		width: 141,
		height: 34
	}
];
const ConsumersContent = [
	{
		title: "Consumer makes purchase.",
		src: Cashier,
		width: 160,
		height: 160
	},
	{
		title: "They have insufﬁcient funds and can’t pay without some form of credit.",
		src: CalculatorsTrue,
		width: 172,
		height: 174
	},
	{
		title: "Cashier (or online retailer) offers POS credit or BNPL.",
		src: Cashier,
		width: 160,
		height: 160
	},
	{
		title: "Transaction is accepted by using retailer speciﬁc non-agnostic credit product.",
		src: CalculatorsFalse,
		width: 160,
		height: 175
	},
	{
		title: "Purchase is completed, but the consumer is unaware of the mark in their credit ﬁle.",
		src: Service,
		width: 150,
		height: 150
	}
];

const BankingSolutionsPage = ({ data }) => {
	const [section, setSection] = useState([]);
	const scrollTop = ScrollTop();
	const isMobile = IsMobile();
	const isTablet = IsTablet();

	const iphone1 = getImage(data.iphone1);
	const iphone2 = getImage(data.iphone2);

	useEffect(() => {
		const allSection = document.querySelectorAll("main > section");
		allSection.forEach((item) => {
			let arr = (arr) => [...arr, item.id];
			setSection(arr);
		});
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		swipeToSlide: true,
		touchThreshold: 100,
		arrows: false
	};

	return (
		<Layout>
			<Seo title="Banking Solutions" />
			{isMobile ? (
				<ScrollToBar>
					{section.map((item, i) => (
						<ScrollToBarButton className={`${scrollTop > document.querySelector(`#${item}`).offsetTop - 10 && scrollTop < document.querySelector(`#${item}`).clientHeight + document.querySelector(`#${item}`).offsetTop - 10 ? "active" : ""}`} key={i} onClick={() => scrollTo(`#${item}`)}></ScrollToBarButton>
					))}
				</ScrollToBar>
			) : null}
			<BankingAnimate1 />
			<BankingAnimate2 />
			<Location id="location">
				<div className="container">
					<div className="left">
						<TrackVisibility once offset={200}>
							{({ isVisible }) => <H3 className={`animated ${isVisible ? "fadeInUp" : ""}`}>There are 33M people like Margot, who use an overdraft annually, in the UK alone.</H3>}
						</TrackVisibility>
					</div>
					<div className="right">
						<UKMap>
							<TrackVisibility once offset={200}>
								{({ isVisible }) => (
									<PurpleBox className={`animated ${isVisible ? "fadeInUp" : ""}`}>
										<H5>16.5 Million</H5>
										<P>
											used an unarranged overdraft in 2019, <br />
											but all have lost access to it.
										</P>
									</PurpleBox>
								)}
							</TrackVisibility>
							<TrackVisibility once offset={200}>
								{({ isVisible }) => (
									<PurpleBox className={`animated ${isVisible ? "fadeInUp" : ""}`} marginTop="24">
										<H5>16.5 Million</H5>
										<P>
											is the size of the immediate funding gap <br />
											due to loss of access.
										</P>
									</PurpleBox>
								)}
							</TrackVisibility>
						</UKMap>
					</div>
				</div>
			</Location>
			<WhyLose id="whylose">
				<div className="container">
					<div className="left">
						<TrackVisibility once offset={200}>
							{({ isVisible }) => (
								<H3 className={`animated ${isVisible ? "fadeInUp" : ""}`}>
									Why did they lose <br />
									access and why are <br />
									retail banks not <br />
									helping?
								</H3>
							)}
						</TrackVisibility>
						<TrackVisibility once offset={200}>
							{({ isVisible }) => (
								<div className={`animated ${isVisible ? "fadeInUp" : ""}`}>
									<P>A new phenomenon caused by the regulation that became effective in November 2020. Banks are not allowed to charge fixed fees on overdrafts – all fees must be included in interest. </P>
									<P>Arranged and unarranged overdrafts have to be charged at the same rate. All existing banks removed access to unarranged overdrafts.</P>
								</div>
							)}
						</TrackVisibility>
					</div>
					<div className="right">
						{isMobile ? (
							<>
								<div>
									{BanksContent.map((item, i) =>
										i < 2 ? (
											<TrackVisibility key={i} once offset={100}>
												{({ isVisible }) => (
													<BankBox className={`animated ${isVisible ? "flipInY" : ""}`}>
														<H5>{item.title}</H5>
														<img src={item.src} alt={item.alt} width={item.width} height={item.height} />
													</BankBox>
												)}
											</TrackVisibility>
										) : null
									)}
								</div>
								<div>
									{BanksContent.map((item, i) =>
										i > 1 ? (
											<TrackVisibility key={i} once offset={100}>
												{({ isVisible }) => (
													<BankBox className={`animated ${isVisible ? "flipInY" : ""}`}>
														<H5>{item.title}</H5>
														<img src={item.src} alt={item.alt} width={item.width} height={item.height} />
													</BankBox>
												)}
											</TrackVisibility>
										) : null
									)}
								</div>
							</>
						) : (
							<Carousel {...settings}>
								{BanksContent.map((item, i) => (
									<BankBox key={i}>
										<H5>{item.title}</H5>
										<img src={item.src} alt={item.alt} width={item.width} height={item.height} />
									</BankBox>
								))}
							</Carousel>
						)}
					</div>
				</div>
			</WhyLose>
			<Consumers id="consumers">
				<div className="container">
					<div className="left">
						<TrackVisibility once offset={200}>
							{({ isVisible }) => (
								<H3 className={`animated ${isVisible ? "fadeInUp" : ""}`}>
									Consumers are <br />
									increasingly forced to <br />
									use alternatives which <br />
									can damage their <br />
									credit score
								</H3>
							)}
						</TrackVisibility>
					</div>
					<div className="right">
						<TrackVisibility once offset={200}>
							{({ isVisible }) => (
								<div className={`animated ${isVisible ? "fadeInUp" : ""}`}>
									<P>Use of these alternatives result in a 10% drop in credit scores and leave a negative mark in the credit file for 6 years, resulting in a 65% probability of new mortgage applications being declined.</P>
									<P>Our research shows that 75% of consumers find card rejection embarrassing and 69% find it very stressful.</P>
								</div>
							)}
						</TrackVisibility>
					</div>
					{isTablet ? (
						<ConsumersList>
							{ConsumersContent.map((item, i) => (
								<ConsumersBox key={i}>
									<TrackVisibility once offset={100}>
										{({ isVisible }) => (
											<div className={`animated ${isVisible ? "fadeInRightBig" : ""}`}>
												<img src={item.src} alt={item.title} width={item.width} height={item.height} />
												<span>{item.title}</span>
											</div>
										)}
									</TrackVisibility>
								</ConsumersBox>
							))}
						</ConsumersList>
					) : (
						<Carousel {...settings}>
							{ConsumersContent.map((item, i) => (
								<ConsumersBox key={i}>
									<img src={item.src} alt={item.title} width={item.width} height={item.height} />
									<span>{item.title}</span>
								</ConsumersBox>
							))}
						</Carousel>
					)}
				</div>
			</Consumers>
			<Wellcome id="wellcome">
				<div className="container">
					<div className="left">
						<TrackVisibility once offset={200}>
							{({ isVisible }) => <H3 className={`animated ${isVisible ? "fadeInUp" : ""}`}>Welcome to Fiinu: the Plugin Overdraft®</H3>}
						</TrackVisibility>
						<TrackVisibility once offset={200}>
							{({ isVisible }) => (
								<div className={`animated ${isVisible ? "fadeInUp" : ""}`}>
									<P>An unbundled overdraft solution, without changing your bank, that helps you build credit rather than erode it.</P>
									<P>Fiinu’s bank and retailer agnostic solution helps to avoid rejection stress and embarrassment. It plugs in seamlessly through Open Banking to the customers main bank account. The customer continues to use their main account as before. </P>
								</div>
							)}
						</TrackVisibility>
					</div>
					<div className="right">
						<TrackVisibility once>
							{({ isVisible }) => (
								<div className={`iphone1 animated ${isVisible ? "fadeInRightBig" : ""}`}>
									<GatsbyImage image={iphone1} alt="Fiinu Mobile" />
								</div>
							)}
						</TrackVisibility>
						<TrackVisibility once>
							{({ isVisible }) => (
								<div className={`iphone2 animated ${isVisible ? "fadeInRightBig" : ""}`}>
									<GatsbyImage image={iphone2} alt="Fiinu Mobile" />
								</div>
							)}
						</TrackVisibility>
					</div>
				</div>
			</Wellcome>
			<Research id="reserach">
				<div className="container">
					<div className="left">
						<div>
							<TrackVisibility once offset={200}>
								{({ isVisible }) => <H3 className={`animated ${isVisible ? "fadeInUp" : ""}`}>Our research shows this is a vast and receptive market, searching for a solution.</H3>}
							</TrackVisibility>
							<TrackVisibility once offset={200}>
								{({ isVisible }) => (
									<div className={`animated ${isVisible ? "fadeInUp" : ""}`}>
										<P>There are 75 million current accounts in the UK. Fiinu achieves breakeven with 187,000 connected accounts.</P>
									</div>
								)}
							</TrackVisibility>
						</div>
						<span>*Fiinu commissioned Populus Survey (Jul 2019), 2065 respondents, 95% Statistical Significance, 2% margin of error, Nationally representative: Geographically, Gender, Profession, Income, and so on.</span>
					</div>
					<div className="right">
						{isMobile ? (
							<>
								<TrackVisibility once offset={200}>
									{({ isVisible }) => <img width="780" height="343" className={`research-img1 animated ${isVisible ? "fadeInUp" : ""}`} src={ResearchCircle1} alt="Would you add a plugin overdraft to your bank account?*" />}
								</TrackVisibility>
								<TrackVisibility once offset={200}>
									{({ isVisible }) => <img width="780" height="333" className={`research-img2 animated ${isVisible ? "fadeInUp" : ""}`} src={ResearchCircle2} alt="Would you add a plugin overdraft to your bank account?*" />}
								</TrackVisibility>
							</>
						) : (
							<Carousel {...settings}>
								<div>
									<img width="300" height="588" src={ResearchCircle1Mobile} alt="Would you add a plugin overdraft to your bank account?*" />
								</div>
								<div>
									<img width="300" height="588" src={ResearchCircle2Mobile} alt="Would you add a plugin overdraft to your bank account?*" />
								</div>
							</Carousel>
						)}
					</div>
				</div>
			</Research>
			<BankingAnimate3 />
		</Layout>
	);
};

export default BankingSolutionsPage;

export const query = graphql`
	query {
		iphone1: file(relativePath: { eq: "banking-iphone-1.png" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
			}
		}
		iphone2: file(relativePath: { eq: "banking-iphone-2.png" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
			}
		}
	}
`;
