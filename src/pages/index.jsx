import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import * as Variables from "../components/Variables";

import Logo from "../images/fiinu-logo-white.svg";
import EaseBanner from "../images/ease-banner.jpg";

const Section = styled.section`
	background: ${({ background }) => background};
	background-position: center center;
	background-size: cover;
	position: relative;
	height: 100vh;
	min-height: 700px;
	width: 100%;
`;
const SectionSecond = styled(Section)`
	display: inline-block;
	position: relative;
	height: 300vh;
`;
const SectionSecond1 = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	align-items: center;
	justify-content: center;
	height: 150vh;
	padding-bottom: 50vh;
	margin-bottom: -50vh;
`;
const SectionSecond2 = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	align-items: flex-end;
	color: #fff;
	font-size: 360px;
	line-height: 130px;
	text-align: center;
	height: 100vh;
	h2 {
		width: 3780px;
		display: flex;
		position: absolute;
		left: calc(50% - 1890px);
		right: 0;
		bottom: 110px;
	}
`;

const H2 = styled.h2`
	font-size: 160px;
	line-height: 130px;
	color: ${({ color }) => color};
	&.first-h2 {
		position: absolute;
		bottom: 60px;
		left: 0;
	}
`;

const ParagraphBig = styled.p`
	font-size: 52px;
	line-height: 64px;
	text-align: center;
`;

const NextSection = styled.div`
    align-items: center;
	cursor: pointer;
	display: flex;
	background: ${(props) => (props.white ? "white" : "transparent")};
	bottom: 0;
	height: 75px;
	left: 0;
	position: absolute;
	width: 100%;
`;

const NextSectionButton = styled.span`
	font-size: 24px;
	justify-content: flex-start;
	line-height: 36px;
	svg {
		margin-left: 15px;
	}
`;

const HomePage = () => (
	<Layout logo={Logo}>
		<Seo title="Home" />
		<Section background={`url(${EaseBanner})`}>
			<div className="container h100">
				<H2 className="first-h2" color="#fff">
					Fintech <br />
					with ease
				</H2>
			</div>
			<NextSection white>
				<div className="container">
					<NextSectionButton>
                        See how
						<svg width="26" height="27" viewBox="0 0 26 27" fill="none">
							<path d="M1 1.5L25 25.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M14.7143 25.4999H25V15.2142" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
						</svg>
					</NextSectionButton>
				</div>
			</NextSection>
		</Section>
		<SectionSecond background={Variables.ColorFantasy}>
			<SectionSecond1 className="container">
				<ParagraphBig>Fiinu Holdings Plc is a new innovative London-based fintech banking group with an expected banking licence from the Bank of England regulators. </ParagraphBig>
			</SectionSecond1>
			<SectionSecond2>
				<h2>Fintech with ease</h2>
			</SectionSecond2>
			<NextSection>
				<div className="container">
					<NextSectionButton>
						Next—Services
						<svg width="26" height="27" viewBox="0 0 26 27" fill="none">
							<path d="M1 1.5L25 25.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M14.7143 25.4999H25V15.2142" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
						</svg>
					</NextSectionButton>
				</div>
			</NextSection>
		</SectionSecond>
	</Layout>
);

export default HomePage;
