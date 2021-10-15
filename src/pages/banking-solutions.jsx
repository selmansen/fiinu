import React, { useEffect, useState } from "react";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BankingAnimate1 from "../components/BankingAnimate1";
import BankingAnimate2 from "../components/BankingAnimate2";
import { ScrollTop } from "../components/Function";

import * as Variables from "../components/Variables";

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

const BankingSolutionsPage = () => {
	const [section, setSection] = useState([]);

    const scrollTop = ScrollTop();

	useEffect(() => {
		const allSection = document.querySelectorAll("main > section");
		allSection.forEach((item) => {
			let arr = (arr) => [...arr, item.id];
			setSection(arr);
		});
	}, []);

	return (
		<Layout>
			<Seo title="Banking Solutions" />
			<ScrollToBar>
				{section.map((item, i) => (
					<ScrollToBarButton className={`${scrollTop > document.querySelector(`#${item}`).offsetTop ? "active" : ""}`} key={i} onClick={() => scrollTo(`#${item}`)}></ScrollToBarButton>
				))}
			</ScrollToBar>
			
			<BankingAnimate1 />
			<BankingAnimate2 />

			<section id="third"></section>
		</Layout>
	);
};

export default BankingSolutionsPage;
