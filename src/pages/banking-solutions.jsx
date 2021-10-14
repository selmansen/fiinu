import React, { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import * as Variables from "../components/Variables";
import { H2, H3, H4, H5, P } from "../components/Typography";

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

const First = styled.section`
	background: #fff;
	height: calc(${Variables.SHeight}* 3);
	min-height: calc(750px * 3);
	@media (max-width: ${Variables.ScreenLg}) {
		min-height: calc(650px * 3);
	}
	@media (max-width: ${Variables.ScreenXs}) {
		min-height: calc(568px * 3);
	}
	h2 {
		text-align: center;
		position: absolute;
		padding-top: 90px;
	}
`;
const FirstDisplay = styled.div`
	height: 100vh;
	min-height: 750px;
	position: sticky;
	top: 0;
	@media (max-width: ${Variables.ScreenLg}) {
		min-height: 650px;
	}
	@media (max-width: ${Variables.ScreenXs}) {
		min-height: 568px;
	}
`;
const FirstOverflow = styled.div`
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
const FirstsBg = styled.div`
	background: rgba(253, 243, 239, 0.8);
	backdrop-filter: blur(10px);
	bottom: 0;
	top: 0;
	position: absolute;
	left: 0;
	right: 0;
	transform: translateX(100vh);
	z-index: 1;
	transition: left 0.4s, top 0.4s, bottom 0.4s, right 0.4s;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Second = styled.section`
	height: calc(${Variables.SHeight}* 4);
	min-height: calc(940px * 4);
	@media (max-width: ${Variables.ScreenLg}) {
		min-height: calc(800px * 4);
	}
	@media (max-width: ${Variables.ScreenMd}) {
		min-height: calc(630px * 4);
	}
	@media (max-width: ${Variables.ScreenSm}) {
		min-height: calc(1075px * 4);
	}
	@media (max-width: ${Variables.ScreenXs}) {
		min-height: auto;
		height: calc(${Variables.SHeight}* 4);
	}
`;

const SecondDisplay = styled.div`
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

const SecondOverflow = styled.div`
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
`;

const SecondTopic = styled.div`
	position: absolute;
	text-align: center;
	@media (max-width: ${Variables.ScreenMd}) {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: center;
		width: 100%;
	}
	h3,
	h5 {
		opacity: 0;
	}
	h5{
		margin-top:75px;
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
	@media (max-width: ${Variables.ScreenMd}) {
		height: 100%;
	}
`;

const SecondContent = styled.div`
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
	h5, p {
		opacity: 0;
		transition: 0.7s;
		transform: translate3d(0, 50%, 0);
		&.animate {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}
	p{
		margin-top:24px;
		+ p{
			margin-top:16px;
		}
	}
`;

const BankingSolutionsPage = ({ data }) => {
	const [scrollTop, setScrollTop] = useState(0);
	const [s1animate, setS1animate] = useState(0);
	const [s2animate, setS2animate] = useState(0);
	const [s1transform, setS1transform] = useState(0);
	const [s2transform, setS2transform] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [section, setSection] = useState([]);

	useEffect(() => {
		const allSection = document.querySelectorAll("main > section");
		allSection.forEach((item) => {
			let arr = (arr) => [...arr, item.id];
			setSection(arr);
		});
	}, []);

	useEffect(() => {
		const onScroll = () => {
			setScrollTop(window.pageYOffset);

			function animate(id, itemCount) {
				const height = document.querySelector(`#${id}`).clientHeight,
					offsetTop = document.querySelector(`#${id}`).offsetTop,
					count = itemCount,
					center = height / count / 2,
					start = scrollTop + center > offsetTop,
					animateValue = (scrollTop - offsetTop) / center;
				if (start) {
					switch (id) {
						case "first":
							setS1animate(animateValue.toFixed(2));
							setS1transform(animateValue.toFixed(2) * 50);
							break;

						case "second":
							setS2animate(animateValue.toFixed(2));
							setS2transform(animateValue.toFixed(2) * 50 - 50);
							break;

						default:
							break;
					}
				}
			}

			const movingArea = document.querySelectorAll(".moving-area");
			movingArea.forEach((item) => {
				animate(item.id, parseInt(item.getAttribute("data-child"), 10));
			});
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

	const margotImage = getImage(data.margotImage);

	const s1a1Animate = {
		opacity: s1animate > 2.5 ? "0" : 2.5 - s1animate
	};
	const s1a2Animate = {
		transform: `translateY(${s1transform > 1 && scrollTop > 1 ? (s1transform < 100 ? 100 - s1transform : "0") : "100"}vh)`,
		right: `${s1transform > 125 ? (isMobile ? "20" : "10") : "0"}px`,
		left: `${s1transform > 125 ? (isMobile ? "20" : "10") : "0"}px`,
		top: `${s1transform > 125 ? (isMobile ? "20" : "10") : "0"}px`,
		bottom: `${s1transform > 125 ? (isMobile ? "20" : "10") : "0"}px`
	};
	const s1a3Animate = {
		opacity: s1animate > 3.5 ? "1" : s1animate < 2.5 ? "0" : s1animate - 2.5
	};

	const s2a1Animate = {
		opacity: s2animate > 1 ? "1" : s2animate < 0 ? "0" : s2animate,
		transform: `translateX(${s2transform > 50 ? (s2transform < 150 ? s2transform - 50 : "100") : "0"}vw)`
	};
	const s2a2Animate = {
		opacity: s2animate > 2 ? "1" : s2animate < 1 ? "0" : s2animate - 1,
		transform: `translateX(${s2transform > 50 ? (s2transform < 150 ? s2transform - 50 : "100") : "0"}vw)`
	};
	const s2a3Animate = {
		transform: `translateX(${s2transform > 50 ? (s2transform < 150 ? 150 - s2transform : "0") : "100"}vw)`
	};
	const s2a4Animate = {
		transform: `translateY(${s2transform > 75 ? (s2transform < 175 ? 175 - s2transform : "0") : "100"}vh)`,
		opacity: s2animate > 4.5 ? "1" : s2animate < 2.5 ? "0" : (s2animate - 2.5) / 2
	};

	console.log(s2animate)
	
	return (
		<Layout>
			<Seo title="Banking Solutions" />
			<ScrollToBar>
				{section.map((item, i) => (
					<ScrollToBarButton className={`${scrollTop > document.querySelector(`#${item}`).offsetTop ? "active" : ""}`} key={i} onClick={() => scrollTo(`#${item}`)}></ScrollToBarButton>
				))}
			</ScrollToBar>
			<First id="first" className="moving-area" data-child="3">
				<FirstDisplay>
					<FirstOverflow>
						<div className="container">
							<H2 style={s1a1Animate} color={Variables.ColorTuna}>
								Financing the future fairly with Plugin Overdraft®
							</H2>
						</div>
						<FirstsBg style={s1a2Animate}>
							<div className="container" style={s1a3Animate}>
								<H4>Fiinu 2 Limited is anticipating obtaining a UK deposit-taking banking licence from the Prudential Regulation Authority (PRA) and the Financial Conduct Authority (FCA) in 2021. On successful completion of the banking application process, Fiinu 2 Limited will change its name to Fiinu Bank Limited. </H4>
							</div>
						</FirstsBg>
					</FirstOverflow>
				</FirstDisplay>
			</First>
			<Second id="second" className="moving-area" data-child="4">
				<SecondDisplay>
					<SecondOverflow>
						<div className="container">
							<SecondTopic>
								<H3 color={Variables.ColorTuna} style={s2a1Animate}>
									At one point in their life, everyone <br />
									needs access to credit
								</H3>
								<H5 style={s2a2Animate}>Like Margot...</H5>
							</SecondTopic>

							<SecondContent>
								<div>
									<H5 className={s2animate > 4.2 ? "animate" : false}>She is;</H5>
									<P className={s2animate > 4.35 ? "animate" : false}>A real estate agent.</P>
									<P className={s2animate > 4.45 ? "animate" : false}>Aged 35.</P>
									<P className={s2animate > 4.55 ? "animate" : false}>She’s a working mum with a son, age 4.</P>
									<P className={s2animate > 4.65 ? "animate" : false}>Recently divorced.</P>
									<P className={s2animate > 4.75 ? "animate" : false}>She’s just started paying nursery fees for her son.</P>
									<P className={s2animate > 4.85 ? "animate" : false}>Her son also plays football at the local club and has a range of other hobbies.</P>
									<P className={s2animate > 4.9 ? "animate" : false}>She’s committed to giving her son every chance in life.</P>
									<P className={s2animate > 5.0 ? "animate" : false}>Few times a year she’s maxed out at the end of the month and needs to go into her overdraft.</P>
								</div>
								<div style={s2a4Animate}>
									<GatsbyImage className="personal-image" image={margotImage} alt="Personal Finance Management app with integrated Plugin Overdraf" />
								</div>
							</SecondContent>
						</div>
						<SecondBg style={s2a3Animate} />
					</SecondOverflow>
				</SecondDisplay>
			</Second>
			<section id="third"></section>
		</Layout>
	);
};

export default BankingSolutionsPage;

export const query = graphql`
	query {
		margotImage: file(relativePath: { eq: "margot-img.jpg" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 100)
			}
		}
	}
`;
