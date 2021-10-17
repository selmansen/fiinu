import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { ScreenMd, ScreenSm, ColorFantasy, ColorLightGray, ColorTuna, ColorWarmBlue, ScreenLg } from "../../components/Variables";
import { H3, P } from "../../components/Typography";

const Content = styled.section`
	overflow: hidden;
	padding-top: 76px;
	@media (max-width: ${ScreenSm}) {
		padding-top: 36px;
	}
	.container {
		position: static;
		@media (min-width: calc(${ScreenSm} + 1px)) {
			display: flex;
		}
	}
	.right,
	.left {
		@media (min-width: calc(${ScreenSm} + 1px)) {
			width: 50%;
		}
	}
	.left {
		padding-right: 150px;
		@media (max-width: ${ScreenSm}) {
			padding-right:0;
		}
	}
	.right {
		@media (max-width: ${ScreenSm}) {
			margin-top: 24px;
		}
	}
	p {
		margin-top: 24px;
	}
`;

const ContentFirst = styled(Content)`
	padding-top: 338px;
    padding-bottom:100px;
	@media (max-width: ${ScreenSm}) {
		padding-top: 122px;
        padding-bottom:0;
	}
	position: relative;
	.right {
		&:before {
			background: ${ColorFantasy};
			content: "";
			height: calc(100% + 86px);
			position: absolute;
			right: 0;
			top: 0;
			width: calc(50% + 95px);
			z-index: -1;
		}
		@media (max-width: ${ScreenSm}) {
			margin-top: 13px;
			padding: 11px 0px 36px;
			position: relative;
			p:first-child {
				margin-top: 0;
			}
			&:before {
				left: -100vw;
				width: 200vw;
				height: 100%;
			}
		}
	}
`;

const Members = styled.section`
	overflow: hidden;
	.container {
		padding-bottom: 112px;
		@media (max-width: ${ScreenSm}) {
			padding-bottom: 36px;
		}
		&:before,
		&:after {
			border-top: 1px solid ${ColorLightGray};
			content: "";
			left: 15px;
			position: absolute;
			right: 15px;
			top: 0;
			@media (max-width: ${ScreenSm}) {
				left: 10px;
				right: 10px;
			}
		}
		&:after {
			top: auto;
			bottom: 0;
		}
		> div {
			display: flex;
			flex-wrap: wrap;
			margin-top: 120px;
			width: calc(100% + 50px);
			@media (max-width: ${ScreenSm}) {
				width: calc(100% + 20px);
				margin-top: 36px;
			}
		}
	}
`;

const MembersImage = styled(Link)`
	color: ${ColorTuna};
	width: 336px;
	margin-top: 120px;
	margin-right: 50px;
	@media (max-width: ${ScreenLg}) {
		width: 291px;
	}
	@media (max-width: ${ScreenMd}) {
		width: 294px;
	}
	@media (max-width: ${ScreenSm}) {
		margin-right: 20px;
		margin-top: 36px;
		width: 228px;
	}
	@media (max-width: ${ScreenSm}) {
		margin-top: 36px;
		width: calc(50% - 20px);
	}
	.gatsby-image-wrapper {
		border-radius: 16px;
		width: 100%;
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
		filter: hue-rotate(0deg);
		transition: 0.4s;
	}
	&:hover {
		img {
			filter: hue-rotate(25deg);
		}
		p {
			color: ${ColorWarmBlue};
		}
	}
`;

const About = ({ data }) => {
	return (
		<Layout>
			<Seo title="About" />
			<ContentFirst>
				<div className="container">
					<div className="left">
						<H3>We’ve done this before</H3>
					</div>
					<div className="right">
						<P>
							<b>The EMT is equity incentivised and empirically experienced with a good skills matrix. </b>
						</P>
						<P>An exceptional, equity-incentivised executive management team with experience in successfully building digital banks with focus on overdraft and credit cards lending, utilising behavioural scoring, AI, machine learning and automation technologies.</P>
					</div>
				</div>
			</ContentFirst>
			<Content>
				<div className="container">
					<div className="left">
						<H3>And we’re supported by a world-class board</H3>
					</div>
					<div className="right">
						<P>
							<b>Our independent Board is led by Chairman David Hopton, a former Banco Santander executive who was with the BoE nearly 20 years. </b>
						</P>
						<P>An independent board of directors with deep strategy, retail banking and UK / international regulatory experience including two former members of the Bank of England and a Financial Services Authority supervisor.</P>
					</div>
				</div>
			</Content>

			<Members>
				<div className="container">
					<div>
						{data.allMdx.nodes.map((node) => (
							<MembersImage to={`/about/${node.slug}`} key={node.frontmatter.number}>
								<GatsbyImage image={node.frontmatter.image.childImageSharp.gatsbyImageData} alt={node.frontmatter.title} />
								<P>
									<b>{node.frontmatter.title}</b>
								</P>
								<h6>{node.frontmatter.position}</h6>
							</MembersImage>
						))}
					</div>
				</div>
			</Members>
		</Layout>
	);
};

export default About;

export const query = graphql`
	query {
		allMdx(sort: { fields: frontmatter___number }) {
			nodes {
				frontmatter {
					title
					position
					number
					image {
						childImageSharp {
							gatsbyImageData(width: 336, height: 351, backgroundColor: "#fff", placeholder: BLURRED, quality: 100)
						}
					}
				}
				slug
			}
		}
	}
`;
