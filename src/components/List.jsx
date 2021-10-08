import * as React from "react";
import styled from "styled-components";

import IconCheck from "../images/icon-check.svg";

const Li = styled.li`
	font-size: 24px;
	padding-left: 50px;
	position: relative;
	line-height: 36px;
	+ li {
		margin-top: 16px;
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
	}
`;

const List = ({ data }) => {
	return (
		<ul>
			{data.map((li, i) => (
				<Li key={i}>{li}</Li>
			))}
		</ul>
	);
};

export default List;
