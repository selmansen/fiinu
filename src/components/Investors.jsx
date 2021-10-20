import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { ColorTuna, ScreenMd, ScreenXs } from "./Variables";
import { H3, P } from "./Typography";

import IconLink from "../images/icon-target-link.svg";

const InvestorsStyle = styled.section`
	background: ${ColorTuna};
	color: #fff;
	position: relative;
	padding: 120px 0px;
	z-index: 1;
	@media (max-width: ${ScreenMd}) {
		padding: 36px 0px;
	}
	p {
		margin-top: 16px;
	}
`;
const Ul = styled.ul`
	margin-top: 40px;
`;
const Links = styled.a`
	border-bottom: 1px solid #fff;
	font-size: 24px;
	line-height: 36px;
	position: relative;
	width: 100%;
	color: #fff;
	display: block;
	padding: 24px 50px 24px 0px;
	transition: 0.4s;
	@media (max-width: ${ScreenXs}) {
		font-size: 18px;
		line-height: 28px;
	}
	&:hover {
		color: #cbf4f0;
	}
	&:after {
		content: "";
		background: url(${IconLink}) no-repeat;
		width: 32px;
		height: 28px;
		position: absolute;
		right: 0;
		top: 27px;
	}
`;
const WhiteButton = styled(Link)`
	border-radius: 100px;
	border: 2px solid #fff;
	color: #fff;
	display: inline-block;
	font-size: 24px;
	line-height: 28px;
	padding: 12px 20px;
	margin-top: 40px;
	margin-bottom: 48px;
	text-align: center;
	transition: 0.4s;
	@media (max-width:${ScreenXs}){
		width:100%;
		font-size:16px;
		line-height:24px;
		padding: 6px 20px;
	}
	&:hover {
		background: #fff;
		color: ${ColorTuna};
	}
`;
const H6 = styled.h6`
	font-size: 16px;
	line-height: 24px;
	margin-top: 64px;
	@media (max-width: ${ScreenMd}) {
		margin-top: 36px;
	}
`;

const List = [
	{
		title: "Directors' biographies",
		link: "/"
	},
	{
		title: "Board committees",
		link: "/"
	},
	{
		title: "Constitutional documents",
		link: "/"
	},
	{
		title: "Authorised and Issued Share Capital",
		link: "/"
	},
	{
		title: "Significant Share Holdings",
		link: "/"
	},
	{
		title: "Annual and interim reports",
		link: "/"
	},
	{
		title: "Announcements, including RNS notice",
		link: "/"
	},
	{
		title: "Key advisors",
		link: "/"
	}
];

const Investors = () => (
	<InvestorsStyle>
		<div className="container">
			<H3>Investors</H3>
			<P>
				Upon successful admission, Fiinu Holdings Limited shares (Ticker: BANK) will <br />
				be quoted and traded on the AIM market of the London Stock Exchange.
			</P>
			<Ul>
				{List.map((item, index) => (
					<li key={index}>
						<Links href={item.link} rel="noreferrer" target="_blank">
							{item.title}
						</Links>
					</li>
				))}
			</Ul>
			<WhiteButton to="/investors">More Info</WhiteButton>
			<P>UK Corporate Governance Code - As an AIM-listed Company, Fiinu Group will comply with the QCA Corporate Governance Code ("the code"). Fiinu's Corporate Governance arrangements are fully disclosed in our Governance section. UK City Code on Takeovers and Mergers –Fiinu Group will be subject to the UK City Code on Takeovers and Mergers.</P>
			<H6>This page was last updated on 27 April 2021</H6>
		</div>
	</InvestorsStyle>
);

export default Investors;
