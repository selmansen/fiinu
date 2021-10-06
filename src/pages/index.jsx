import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import NextContent from "../components/NextContent";
import List from "../components/List";
import Button from "../components/Button";

import * as Variables from "../components/Variables";
import { H2, H3, H4, P } from "../components/Typography";

import Logo from "../images/fiinu-logo-white.svg";
import EaseBanner from "../images/ease-banner.jpg";
import DevelopmentBanner from "../images/development-banner.jpg";
import Iphone from "../images/iphone.jpg";
import Content from "../api/team.json";

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
	min-height:	height: ${Variables.SMinHeight};
	h2 {
		font-size:120px;
		line-height:96px;
		position: absolute;
		bottom: 57px;
		left: 0;
	}
`;
const Second = styled(Section)`
	display: inline-block;
	height: calc(100vh + 50vh * 2);
	min-height: calc(820px * 2);
`;

const Second1 = styled.div`
	align-items: center;
	justify-content: center;
	flex-direction: column;
	display: flex;
	position: sticky;
	top: 0;
	height: 100vh;
	min-height: 820px;
	h2 {
		font-size: 360px;
		line-height: 130px;
		width: 7855px;
		display: flex;
		position: absolute;
		left: calc(50% - 1935px);
		right: 0;
		bottom: 15px;
		opacity: 0;
		transform: translateY(150px);
	}
	h4 {
		opacity: 0;
	}
	h4:nth-child(2) {
		margin-top: 70px;
	}
`;
const Third = styled(Section)`
	min-height: 100vh;
	position: sticky;
	top: 0;
	margin-bottom: 50vh;
`;

const ThirdBgCover = styled.div`
	width: 50%;
	height: 100%;
	position: absolute;
	right: 0;
	top: 0;
	overflow: hidden;
	#s3_a1 {
		background-size: cover;
		background: url(${DevelopmentBanner}) center center no-repeat;
		content: "";
		height: 100%;
		position: absolute;
		top: 0;
		width: 100%;
		transform: scale(1.5);
	}
`;

const ThirdContent = styled.div`
	width: 50%;
	min-height: 100vh;
	padding: 30px 40px 30px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	p {
		&:after {
			content: "";
			display: block;
			border-bottom: 10px solid ${Variables.ColorTuna};
			border-radius: 10px;
			margin-top: 44px;
			margin-bottom: 50px;
		}
	}
`;
const SectionFourth = styled(Section)`
	display: inline-block;
	height: calc(${Variables.SHeight} * 4);
`;
const SectionFourth1 = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	align-items: center;
	justify-content: center;
	height: ${Variables.SHeight};
	min-height: ${Variables.SMinHeight};
	#s4_img {
		transform: scale(0.2);
		position: absolute;
	}
	#s4_h2 {
		visibility: hidden;
		position: absolute;
	}
	#s4_h4 {
		visibility: hidden;
		position: absolute;
	}
	#s4_button {
		visibility: hidden;
		position: absolute;
	}
`;

const Leadership = styled.section``;

const Carousel = styled(Slider)`
	.slick-track {
		display: flex;
	}
	.slick-slide {
		border-radius: 32px;
		color: ${Variables.ColorTuna};
		transition: background 0.4s, color 0.4s;
	}
	.slick-active {
		background: ${Variables.ColorWarmBlue};
		color: #fff;
	}
`;

const Slide = styled.div`
	width: 280px !important;
	height: 490px;
	padding: 24px 27px;
	h5 {
		font-size: 24px;
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 29px;
		margin-top: 24px;
	}
	h6 {
		font-size: 18px;
		line-height: 28px;
		margin-top: 2px;
	}
	p {
		font-size: 16px;
		line-height: 24px;
		margin-top: 8px;
	}
`;

//DATA
const ThirdContent_Data = ["Open Banking enabled tech licensing and alternative data.", "Become a leader in collection of transactional source data.", "The UK alt-data market projected to grow 62,000% by 2028."];

const HomePage = ({ data }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [scrollTop, setScrollTop] = useState(0);
	const settings = {
		dots: false,
		infinite: true,
		waitForAnimate: false,
		swipeToSlide: true,
		speed: 400,
		slidesToShow: 1,
		arrows: true,
		variableWidth: true,
		touchThreshold: 100,
		afterChange: function (index) {
			setCurrentSlide(index);
		}
	};

	useEffect(() => {
		const onScroll = () => {
			setScrollTop(window.pageYOffset);
			const secondHeight = document.querySelector("#second").clientHeight,
				secondTop = document.querySelector("#second").offsetTop,
				secondContent = 3,
				secondCenter = secondHeight / secondContent / 2,
				s2Start = scrollTop + secondCenter > secondTop,
				s2Stop = secondHeight / secondContent < document.querySelector("#second").getBoundingClientRect().bottom,
				s2a1 = document.querySelector("#s2_a1"),
				s2a2 = document.querySelector("#s2_a2"),
				s2a3 = document.querySelector("#s2_a3");

			if (s2Start) {
				if (s2Stop) {
					const animateValue = (scrollTop - secondTop + secondCenter) / secondCenter,
						opacity = animateValue.toFixed(2),
						animateTransform = (opacity - 2) * 150,
						transformY = animateTransform.toFixed(3);

					s2a1.style.opacity = opacity > 1 ? "1" : opacity < 0 ? "0" : opacity;
					s2a2.style.opacity = opacity - 1 > 1 ? "1" : opacity - 1 < 0 ? "0" : opacity - 1;
					s2a3.style.opacity = opacity - 2 > 1 ? "1" : opacity - 2 < 0 ? "0" : opacity - 2;
					s2a3.style.transform = `translateY(${150 - transformY > 150 ? "150" : 150 - transformY < 0 ? "0" : 150 - transformY}px)`;
				}
			} else {
				s2a1.style.opacity = "0";
				s2a2.style.opacity = "0";
				s2a3.style.opacity = "0";
			}

			const thirdHeight = document.querySelector("#third").clientHeight,
				thirdTop = document.querySelector("#third").offsetTop,
				thirdContent = 1,
				thirdCenter = thirdHeight / thirdContent / 2,
				s3Start = scrollTop + thirdCenter > thirdTop,
				s3Stop = thirdHeight / thirdContent < document.querySelector("#third").getBoundingClientRect().bottom,
				s3a1 = document.querySelector("#s3_a1");
			
			if (s3Start) {
				if (s3Stop) {
					const animateValue = (scrollTop - thirdTop + thirdCenter) / thirdCenter,
						transformY = animateValue.toFixed(2);

					s3a1.style.transform = `scale(0${1.5 - transformY / 2})`;
				}
			}else {
				s3a1.style.transform = "scale(1.5)";
			}
		};
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollTop]);

	return (
		<Layout logo={Logo}>
			<Seo title="Home" />

			<First background={`url(${EaseBanner})`}>
				<div className="container h100">
					<H2>
						Pre-IPO fintech <br />
						with an expected <br />
						bank licence
					</H2>
				</div>
				<NextContent nextContent="second" background="white">
					See how
				</NextContent>
			</First>

			<Second id="second" background={Variables.ColorFantasy}>
				<Second1 className="container">
					<H4 id="s2_a1">Fiinu is a pre-IPO fintech group with an expected deposit-taking banking licence from the Bank of England regulators. </H4>
					<H4 id="s2_a2">Subject to the London Stock Exchange admission approval the group will enter the AIM-market with a ticker ‘BANK’ </H4>
					<H2 id="s2_a3">Pre-IPO fintech with an expected bank licence</H2>
					<NextContent nextContent="third">Next—Services</NextContent>
				</Second1>
			</Second>

			<Third id="third" background={Variables.ColorGoldenYellow}>
				<ThirdBgCover>
					<div id="s3_a1"></div>
				</ThirdBgCover>
				<div className="container h100">
					<ThirdContent>
						<H3>R&D firm developing intelligent fintech and alternative data insight solutions.</H3>
						<P>Our technology arm will generate revenue from licencing Open Banking enabled technology and alternative data solutions. </P>
						<List data={ThirdContent_Data} />
						<Button mtop="100px" href="/">
							Fintech solutions
						</Button>
					</ThirdContent>
				</div>
			</Third>

			<SectionFourth background="#e5e7e9">
				<SectionFourth1>
					<img id="s4_img" src={Iphone} alt="" />
					<H2 id="s4_h2" ColorWarmBlue>
						Fiinu 2 Limited
					</H2>
					<H4 id="s4_h4" className="container">
						Fiinu 2 Limited is anticipating obtaining a UK deposit-taking banking licence from the Prudential Regulation Authority (PRA) and the Financial Conduct Authority (FCA) in 2021.
					</H4>
					<div id="s4_button">
						<Button href="/">Visit Fiinu Bank</Button>
					</div>
				</SectionFourth1>
			</SectionFourth>
			<Leadership>
				<div className="container">
					<H3>Leadership team</H3>
					<P>An independent board of directors with deep strategy, retail banking and UK / international regulatory experience including two former members of the Bank of England and a Financial Services Authority supervisor.</P>
				</div>
				<Carousel {...settings}>
					{data.allFile.edges.map(({ node }, i) => (
						<Slide key={node.id}>
							<GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={Content[i].content} />
							<h5>{Content[i].name}</h5>
							<h6>{Content[i].position}</h6>
							<p>{Content[i].content}</p>
						</Slide>
					))}
				</Carousel>
				<div>
					{currentSlide + 1} / {data.allFile.edges.length}
				</div>
			</Leadership>
		</Layout>
	);
};

export default HomePage;

export const query = graphql`
	query {
		allFile(filter: { relativeDirectory: { eq: "writers-carousel" } }, sort: { fields: base, order: ASC }) {
			edges {
				node {
					id
					base
					childImageSharp {
						gatsbyImageData(height: 180, width: 232, quality: 80)
					}
				}
			}
		}
	}
`;
