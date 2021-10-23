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
import { H3, H4, H5, P } from "../components/Typography";
import { IsMobile } from "../components/Function";
import FintechAnimate1 from "../components/FintechAnimate1";

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
		width:100%;
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
				@media (max-width:${Variables.ScreenSm}){
					margin-top:72px;
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

	const isMobile = IsMobile();
	const devBackground = getImage(data.devBackground);
	const creditUnderwritingImageMobile = getImage(data.creditUnderwritingImageMobile);

	const readMoreClick = () => {
		setReadMore(!readMore);
		setReadHeight(!readMore ? document.querySelector(".hidden p").clientHeight : "0");
	};

	useEffect(() => {
		function handleResize() {
			setReadHeight(readMore ? document.querySelector(".hidden p").clientHeight : "0");
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [readMore]);

	const yellowListData = ["Open Banking enabled tech licensing and alternative data.", "Become a leader in collection of transactional source data.", "The UK alt-data market projected to grow 62,000% by 2028."];

	const readHeightOpen = {
		height: readHeight
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
						<P className="first">Technology licensing and alternative data. Fiinu Services Limited will be developing fintech modules utilising Open Banking API’s including connectivity and collection methods of transactional banking data. It will anonymise, aggregate, enrich, and improve credit underwriting and provide alternative data insights to its customers.</P>
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
			
			<FintechAnimate1 />

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
					<P>Our retail credit underwriting module will provide you with a pre-configured, near-live overview of the a customers financial health.  The solution will use agile processes to adapt to changing customer behaviour and it can be used for all credit underwriting purposes, including creditworthiness and affordability assessments.</P>
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
		creditUnderwritingImageMobile: file(relativePath: { eq: "credit-underwriting-img-mobile.png" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100, layout: FULL_WIDTH)
			}
		}
	}
`;
