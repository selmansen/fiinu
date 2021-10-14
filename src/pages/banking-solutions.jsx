import React, { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import styled from "styled-components";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import * as Variables from "../components/Variables";
import { H2, H3, H4, H5, P } from "../components/Typography";


const BankingSolutionsPage = ({ data }) => {
	const [scrollTop, setScrollTop] = useState(0);
	const [animate, setAnimate] = useState(0);
	const [transform, setTransform] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrollTop(window.pageYOffset);

			const height = document.querySelector(`#first`).clientHeight,
				offsetTop = document.querySelector(`#first`).offsetTop,
				count = 3,
				center = height / count / 2,
				start = scrollTop + center > offsetTop,
				animateValue = (scrollTop - offsetTop) / center;

			if (start) {
				setAnimate(animateValue.toFixed(2));
				setTransform(animateValue.toFixed(2) * 50 - 50);
			}
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

	// const devBackground = getImage(data.devBackground);

	// const s2a1Animate = {
	// 	opacity: animate > 1 ? "1" : animate < 0 ? "0" : animate,
	// 	transform: `translateX(${transform > 1 ? (transform < 100 ? transform : "100") : "0"}vw)`,
	// 	filter: `blur(${animate > 2 ? "10" : animate < 1 ? "0" : animate * 2}px)`
	// };

	return (
		<Layout>
			<Seo title="Banking Solutions" />
			
		</Layout>
	);
};

export default BankingSolutionsPage;