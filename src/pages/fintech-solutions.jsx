import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import List from "../components/List";

import * as Variables from "../components/Variables";
import { H2, H3, H4, P } from "../components/Typography";

const PageBannerText = styled.section`
	padding: 245px 0px 153px;
	h4 {
		max-width: 1282px;
		margin: auto;
	}
`;

const DevBgX = styled(BgImage)`
	height: 200px;
`;

const YellowContent = styled.section`
	background: ${Variables.ColorGoldenYellow};
	padding: 120px 0 160px;
	.container {
		display: flex;
		> div {
			width: 50%;
			&:first-child {
				padding-right: 167px;
			}
		}
	}
	.first {
		margin-top: 24px;
		&:after {
			border-bottom: 4px solid ${Variables.ColorTuna};
			border-radius: 10px;
			content: "";
			display: block;
			margin-bottom: 50px;
			margin-top: 44px;
			@media (max-width: ${Variables.ScreenMd}) {
				margin: 36px 0px;
			}
		}
	}
	.hidden {
		margin-top: 36px;
		overflow: hidden; /* Hide the element content, while height = 0 */
		height: 0;
		opacity: 0;
		transition:.4s;
		&.show {
			opacity: 1;
		}
	}
`;

const ReadMore = styled.span`
	border-radius: 100px;
	background: ${Variables.ColorWarmBlue};
	color: #fff;
	display: inline-block;
	font-size: 24px;
	line-height: 28px;
	padding: 13.5px 20px;
	text-align: center;
	transition: 0.4s;
	cursor: pointer;
	margin-top: 37px;
	svg {
		margin-left: 18px;
		display: inline-block;
		margin-bottom: -3px;
	}
	&:hover {
		background: #fff;
		color: ${Variables.ColorWarmBlue};
	}
`;

const FintechSolutionsPage = ({ data }) => {
	const [readMore, setReadMore] = useState(false);
	const [readHeight, setReadHeight] = useState(0);

	const readMoreClick = () => {
		setReadMore(!readMore);
		setReadHeight(!readMore ? document.querySelector(".hidden p").clientHeight: "0");
	};

	useEffect(() => {
		function handleResize() {
			setReadHeight(readMore ? document.querySelector(".hidden p").clientHeight: "0");
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	  }, [readHeight]); 

	const yellowListData = ["Open Banking enabled tech licensing and alternative data.", "Become a leader in collection of transactional source data.", "The UK alt-data market projected to grow 62,000% by 2018."];

	const DevBackground = getImage(data.DevBackground.childImageSharp.gatsbyImageData);
	
	const readHeightOpen = {
		height: readHeight
	}
	
	return (
		<Layout>
			<Seo title="Fintech Solutions" />
			<PageBannerText>
				<div className="container">
					<H4>Our technology arm will generate revenue from licencing Open Banking enabled technology and alternative data solutions.</H4>
				</div>
			</PageBannerText>
			<DevBgX Tag="section" image={DevBackground} />
			<YellowContent>
				<div className="container">
					<div>
						<H3>R&D firm developing intelligent fintech and alternative data insight solutions.</H3>
					</div>
					<div>
						<P className="first">Technology licensing and alternative data. Fiinu Services Limited will be developing fintech modules utilising Open Banking APi’s including connectivity and collection methods of transactional banking data. It will anonymise, aggregate, enrich, and improve credit underwriting and provide alternative data insights to its customers.</P>
						<List data={yellowListData} />
						<div className={`hidden ${readMore ? "show" : false}`} style={readHeightOpen}>
							<P>
								Alternative data market to grow 25x in half a decade. 58.5% CAGR of alternative data market 2021-2018. Whilst the company will develop technology and modules for its sister company, we believe that the rising demand for alternative data will come from Open Banking innovation, hedge funds and other investors. More than half of hedge fund managers are now using alternative data to gain a competitive edge by generating outperformance and supporting the risk management processes. The
								global alternative data market size in 2021 is $2.76 billion and is expected to expand at a compound annual growth rate (CAGR) of 58.5% from 2021 to 2028 to about $70 billion market. Fiinu Services will play a part in this growth opportunity.
							</P>
						</div>
						<ReadMore onClick={readMoreClick}>
							Read more
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2 2L22 22" stroke="currentColor" stroke-miterlimit="10" />
								<path d="M10 2H2V10" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="square" />
								<path d="M14 22H22V14" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="square" />
							</svg>
						</ReadMore>
					</div>
				</div>
			</YellowContent>
		</Layout>
	);
};

export default FintechSolutionsPage;

export const query = graphql`
	query {
		DevBackground: file(relativePath: { eq: "development-banner-x.jpg" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
			}
		}
	}
`;
