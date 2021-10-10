import React, { useState, useEffect, useRef } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from 'gbimage-bridge';
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import NextContent from "../components/NextContent";
import List from "../components/List";
import Information from "../components/Information";
import Investors from "../components/Investors";

import * as Variables from "../components/Variables";
import { H2, H3, H4, P } from "../components/Typography";

import Logo from "../images/fiinu-logo-white.svg";
import EaseBanner from "../images/ease-banner.jpg";
import DevelopmentBanner from "../images/development-banner.jpg";
import Iphone from "../images/iphone.jpg";

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

//BUTTONS
const TunaButton = styled(Link)`
	align-items: center;
	background: ${Variables.ColorTuna};
	border-radius: 100px;
	color: #fff;
	display: flex;
	font-size: 24px;
	justify-content: flex-start;
	line-height: 28px;
	padding: 16px 24px;
	transition: 0.4s;
	margin-top: ${({ marginTop }) => marginTop};
	svg {
		margin-left: 15px;
	}
	&:hover {
		background: #0f1216;
	}
`;
const WarmButton = styled(Link)`
	border-radius: 100px;
	border: 2px solid ${Variables.ColorWarmBlue};
	color: ${Variables.ColorWarmBlue};
	display: inline-block;
	font-size: 24px;
	line-height: 28px;
	padding: 12px 20px;
	text-align: center;
	transition: 0.4s;
	&:hover {
		background: ${Variables.ColorWarmBlue};
		color: #fff;
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
	@media (max-width:${Variables.ScreenMd}){
		min-height:568px;
	}
	@media (max-width:${Variables.ScreenXs}){
		min-height:auto;
		height:auto;
		padding-bottom: 75px;
	}
	&:before {
		background: url(${EaseBanner}) center center / cover no-repeat;
		content: "";
		filter: blur(24px);
		height: 100%;
		position: absolute;
		top: 0;
		transform: scale(1.2);
		transition: 0.4s;
		width: 100%;
		z-index: -1;
		@media (max-width:${Variables.ScreenXs}){
			background-position:top center;
			position:relative;
			height: 50vh;
			display:block;
			min-height: 274px;
		}
	}
	&.started {
		&:before {
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
		@media (max-width:${Variables.ScreenMd}){
			font-size:88px;
			line-height:72px;
			bottom:60px;
		}
		@media (max-width:${Variables.ScreenXs}){
			font-size:56px;
			line-height:50px;
			position:relative;
			color:${Variables.ColorTuna};
			left:0;
			bottom:0;
			margin-top:20px;
		}
		span {
			display: block;
			@media (max-width:${Variables.ScreenXs}){
				display:inline;
				br{
					display:none;
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
const Second = styled(Section)`
	height: calc(${Variables.SHeight}* 2 + ${Variables.SDeadHeight});
	min-height: calc(820px * 2);
	@media (max-width:${Variables.ScreenLg}){
		min-height: calc(740px * 2);
	}
	@media (max-width:${Variables.ScreenMd}){
		min-height: calc(568px * 2);
	}
`;
const Second1 = styled.div`
	height: 100vh;
	min-height: 820px;
	position: sticky;
	top: 0;
	@media (max-width:${Variables.ScreenLg}){
		min-height: 740px;
	}
	@media (max-width:${Variables.ScreenMd}){
		min-height: 568px;
	}
	h2 {
		bottom: 15px;
		display: flex;
		font-size: 360px;
		left: calc(50% - 1935px);
		line-height: 130px;
		opacity: 0;
		position: absolute;
		right: 0;
		transform: translateY(150px);
		width: 7865px;
		@media (max-width:${Variables.ScreenMd}){
			width: 5990px;
			left: calc(50% - 1335px);
			bottom: -10px;
			font-size: 240px;
		}
		@media (max-width:${Variables.ScreenXs}){
			width: 4130px;
			left: calc(50% - 1000px);
			bottom: -7px;
			line-height: 100px;
			font-size: 180px;
		}
	}
	h4 {
		opacity: 0;
		@media (max-width: ${Variables.ScreenLg}) {
			margin-top: -150px;
		}
		@media (max-width:${Variables.ScreenMd}){
			margin-top:-50px;
		}
	}
	h4:nth-child(2) {
		margin-top: 70px;
		@media (max-width:${Variables.ScreenMd}){
			margin-top:50px;
		}
	}
`;
const SecondOverflow = styled.div`
	position: relative;
	overflow: hidden;
	height: 100%;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.container {
		position: initial;
		> div{
			@media (max-width:${Variables.ScreenXs}){
				display:none;
			}
		}
	}
`;
const Third = styled(Section)`
	margin-bottom: ${Variables.SDeadHeight};
	height: ${Variables.SHeight};
	min-height:780px;
	position: sticky;
	top: 0;
	@media (max-height: 780px) and (min-width:calc( ${Variables.ScreenLg} + 1px ) ){
		position:relative;
		margin-bottom: 0;
	}
	@media (max-width: ${Variables.ScreenLg} ){
		min-height:724px;
		@media (max-height: 724px ){
			position:relative;
			margin-bottom: 0;
		}
	}
	@media (max-width: ${Variables.ScreenMd} ){
		position:relative;
		margin-bottom:0;
		height:auto;
		min-height:auto;
	}

`;
const ThirdBgCover = styled.div`
	height: 100%;
	overflow: hidden;
	position: absolute;
	right: 0;
	top: 0;
	width: 50%;
	@media (max-width: ${Variables.ScreenLg}) {
		width: 45%;
	}
	@media (max-width: ${Variables.ScreenMd}) {
		width: 50%;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		position:relative;
		height:300px;
		width: 100%;
	}
	#s3_a1 {
		background: url(${DevelopmentBanner}) center center / cover no-repeat;
		content: "";
		height: 100%;
		position: absolute;
		top: 0;
		transform: scale(1.5);
		width: 100%;
	}
`;
const ThirdContent = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	padding: 30px 40px 30px 0px;
	width: 50%;
	@media (max-width: ${Variables.ScreenLg}) {
		width: 55%;
	}
	@media (max-width: ${Variables.ScreenMd}) {
		width: 50%;
	}
	@media (max-width: ${Variables.ScreenMd}) {
		padding:36px 15px 36px 0px;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		width:100%;
		padding:24px 0 36px;
		min-height:auto;
	}
	p {
		margin-top: 24px;
		&:after {
			border-bottom: 4px solid ${Variables.ColorTuna};
			border-radius: 10px;
			content: "";
			display: block;
			margin-bottom: 50px;
			margin-top: 44px;
			@media (max-width: ${Variables.ScreenMd}) {
				margin:36px 0px;
			}
		}
	}
	a {
		margin-top: 100px;
		@media (max-width: ${Variables.ScreenLg}) {
			margin-top: 44px;
		}
		@media (max-width: ${Variables.ScreenMd}) {
			margin-top: 36px;
		}
	}
`;
const Fourth = styled(Section)`
	height: calc(${Variables.SHeight} * 2 + ${Variables.SDeadHeight});
	&:before {
		opacity: 0;
	}
`;
const Fourth1 = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	align-items: center;
	justify-content: center;
	height: ${Variables.SHeight};
	min-height: ${Variables.SMinHeight};
	overflow:hidden;
	@media (max-width:${Variables.ScreenMd}){
		min-height: 568px;
	}
	&:before{
		content:"";
		position:absolute;
		top:0;
		width:100%;
		height:100%;
		background:rgba(255, 255, 255, 0.0);
		z-index: 2;
		transition:.4s;
		backdrop-filter: blur(0px);
	}
	&.start{
		&:before{
			backdrop-filter: blur(5px);
			background:rgba(255, 255, 255, 0.4);
		}
	}
	#s4_a1 {
		transform: scale(0);
		position: absolute;
		width: 100%;
		z-index:1;
	}
	#s4_a2 {
		position: absolute;
		color:${Variables.ColorWarmBlue};
		text-align:center;
		transform: translateY(0) scale(1);
		transition:.4s;
		opacity:0;
		z-index:3;
		&.start{
			color:#fff;
			transform: translateY(calc(50vh - 80px)) scale(2.2);
			@media (max-width:${Variables.ScreenMd}){
				transform: translateY(calc(50vh - 50px)) scale(2);
			}
			@media (max-width:${Variables.ScreenSm}){
				transform: translateY(calc(50vh - -64px)) scale(2);
			}
			@media (max-width:${Variables.ScreenXs}){
				transform: translateY(calc(50vh - -24px)) scale(2);
				width: 400px;
			}
			@media (max-height:${Variables.SMinHeight}) and (min-width:calc( ${Variables.ScreenMd} + 1px ) ){
				transform: translateY(300px) scale(2.2);
			}
			@media (max-height:568px) and (max-width:calc( ${Variables.ScreenMd} ) ){
				transform: translateY(233px) scale(2);
			}
			@media (max-height:568px) and (max-width:calc( ${Variables.ScreenSm} ) ){
				transform: translateY(343px) scale(2);
			}
			@media (max-height:568px) and (max-width:calc( ${Variables.ScreenXs} ) ){
				transform: translateY(310px) scale(2);
			}
		}
	}
	#s4_a3 {
		position: absolute;
		opacity:0;
		margin-top:0;
		transition:.4s;
		z-index:4;
		&.start{
			opacity:1;
			margin-top: -205px;
			@media not all and (min-resolution:.001dpcm) { @media
				{
					margin-top:-102px;
				}
			}
		}
	}
	#s4_a4 {
		position: absolute;
		opacity:0;
		margin-top:0;
		transition:.4s;
		z-index:5;
		&.start{
			opacity:1;
			margin-top: 150px;
			@media not all and (min-resolution:.001dpcm) { @media
				{
					margin-top:75px;
				}
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
		padding:56px 0 45px;
	}
	> .container {
		display: flex;
		@media (max-width: ${Variables.ScreenXs}) {
			display:block;
			p{
				margin-top:24px;
			}
		}
		> h3,
		> p {
			width: 50%;
			@media (max-width: ${Variables.ScreenXs}) {
				width:100%;
			}
		}
	}
`;
const Carousel = styled(Slider)`
	margin-top: 120px;
	@media (max-width: ${Variables.ScreenMd}) {
		margin-top:36px;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		margin-left:-15px;
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
		margin-left:24px;
	}
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
const SlickControl = styled.div`
	font-size: 16px;
	margin-top: 90px !important;
	line-height: 24px;
	@media (max-width: ${Variables.ScreenMd}) {
		margin-top:50px !important;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		display:flex !important;
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
		border: 0;
		border-right: 2px solid #dad9d7;
		border-top: 2px solid #dad9d7;
		left: auto;
		right: 0;
		top: 3px;
		transform: rotate(45deg);
	}
	&:after {
		left: 1px;
		top: 9px;
	}
`;
const Holdings = styled.section`
	background: #fff;
	position: relative;
	padding-bottom: 113px;
	z-index: 1;
	@media (max-width: ${Variables.ScreenMd}) {
		padding-bottom: 56px;
	}
	.container {
		display: flex;
		@media (max-width: ${Variables.ScreenMd}) {
			display:block;
		}
	}
	a {
		margin-top: 45px;
		@media (max-width: ${Variables.ScreenMd}) {
			margin-top:24px;
		}
	}
`;
const HoldingsContent = styled.div`
	padding-right: 40px;
	width: 50%;
	@media (max-width: ${Variables.ScreenMd}) {
		width:100%;
		padding-right:0;
	}
	p {
		margin-top: 35px;
		@media (max-width: ${Variables.ScreenMd}) {
			margin-top:24px;
		}
	}
`;

//DATA
const ThirdContent_Data = ["Open Banking enabled tech licensing and alternative data.", "Become a leader in collection of transactional source data.", "The UK alt-data market projected to grow 62,000% by 2028."];


const HomePage = ({ data }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [scrollTop, setScrollTop] = useState(0);
	const [pageLoad, setPageLoad] = useState(false);
	const slider = useRef(null);

	useEffect(() => {
		const onScroll = () => {
			const movingArea = document.querySelectorAll(".moving-area");
			setScrollTop(window.pageYOffset);

			function animate(id, itemCount) {
				const height = document.querySelector(`#${id}`).clientHeight,
					offsetTop = document.querySelector(`#${id}`).offsetTop,
					count = itemCount,
					center = height / count / 2,
					start = scrollTop + center > offsetTop,
					animateValue = (scrollTop - offsetTop) / center,
					s2a1 = document.querySelector("#s2_a1"),
					s2a2 = document.querySelector("#s2_a2"),
					s2a3 = document.querySelector("#s2_a3"),
					s3a1 = document.querySelector("#s3_a1"),
					s4a1 = document.querySelector("#s4_a1"),
					s4a2 = document.querySelector("#s4_a2"),
					s4a3 = document.querySelector("#s4_a3"),
					s4a4 = document.querySelector("#s4_a4");
				if (start) {
					switch (id) {
						case "second":
							const opacity = (animateValue + 1).toFixed(2),
								animateTransform = (opacity - 2) * 150,
								s2a3transformY = animateTransform.toFixed(3);
							s2a1.style.opacity = opacity > 1 ? "1" : opacity < 0 ? "0" : opacity;
							s2a2.style.opacity = opacity - 1 > 1 ? "1" : opacity - 1 < 0 ? "0" : opacity - 1;
							s2a3.style.opacity = opacity - 2 > 1 ? "1" : opacity - 2 < 0 ? "0" : opacity - 2;
							s2a3.style.transform = `translateY(${150 - s2a3transformY > 150 ? "150" : 150 - s2a3transformY < 0 ? "0" : 150 - s2a3transformY}px)`;
							break;
						case "third":
							s3a1.style.transform = `scale(${animateValue + 1 < 0.9 ? 1.5 - (animateValue + 1) / 2 : "1"})`;
							break;
						case "fourth":
							const s4a1Scale = animateValue.toFixed(2);
							if (window.innerWidth > 768) s4a1.style.transform = `scale(${s4a1Scale > 0 ? (s4a1Scale < 1 ? s4a1Scale : "1") : "0"})`;
							else s4a1.style.transform = `scale(${s4a1Scale > 0 ? (s4a1Scale < 1 ? s4a1Scale * 3 : "3") : "0"})`;
							s4a2.style.opacity = s4a1Scale - 1 > 1 ? "1" : s4a1Scale - 1 < 0 ? "0" : s4a1Scale - 1;
							if (s4a1Scale > 1) document.querySelector(`#fourth-wr`).classList.add("start");
							else document.querySelector(`#fourth-wr`).classList.remove("start");
							if (s4a1Scale > 2.5) s4a2.classList.add("start");
							else s4a2.classList.remove("start");
							if (s4a1Scale > 3) {
								s4a3.classList.add("start");
								s4a4.classList.add("start");
							} else {
								s4a3.classList.remove("start");
								s4a4.classList.remove("start");
							}
							break;

						default:
							break;
					}
				}
			}

			movingArea.forEach((item) => {
				animate(item.id, parseInt(item.getAttribute("data-child"), 10));
			});
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollTop]);

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
			<BgImage image={easeBackground} className="bg" />
			<First className={pageLoad ? "started" : false}>
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

			<Second className="moving-area" data-child="3" id="second" background={Variables.ColorFantasy}>
				<Second1>
					<SecondOverflow>
						<div className="container">
							<H4 id="s2_a1">Fiinu is a pre-IPO fintech group with an expected deposit-taking banking licence from the Bank of England regulators. </H4>
							<H4 id="s2_a2">Subject to the London Stock Exchange admission approval the group will enter the AIM-market with a ticker ‘BANK’ </H4>
							<H2 id="s2_a3">Pre-IPO fintech with an expected bank licence</H2>
							<NextContent nextContent="third">Next—Services</NextContent>
						</div>
					</SecondOverflow>
				</Second1>
			</Second>

			<Third className="moving-area" data-child="1" id="third" background={Variables.ColorGoldenYellow}>
				<ThirdBgCover>
					<div id="s3_a1"></div>
				</ThirdBgCover>
				<div className="container h100">
					<ThirdContent>
						<H3>R&D firm developing intelligent fintech and alternative data insight solutions.</H3>
						<P>Our technology arm will generate revenue from licencing Open Banking enabled technology and alternative data solutions. </P>
						<List data={ThirdContent_Data} />
						<WarmButton to="/fintech-solutions">Fintech solutions</WarmButton>
					</ThirdContent>
				</div>
			</Third>

			<Fourth className="moving-area" data-child="4" id="fourth" background="#e5e7e9">
				<Fourth1 id="fourth-wr">
					<img id="s4_a1" src={Iphone} alt="" />
					<H2 id="s4_a2" ColorWarmBlue>
						<div className="container">Fiinu 2 Limited</div>
					</H2>
					<H4 id="s4_a3">
						<div className="container">Fiinu 2 Limited is anticipating obtaining a UK deposit-taking banking licence from the Prudential Regulation Authority (PRA) and the Financial Conduct Authority (FCA) in 2021.</div>
					</H4>
					<div id="s4_a4">
						<TunaButton to="/investors">Visit Fiinu Bank</TunaButton>
					</div>
				</Fourth1>
			</Fourth>

			<Leadership>
				<div className="container">
					<H3>Leadership team</H3>
					<P>An independent board of directors with deep strategy, retail banking and UK / international regulatory experience including two former members of the Bank of England and a Financial Services Authority supervisor.</P>
				</div>
				<Carousel ref={slider} {...settings}>
					{data.allMdx.nodes.map((node) => (
						<Slide to={`/about/${node.slug}`} key={node.frontmatter.number}>
							<GatsbyImage image={node.frontmatter.image.childImageSharp.gatsbyImageData} alt={node.frontmatter.title} />
							<h5>{node.frontmatter.title}</h5>
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
						<WarmButton to="/investors">More Info</WarmButton>
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
		allMdx(sort: {fields: frontmatter___number}) {
			nodes {
			  frontmatter {
				number
				title
				position
				image {
				  childImageSharp {
					gatsbyImageData(
					  width: 336
					  height: 351
					  backgroundColor: "#fff"
					  placeholder: BLURRED
					)
				  }
				}
			  }
			  slug
			}
		}
		easeBackground: file(relativePath: {eq: "ease-banner.jpg"}) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
			}
		}
	}
`;
