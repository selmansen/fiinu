import React, { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import styled from "styled-components";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import List from "../components/List";

import * as Variables from "../components/Variables";
import { H2, H3, H4, H5, P } from "../components/Typography";

import dataImg1 from "../images/solutions-data-img1.svg";
import dataImg2 from "../images/solutions-data-img2.svg";
import dataImg3 from "../images/solutions-data-img3.svg";
import dataImg4 from "../images/solutions-data-img4.svg";
import creditUnderwritingImage from "../images/credit-underwriting-img.svg";

const PageBannerText = styled.section`
	background: #fff;
	padding: 245px 0px 153px;
	@media (max-width: ${Variables.ScreenMd}) {
		padding: 187px 0px 117px;
	}
	.animated {
		animation-delay: 0.1s;
		opacity: 0;
	}
	h4 {
		margin: auto;
		max-width: 1282px;
	}
`;

const DevBgX = styled(BgImage)`
	height: 200px;
	@media (max-width: ${Variables.ScreenSm}) {
		height: 90px;
	}
`;

const YellowContent = styled.section`
	background: ${Variables.ColorGoldenYellow};
	padding: 120px 0 160px;
	@media (max-width: ${Variables.ScreenMd}) {
		padding: 36px 0px;
	}
	.container {
		@media (min-width: calc(${Variables.ScreenSm} + 1px)) {
			display: flex;
		}
		> div {
			@media (min-width: calc(${Variables.ScreenSm} + 1px)) {
				width: 50%;
			}
			&:first-child {
				padding-right: 167px;
				@media (max-width: ${Variables.ScreenMd}) {
					padding-right: 40px;
				}
				@media (max-width: ${Variables.ScreenSm}) {
					padding-right: 0px;
				}
			}
		}
	}
	.first {
		@media (max-width: ${Variables.ScreenSm}) {
			margin-top: 24px;
		}
		&:after {
			border-bottom: 4px solid ${Variables.ColorTuna};
			border-radius: 10px;
			content: "";
			display: block;
			margin: 44px 0 50px;
			@media (max-width: ${Variables.ScreenMd}) {
				margin: 36px 0px;
			}
		}
	}
	.hidden {
		height: 0;
		margin-top: 0px;
		opacity: 0;
		overflow: hidden;
		transition: 0.4s;
		&.show {
			margin-top: 36px;
			opacity: 1;
		}
	}
`;

const ReadMoreBtn = styled.span`
	background: ${Variables.ColorWarmBlue};
	border-radius: 100px;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-size: 24px;
	line-height: 28px;
	margin-top: 37px;
	padding: 13.5px 20px;
	text-align: center;
	transition: 0.4s;
	@media (max-width: ${Variables.ScreenXs}) {
		padding: 8px 20px;
		font-size: 16px;
		line-height: 24px;
		svg {
			height: 21px;
		}
	}
	svg {
		display: inline-block;
		margin-bottom: -3px;
		margin-left: 18px;
	}
	&:hover {
		background: #fff;
		color: ${Variables.ColorWarmBlue};
	}
`;

const Solutions = styled.section`
	height: calc(${Variables.SHeight}* 3);
	min-height: calc(940px * 3);
	@media (max-width: ${Variables.ScreenLg}) {
		min-height: calc(800px * 3);
	}
	@media (max-width: ${Variables.ScreenMd}) {
		min-height: calc(630px * 3);
	}
	@media (max-width: ${Variables.ScreenSm}) {
		min-height: calc(1075px * 3);
	}
	@media (max-width: ${Variables.ScreenXs}) {
		min-height: auto;
		height: calc(${Variables.SHeight}* 3.6);
	}
`;

const SolutionsDisplay = styled.div`
	height: ${Variables.SHeight};
	min-height: 940px;
	position: sticky;
	top: 0;
	@media (max-width: ${Variables.ScreenLg}) {
		min-height: 800px;
	}
	@media (max-width: ${Variables.ScreenMd}) {
		min-height: 630px;
	}
	@media (max-width: ${Variables.ScreenSm}) {
		min-height: 1075px;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		height: auto;
		min-height: auto;
	}
`;

const SolutionsOverflow = styled.div`
	height: 100%;
	overflow: hidden;
	position: relative;
	z-index: 1;
	@media (max-width: ${Variables.ScreenXs}) {
		padding-bottom: 36px;
	}
	> .container {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		@media (max-width: ${Variables.ScreenSm}) {
			display: block;
		}
	}
	h2 {
		opacity: 0;
		position: absolute;
		text-align: center;
		@media (max-width: ${Variables.ScreenMd}) {
			align-items: center;
			display: flex;
			height: 100vh;
			justify-content: center;
			width: 100%;
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
	@media (max-width: ${Variables.ScreenMd}) {
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
	@media (max-width: ${Variables.ScreenMd}) {
		padding-top: 0;
	}
	@media (max-width: ${Variables.ScreenSm}) {
		padding-top: 36px;
		flex-direction: column-reverse;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		left: 0;
		right: 0;
		position: relative;
	}
	> div {
		@media (min-width: calc(${Variables.ScreenSm} + 1px)) {
			width: 50%;
		}
		&:first-child {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 80.5px 20px 0px 0px;
			@media (max-width: ${Variables.ScreenMd}) {
				padding: 0px;
			}
		}
		&:nth-child(2) {
			margin-left: 20px;
			transform: translateY(100vh);
			opacity: 0;
			@media (max-width: ${Variables.ScreenSm}) {
				max-width: 400px;
				margin: auto;
			}
		}
	}
	.personal-image {
		max-width: 727px;
		border-radius: 32px;
		box-shadow: 0px 70px 100px -50px rgba(51, 61, 71, 0.2);
		margin-bottom: 75px;
		@media (max-width: ${Variables.ScreenLg}) {
			max-width: 617px;
		}
	}
	h3 {
		@media (max-width: ${Variables.ScreenSm}) {
			margin-top: -32px;
		}
	}
	p {
		margin-top: 36px;
		@media (max-width: ${Variables.ScreenSm}) {
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

const Data = styled.section`
	background: #fff;
	overflow: hidden;
	padding: 246px 0px 246px;
	@media (max-width: ${Variables.ScreenMd}) {
		padding: 36px 0px;
	}
	.container {
		display: flex;
		@media (max-width: ${Variables.ScreenSm}) {
			flex-direction: column;
		}
		+ .container {
			margin-top: 160px;
			@media (max-width: ${Variables.ScreenMd}) {
				margin-top: 72px;
			}
		}
		> div {
			@media (min-width: calc(${Variables.ScreenSm} + 1px)) {
				width: 50%;
			}
		}
		&:nth-child(1) {
			img {
				@media (min-width: calc(${Variables.ScreenMd} + 1px)) {
					margin-top: 46px;
				}
			}
		}
		&:nth-child(2) {
			@media (max-width: ${Variables.ScreenSm}) {
				flex-direction: column-reverse;
			}
			h5 {
				@media (min-width: calc(${Variables.ScreenMd} + 1px)) {
					margin-top: 43px;
				}
			}
		}
		&:nth-child(3) {
			img {
				@media (min-width: calc(${Variables.ScreenMd} + 1px)) {
					margin-top: -130px;
				}
			}
		}
	}
	.animated {
		opacity: 0;
	}
	.left {
		padding-right: 40px;
		@media (max-width: ${Variables.ScreenSm}) {
			padding-right: 0;
		}
	}
	.right {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	h5 {
		width: 100%;
	}
	p {
		margin-top: 24px;
	}
	img {
		display: block;
		margin: auto;
		max-width: 100%;
		height: auto;
		width: auto;
		@media (max-width: ${Variables.ScreenSm}) {
			margin-top: 24px;
		}
	}
`;

const CreditUnderwriting = styled.section`
	background: ${Variables.ColorWarmBlue};
	color: #fff;
	margin-bottom: 168px;
	padding-top: 64px;
	@media (max-width: ${Variables.ScreenMd}) {
		padding: 36px 0px 0px;
		margin-bottom: 36px;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		padding-bottom: 36px;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		@media (max-width: ${Variables.ScreenSm}) {
			flex-direction: column;
		}
		@media (min-width: calc(${Variables.ScreenSm} + 1px)) {
			h5,
			p {
				width: 50%;
			}
		}
		h5 {
			@media (min-width: calc(${Variables.ScreenSm} + 1px)) {
				padding-right: 40px;
			}
			@media (max-width: ${Variables.ScreenSm}) {
				margin-bottom: 24px;
			}
		}
	}
	.gatsby-image-wrapper {
		border-radius: 16px;
	}
`;

const CreditUnderTable = styled.img`
	display: block;
	height: auto;
	margin: 120px 0 -168px;
	width: 100%;
	@media (max-width: ${Variables.ScreenMd}) {
		margin: 24px 0 -36px;
	}
`;

const CreditImage = styled(GatsbyImage)`
	width: 100%;
	@media (max-width: ${Variables.ScreenXs}) {
		margin: 24px 0 0px;
	}
`;

const FintechSolutionsPage = ({ data }) => {
	const [readMore, setReadMore] = useState(false);
	const [readHeight, setReadHeight] = useState(0);
	const [scrollTop, setScrollTop] = useState(0);
	const [animate, setAnimate] = useState(0);
	const [transform, setTransform] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	const readMoreClick = () => {
		setReadMore(!readMore);
		setReadHeight(!readMore ? document.querySelector(".hidden p").clientHeight : "0");
	};

	useEffect(() => {
		const onScroll = () => {
			setScrollTop(window.pageYOffset);

			const height = document.querySelector(`#first`).clientHeight,
				offsetTop = document.querySelector(`#first`).offsetTop,
				count = 3,
				center = height / count / 2,
				start = scrollTop + center > offsetTop,
				animateValue = (scrollTop - offsetTop) / center;

			if (start) {
				setAnimate(animateValue.toFixed(2));
				setTransform(animateValue.toFixed(2) * 50 - 50);
			}
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollTop]);

	useEffect(() => {
		function windowResize() {
			setIsMobile(window.innerWidth > 767);
		}
		windowResize();
		window.addEventListener("resize", windowResize);
		return () => window.removeEventListener("resize", windowResize);
	}, [isMobile]);

	useEffect(() => {
		function handleResize() {
			setReadHeight(readMore ? document.querySelector(".hidden p").clientHeight : "0");
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [readMore]);

	const yellowListData = ["Open Banking enabled tech licensing and alternative data.", "Become a leader in collection of transactional source data.", "The UK alt-data market projected to grow 62,000% by 2028."];

	const devBackground = getImage(data.devBackground);
	const solutionsImage = getImage(data.solutionsImage);
	const creditUnderwritingImageMobile = getImage(data.creditUnderwritingImageMobile);

	const readHeightOpen = {
		height: readHeight
	};

	const s2a1Animate = {
		opacity: animate > 1 ? "1" : animate < 0 ? "0" : animate,
		transform: `translateX(${transform > 1 ? (transform < 100 ? transform : "100") : "0"}vw)`
	};
	const s2a2Animate = {
		transform: `translateX(${transform > 1 ? (transform < 100 ? 100 - transform : "0") : "100"}vw)`
	};
	const s2a3Animate = {
		transform: `translateY(${transform > 25 ? (transform < 125 ? 125 - transform : "0") : "100"}vh)`,
		opacity: animate > 3.5 ? "1" : animate < 1.5 ? "0" : (animate - 1.5) / 2
	};

	return (
		<Layout>
			<Seo title="Fintech Solutions" />

			<PageBannerText>
				<TrackVisibility once offset={200}>
					{({ isVisible }) => (
						<div className={`container animated ${isVisible ? "fadeInUp" : ""}`}>
							<H4>Our technology arm will generate revenue from licencing Open Banking enabled technology and alternative data solutions.</H4>
						</div>
					)}
				</TrackVisibility>
			</PageBannerText>

			<DevBgX Tag="section" image={devBackground} />
			<YellowContent>
				<div className="container">
					<div>
						<H3>R&D firm developing intelligent fintech and alternative data insight solutions.</H3>
					</div>
					<div>
						<P className="first">Technology licensing and alternative data. Fiinu Services Limited will be developing fintech modules utilising Open Banking APi’s including connectivity and collection methods of transactional banking data. It will anonymise, aggregate, enrich, and improve credit underwriting and provide alternative data insights to its customers.</P>
						<List data={yellowListData} />
						<div className={`hidden ${readMore ? "show" : false}`} style={readHeightOpen}>
							<P>The UK alternative data insights market is projected to grow 62,000% between 2020 and 2028, an average 67.5% compound annual growth rate. The global alternative data market size in 2021 is $2.76 billion and it is expected to expand at a compound annual growth rate of 58.5% from 2021 to 2028 to about $70 billion market. Fiinu Services will become a leader in this growing market opportunity. The company is uniquely positioned to source anonymised transactional data from its sister.</P>
						</div>
						<ReadMoreBtn onClick={readMoreClick}>
							{`${readMore ? "Read less" : "Read more"}`}
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2 2L22 22" stroke="currentColor" strokeMiterlimit="10" />
								<path d="M10 2H2V10" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="square" />
								<path d="M14 22H22V14" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="square" />
							</svg>
						</ReadMoreBtn>
					</div>
				</div>
			</YellowContent>

			<Solutions id="first">
				<SolutionsDisplay>
					<SolutionsOverflow>
						<div className="container">
							<H2 color={Variables.ColorWarmBlue} style={s2a1Animate}>
								Fintech Solutions
							</H2>
							<SolutionsContent>
								<div>
									<H3 className={animate > 3.3 ? "animate" : false}>Personal Finance Management app with integrated Plugin Overdraft®</H3>
									<P className={animate > 3.5 ? "animate" : false}>Fiinu’s proprietary transaction tagging technology will analyse the user’s spending into categories, providing an automatically updating, consolidated view of their financial lives. We collect anonymised transactional banking data with our Open Banking enabled app with integrated Plugin Overdraft, allowing users to benefit from intelligent cost-saving nudges relating to their connected bank accounts, credit cards or store cards in one secure place. </P>
								</div>
								<div style={s2a3Animate}>
									<GatsbyImage className="personal-image" image={solutionsImage} alt="Personal Finance Management app with integrated Plugin Overdraf" />
								</div>
							</SolutionsContent>
						</div>
						<SolutionsBg style={s2a2Animate} />
					</SolutionsOverflow>
				</SolutionsDisplay>
			</Solutions>

			<Data>
				<div className="container">
					<TrackVisibility className="left" once offset={200}>
						{({ isVisible }) => (
							<div className={`animated ${isVisible ? "fadeInUp" : ""}`}>
								<H5>Data Aggregation</H5>
								<P>Aggregating transactional banking data. Our data aggregation module will sort any transactional banking data which can be used for specific purpose including near-live monitoring of retail customers creditworthiness or changing affordability circumstances. Alternatively, you will be able to bring your own transactional banking data, which our module will aggregate for you. </P>
							</div>
						)}
					</TrackVisibility>
					<TrackVisibility className="right" once offset={200}>
						{({ isVisible }) => (
							<div className={`animated ${isVisible ? "fadeInUp" : ""}`}>
								<img src={dataImg1} width="422" height="422" alt="Data Aggregation" />
							</div>
						)}
					</TrackVisibility>
				</div>
				<div className="container">
					<TrackVisibility className="left" once offset={200}>
						{({ isVisible }) => (
							<div className={`animated ${isVisible ? "fadeInUp" : ""}`}>
								<img src={dataImg2} width="491" height="431" alt="Data Aggregation" />
							</div>
						)}
					</TrackVisibility>
					<TrackVisibility className="right" once offset={200}>
						{({ isVisible }) => (
							<div className={`animated ${isVisible ? "fadeInUp" : ""}`}>
								<H5>Data Enrichment</H5>
								<P>Enriching transactional data. We will have a module to enrich any aggregated data. We can provide hedge funds, investors, lenders and policy markers unique set of enriched transactional banking data. We will use various advanced programming tools including artifical neural networks, machine learning and contextualisation, helping you to get clear data enrichment.</P>
							</div>
						)}
					</TrackVisibility>
				</div>
				<div className="container">
					<TrackVisibility className="left" once offset={200}>
						{({ isVisible }) => (
							<div className={`animated ${isVisible ? "fadeInUp" : ""}`}>
								<H5>Data Insights</H5>
								<P>Our transactional alternative data insights will help you in various different ways. It can help you to discover patterns or relationships from source data between variables that you didn’t previously know existed. The source transactional retail banking data gives us the unique insights into macro and microeconomic trends and patterns. Our data insights sets will be used mainly by investors, hedge funds, retailers, venture capital and policy makers.</P>
							</div>
						)}
					</TrackVisibility>
					<TrackVisibility className="right" once offset={200}>
						{({ isVisible }) => <div className={`animated ${isVisible ? "fadeInUp" : ""}`}>{isMobile ? <img src={dataImg3} width="584" height="529" alt="Data Enrichment" /> : <img src={dataImg4} width="302" height="478" alt="Data Enrichment" />}</div>}
					</TrackVisibility>
				</div>
			</Data>

			<CreditUnderwriting>
				<div className="container">
					<H5>Credit Underwriting</H5>
					<P>Our retail credit underwriting module will provide you a pre-configured, near-live overview of customers financial health. The solution will use agile processes to adapt to changing customer behaviour and it can used for all credit underwriting purposes, including creditworthiness and affordability assessments. </P>
					{isMobile ? <CreditUnderTable src={creditUnderwritingImage} width="1495" height="1039" alt="Template Report" /> : <CreditImage image={creditUnderwritingImageMobile} alt="Template Report" />}
				</div>
			</CreditUnderwriting>
		</Layout>
	);
};

export default FintechSolutionsPage;

export const query = graphql`
	query {
		devBackground: file(relativePath: { eq: "development-banner-x.jpg" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
			}
		}
		solutionsImage: file(relativePath: { eq: "personal-finance.jpg" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
			}
		}
		creditUnderwritingImageMobile: file(relativePath: { eq: "credit-underwriting-img-mobile.png" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100, layout: FULL_WIDTH)
			}
		}
	}
`;
