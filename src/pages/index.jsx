import React, { useState, useEffect, useRef } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import NextContent from "../components/NextContent";
import Information from "../components/Information";
import Investors from "../components/Investors";
import ButtonWarm from "../components/ButtonWarm";
import HomeAnimate1 from "../components/HomeAnimate1";
import HomeAnimate2 from "../components/HomeAnimate2";
import HomeAnimate3 from "../components/HomeAnimate3";
import * as Variables from "../components/Variables";
import { H2, H3, P } from "../components/Typography";

import Logo from "../images/fiinu-logo-white.svg";

//KEYFRAMES
const frameScale = keyframes`
  from {
	filter: blur(24px);
	transform:scale(1.2);
  }

  to {
	filter: blur(0px);
	transform:scale(1);
  }
`;
const frameTransformY = keyframes`
  from {
    transform: translateY(360px);
  }

  to {
    transform: translateY(0px);
  }
`;

//SECTION
const Section = styled.section`
	background: ${({ background }) => background};
	background-position: center center;
	background-size: cover;
	position: relative;
	width: 100%;
`;
const First = styled(Section)`
	height: ${Variables.SHeight};
	min-height: 750px;
	overflow: hidden;
	@media (max-width: ${Variables.ScreenMd}) {
		min-height: 568px;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		min-height: auto;
		height: auto;
		padding-bottom: 75px;
	}
	.bg {
		filter: blur(24px);
		height: 100%;
		position: absolute !important;
		top: 0;
		transform: scale(1.2);
		transition: 0.4s;
		width: 100%;
		z-index: -1;
		@media (max-width: ${Variables.ScreenXs}) {
			position: relative !important;
			height: 50vh;
			display: block;
			min-height: 274px;
		}
	}
	&.started {
		.bg {
			animation: ${frameScale} 0.8s ease-in-out;
			animation-fill-mode: both;
		}
		h2 {
			span {
				animation: ${frameTransformY} 0.4s ease-in-out;
				animation-fill-mode: both;
			}
		}
	}
	h2 {
		bottom: 57px;
		font-size: 120px;
		left: 15px;
		line-height: 96px;
		position: absolute;
		z-index: 2;
		@media (max-width: ${Variables.ScreenMd}) {
			font-size: 88px;
			line-height: 72px;
			bottom: 60px;
		}
		@media (max-width: ${Variables.ScreenXs}) {
			font-size: 56px;
			line-height: 50px;
			position: relative;
			color: ${Variables.ColorTuna};
			left: 0;
			bottom: 0;
			margin-top: 20px;
		}
		span {
			display: block;
			@media (max-width: ${Variables.ScreenXs}) {
				display: inline;
				br {
					display: none;
				}
			}
			&:nth-child(1) {
				animation-delay: 0.4s;
				transform: translateY(360px);
			}
			&:nth-child(2) {
				animation-delay: 0.55s;
				transform: translateY(260px);
			}
			&:nth-child(3) {
				animation-delay: 0.7s;
				transform: translateY(168px);
			}
		}
	}
`;
const Leadership = styled.section`
	background: #fff;
	padding: 130px 0 120px;
	position: relative;
	z-index: 1;
	@media (max-width: ${Variables.ScreenMd}) {
		padding: 56px 0 45px;
	}
	> .container {
		display: flex;
		@media (max-width: ${Variables.ScreenXs}) {
			display: block;
			p {
				margin-top: 24px;
			}
		}
		> h3,
		> p {
			width: 50%;
			@media (max-width: ${Variables.ScreenXs}) {
				width: 100%;
			}
		}
	}
`;
const Carousel = styled(Slider)`
	margin-top: 120px;
	@media (max-width: ${Variables.ScreenMd}) {
		margin-top: 36px;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		margin-left: -15px;
	}
	.slick-track {
		display: flex;
	}
`;
const Slide = styled(Link)`
	color: ${Variables.ColorTuna};
	width: 336px !important;
	margin-left: 50px;
	@media (max-width: ${Variables.ScreenMd}) {
		width: 220px !important;
		margin-left: 24px;
	}
	.gatsby-image-wrapper {
		border-radius: 16px;
	}
	p {
		margin-top: 24px;
		transition: 0.4s;
	}
	h6 {
		font-size: 18px;
		line-height: 28px;
	}
	img {
		transition: 0.4s;
		filter: hue-rotate(0deg);
	}
	&:hover {
		img {
			filter: hue-rotate(25deg);
		}
		p {
			color: ${Variables.ColorWarmBlue};
		}
	}
`;
const SlickControl = styled.div`
	font-size: 16px;
	margin-top: 90px !important;
	line-height: 24px;
	@media (max-width: ${Variables.ScreenMd}) {
		margin-top: 50px !important;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		display: flex !important;
	}
	span {
		font-size: 24px;
		font-weight: 700;
		padding: 0 3px;
	}
	i {
		font-style: normal;
		color: ${Variables.ColorWarmBlue};
	}
`;
const SlickPrev = styled.div`
	width: 28px;
	height: 18px;
	cursor: pointer;
	position: relative;
	&:before {
		content: "";
		width: 12px;
		height: 12px;
		border-left: 2px solid #dad9d7;
		border-top: 2px solid #dad9d7;
		position: absolute;
		left: 2px;
		top: 3px;
		transition: 0.4s;
		transform: rotate(-45deg);
	}
	&:after {
		content: "";
		height: 2px;
		width: 28px;
		background: #dad9d7;
		position: absolute;
		left: 1px;
		top: 9px;
		transition: 0.4s;
	}
	&:hover {
		&:before {
			border-color: ${Variables.ColorTuna};
		}
		&:after {
			background: ${Variables.ColorTuna};
		}
	}
`;
const SlickNext = styled(SlickPrev)`
	margin-left: 20px;
	margin-right: 25px;
	&:before {
		border: 0 !important;
		border-right: 2px solid #dad9d7 !important;
		border-top: 2px solid #dad9d7 !important;
		left: auto !important;
		right: 0 !important;
		top: 3px !important;
		transform: rotate(45deg) !important;
	}
	&:after {
		left: 1px !important;
		top: 9px !important;
	}
`;
const Holdings = styled.section`
	background: #fff;
	position: relative;
	padding: 120px 0px 113px;
	z-index: 1;
	@media (max-width: ${Variables.ScreenMd}) {
		padding: 45px 0 56px;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		padding: 45px 0 0;
	}
	.container {
		display: flex;
		@media (max-width: ${Variables.ScreenMd}) {
			display: block;
		}
		@media (max-width: ${Variables.ScreenXs}) {
			padding:0;
		}
		>div{
			width:50%;
			@media (max-width: ${Variables.ScreenMd}) {
				width: 100%;
			}
		}
		&:before {
			content: "";
			height: 1px;
			background-color: ${Variables.ColorLightGray};
			width: calc(100% - 30px);
			position: absolute;
			left: 15px;
			top: -120px;
			@media (max-width: ${Variables.ScreenMd}) {
				top: -45px;
			}
		}
	}
	a {
		margin-top: 45px;
		@media (max-width: ${Variables.ScreenMd}) {
			margin-top: 24px;
		}
	}
`;
const HoldingsContent = styled.div`
	padding-right: 40px;
	@media (max-width: ${Variables.ScreenMd}) {
		padding-right: 0;
	}
	@media (max-width: ${Variables.ScreenXs}) {
        padding:0 10px;
    }
	p {
		margin-top: 35px;
		@media (max-width: ${Variables.ScreenMd}) {
			margin-top: 24px;
		}
	}
`;

const HomePage = ({ data }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [pageLoad, setPageLoad] = useState(false);
	const slider = useRef(null);

	useEffect(() => {
		setPageLoad(true);
	}, [pageLoad]);

	const settings = {
		dots: false,
		speed: 300,
		variableWidth: true,
		touchThreshold: 100,
		swipeToSlide: true,
		arrows: false,
		afterChange: function (index) {
			setCurrentSlide(index);
		}
	};

	const easeBackground = getImage(data.easeBackground);

	return (
		<Layout logo={Logo}>
			<Seo title="Home" />
			<First className={pageLoad ? "started" : false}>
				<BgImage image={easeBackground} className="bg" />
				<div className="container h100">
					<H2>
						<span>
							Pre-IPO fintech <br />
						</span>
						<span>
							with an expected <br />
						</span>
						<span>bank licence</span>
					</H2>
				</div>
				<NextContent nextContent="second" background="white">
					See how
				</NextContent>
			</First>
			<HomeAnimate1 />
			<HomeAnimate2 />
			<HomeAnimate3 />
			<Leadership>
				<div className="container">
					<H3>Leadership team</H3>
					<P>An independent board of directors with deep strategy, retail banking and UK / international regulatory experience including two former members of the Bank of England and a Financial Services Authority supervisor.</P>
				</div>
				<Carousel ref={slider} {...settings}>
					{data.allMdx.nodes.map((node) => (
						<Slide to={`/about/${node.slug}`} key={node.frontmatter.number}>
							<GatsbyImage image={node.frontmatter.image.childImageSharp.gatsbyImageData} alt={node.frontmatter.title} />
							<P>
								<b>{node.frontmatter.title}</b>
							</P>
							<h6>{node.frontmatter.position}</h6>
						</Slide>
					))}
				</Carousel>
				<SlickControl className="container">
					<SlickPrev onClick={() => slider.current.slickPrev()}></SlickPrev>
					<SlickNext onClick={() => slider.current.slickNext()}></SlickNext>
					<i>{currentSlide + 1}</i> <span>/</span> {data.allMdx.nodes.length}
				</SlickControl>
			</Leadership>
			<Holdings>
				<div className="container">
					<HoldingsContent>
						<H3>Fiinu Holdings Ltd </H3>
						<P>
							<b>Fiinu Holdings Ltd is a group holding company which will operate in the field of fintech, big data and digital banking. Subject to the London Stock Exchange admission approval, the group will enter the AIM with a ticker ‘BANK’.</b>
						</P>
						<P>The group has two subsidiaries;</P>
						<P>Fiinu Services Ltd developing intellectual property and fintech modules, which will include a range of innovative new products including big data insights, and; </P>
						<P>Fiinu 2 Ltd is which is expected to receive a deposit-taking banking licence from the Bank of England regulators and soft-launch in 2022. The firm will on successful completion of the authorisation process be renamed as Fiinu Bank Ltd. </P>
						<ButtonWarm toLink="/investors">More Info</ButtonWarm>
					</HoldingsContent>
					<Information />
				</div>
			</Holdings>
			<Investors />
		</Layout>
	);
};

export default HomePage;

export const query = graphql`
	query {
		allMdx(sort: { fields: frontmatter___number }) {
			nodes {
				frontmatter {
					number
					title
					position
					image {
						childImageSharp {
							gatsbyImageData(width: 336, height: 351, backgroundColor: "#fff", placeholder: BLURRED, quality: 100)
						}
					}
				}
				slug
			}
		}
		easeBackground: file(relativePath: { eq: "ease-banner.jpg" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
			}
		}
	}
`;
