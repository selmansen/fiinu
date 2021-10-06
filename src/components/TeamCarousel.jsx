import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { ColorTuna, ColorWarmBlue } from './helper/Variables';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import Content from "../api/team.json";

const Carousel = styled(Slider)`
  .slick-track{
    display:flex;
  }
  .slick-slide{
	  border-radius:32px;
	  color:${ColorTuna};
	  transition:background .4s, color .4s;
  }
  .slick-active{
	  background:${ColorWarmBlue};
	  color:#fff;
  }
`;

const Slide = styled.div`
	width: 280px !important;
	height:490px;
	padding: 24px 27px;
	h5{
		font-size: 24px;
		font-weight:700;
		letter-spacing: -0.02em;
		line-height: 29px;
		margin-top:24px;
	}
	h6{
		font-size: 18px;
		line-height: 28px;
		margin-top:2px;
	}
	p{
		font-size: 16px;
		line-height: 24px;
		margin-top:8px;
	}
`;

const TeamCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const settings ={
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
			setCurrentSlide(index)
		}
	};
	
	const data = useStaticQuery(graphql`
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
	`);
	return (
		<>
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
			<div>{currentSlide + 1} / {data.allFile.edges.length}</div>
		</>
	);
};

export default TeamCarousel;
