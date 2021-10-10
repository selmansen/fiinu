import * as React from "react";
import styled from "styled-components";

import IconCheck from "../images/icon-check.svg";
import { ScreenMd, ScreenSm } from "./Variables";

const Li = styled.li`
	font-size: 24px;
	padding-left: 50px;
	position: relative;
	line-height: 36px;
	@media (max-width: ${ScreenMd}) {
		font-size: 21px;
		line-height: 32px;
		padding-left: 30px;
	}
	@media (max-width: ${ScreenSm}) {
		font-size: 18px;
		line-height: 28px;
	}
	+ li {
		margin-top: 16px;
		@media (max-width: ${ScreenMd}) {
			margin-top: 12px;
		}
	}
	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		background: url(${IconCheck}) no-repeat center center;
		background-size: 33px;
		width: 33px;
		height: 33px;
		@media (max-width: ${ScreenMd}) {
			background-size: 22px;
			width: 22px;
			height: 22px;
			top: 5px;
		}
	}
`;

const List = ({ data }) => (
	<ul>
		{data.map((li, i) => (
			<Li key={i}>{li}</Li>
		))}
	</ul>
);

export default List;
