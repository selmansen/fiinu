import { graphql, Link } from "gatsby";
import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { P } from "../../components/Typography";
import { ScreenMd, ScreenSm, ColorFantasy, ColorTuna, ColorWarmBlue, ScreenLg, ColorLightGray } from "../../components/Variables";

const Container = styled.section`
	padding-top: 272px;
	position: relative;
	@media (max-width: ${ScreenSm}) {
		padding-top: 122px;
		overflow: hidden;
	}
	.container {
		display: flex;
		position: static;
		flex-wrap: wrap;
	}
	.left {
		width: 460px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 226px;
		@media (max-width: ${ScreenSm}) {
			width: 100%;
			padding-bottom: 0;
		}
	}
	.right {
		width: calc(100% - 460px);
		padding-left: 150px;
		padding-bottom: 226px;
		@media (max-width: ${ScreenMd}) {
			padding-left: 0;
		}
		@media (max-width: ${ScreenSm}) {
			position: relative;
			width: 100%;
			padding: 36px 0px;
			margin-top: 36px;
		}
		p {
			+ p {
				margin-top: 36px;
			}
		}
		&:before {
			content: "";
			right: 0;
			top: 0;
			height: 100%;
			background: ${ColorFantasy};
			width: calc(50% + 288px);
			position: absolute;
			z-index: -1;
			@media (max-width: ${ScreenLg}) {
				width: calc(50% + 201px);
			}
			@media (max-width: ${ScreenMd}) {
				width: calc(50% + 98px);
			}
			@media (max-width: ${ScreenSm}) {
				height: 100%;
				left: -100vw;
				width: 200vw;
				min-width: 700px;
			}
		}
	}
`;

const Picture = styled.div`
	position: sticky;
	top: 50px;
	color: ${ColorTuna};
	max-width: 335px;
	width: 100%;
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
`;

const NextLink = styled.div`
    position:relative;
    z-index:2;
    margin-top:-136px;
    padding-top:100px;
    width:100%;
    border-top:1px solid ${ColorLightGray};
    @media (max-width:${ScreenSm}){
        border-top:0 none;
        margin-top:36px;
        padding-top:0;
        padding-bottom:36px;
`;

const To = styled(Link)`
	font-size: 24px;
	line-height: 36px;
	color: ${ColorTuna};
	transition: 0.4s;
	svg {
		margin-left: 14px;
	}
	&:hover {
		color: ${ColorWarmBlue};
	}
`;

const AboutUserPage = ({ data }) => {
	const { title, image, position, number } = data.mdx.frontmatter;
	return (
		<Layout>
			<Seo title={title} />
			<Container>
				<div className="container">
					<div className="left">
						<Picture>
							<GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={title} />
							<P>
								<b>{title}</b>
							</P>
							<h6>{position}</h6>
						</Picture>
					</div>
					<div className="right">
						<MDXRenderer>{data.mdx.body}</MDXRenderer>
					</div>
					<NextLink>
						<To to={`/about/${data.allMdx.nodes[number !== data.allMdx.nodes.length ? number : 0].slug}`}>
							Next—{data.allMdx.nodes[number !== data.allMdx.nodes.length ? number : 0].frontmatter.title}
							<svg width="26" height="27" viewBox="0 0 26 27" fill="none">
								<path d="M1 1.5L25 25.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
								<path d="M14.7143 25.4999H25V15.2142" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
							</svg>
						</To>
					</NextLink>
				</div>
			</Container>
		</Layout>
	);
};

export default AboutUserPage;

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			id
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
			body
		}
		allMdx(sort: { fields: frontmatter___number }) {
			nodes {
				frontmatter {
					title
					number
				}
				slug
			}
		}
	}
`;
