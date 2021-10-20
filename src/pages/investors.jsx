import * as React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Information from "../components/Information";
import Investors from "../components/Investors";
import { H3, P } from "../components/Typography";
import { ScreenMd, ColorTuna, ScreenXs } from "../components/Variables";
import { IsMobile } from "../components/Function";

import TableImg from "../images/investors-table.svg";
import TableImgMobile from "../images/investors-table-mobile.svg";

const Holdings = styled.section`
	background: #fff;
	position: relative;
	margin-top: 213px;
	padding-bottom: 155px;
	z-index: 1;
	@media (max-width: ${ScreenMd}) {
        margin-top:122px;
		padding: 45px 0 56px;
	}
    @media (max-width: ${ScreenXs}) {
		padding: 45px 0 0;
	}
	.container {
		display: flex;
        @media (max-width: ${ScreenMd}) {
			display: block;
		}
		@media (max-width: ${ScreenXs}) {
			padding:0;
		}
		> div {
			width: 50%;
			@media (max-width: ${ScreenMd}) {
				width: 100%;
			}
			@media (min-width: calc(${ScreenMd} + 1px)) {
			&:first-child{
				height:100%;
				position:sticky;
				top:60px;
			}
		}
	}
	a {
		margin-top: 45px;
		@media (max-width: ${ScreenMd}) {
			margin-top: 24px;
		}
	}
`;
const HoldingsContent = styled.div`
	padding-right: 40px;
	@media (max-width: ${ScreenMd}) {
		padding-right: 0;
	}
    @media (max-width: ${ScreenXs}) {
        padding:0 10px;
    }
	p {
		margin-top: 35px;
		@media (max-width: ${ScreenMd}) {
			margin-top: 24px;
		}
	}
`;

const Li = styled.li`
	font-size: 24px;
	line-height: 36px;
	position: relative;
	padding-left: 20px;
	margin-top: 35px;
	&:before {
		content: "";
		background: ${ColorTuna};
		border-radius: 8px;
		left: 0;
		top: 14px;
		height: 8px;
		width: 8px;
		position: absolute;
	}
`;
const Table = styled.img`
	max-width: 100%;
	height: auto;
	width: 100%;
	margin-top: 36px;
    @media (max-width: ${ScreenXs}) {
		margin-top:0;
	}
`;

const InvestorsPage = () => {
	const isMobile = IsMobile();
	return (
		<Layout>
			<Seo title="Investors" />
			<Holdings>
				<div className="container">
					<HoldingsContent>
						<H3>Fiinu Holdings Plc</H3>
						<P>Fiinu Holdings Plc is a group holding company which will operate in the field of fintech, big data and digital banking. Subject to the London Stock Exchange admission approval, the group will enter the AIM with a ticker ‘BANK’.</P>
						<P>The group has two subsidiaries; </P>
						<ul>
							<Li>Fiinu Services Ltd developing intellectual property and fintech modules, which will include a range of innovative new products including big data insights, and;</Li>
							<Li>Fiinu 2 Ltd is which is expected to receive a deposit-taking banking licence from the Bank of England regulators and soft-launch in 2022. The firm will on successful completion of the authorisation process be renamed as Fiinu Bank Ltd.</Li>
						</ul>
					</HoldingsContent>
					<div>
						<Information theme="white" />
						{isMobile ? <Table src={TableImg} alt="Fiinu Plc" width="727" height="641" /> : <Table src={TableImgMobile} alt="Fiinu Plc" width="320" height="903" />}
					</div>
				</div>
			</Holdings>
			<Investors />
		</Layout>
	);
};

export default InvestorsPage;
