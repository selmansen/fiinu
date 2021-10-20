import * as React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import { ColorWarmBlue, ScreenXs } from "./Variables";

const WarmButton = styled(Link)`
	border-radius: 100px;
	border: 2px solid ${ColorWarmBlue};
	color: ${ColorWarmBlue};
	display: inline-block;
	font-size: 24px;
	line-height: 28px;
	padding: 12px 20px;
	text-align: center;
	transition: 0.4s;
	@media (max-width: ${ScreenXs}) {
		padding: 6px 20px;
		font-size: 16px;
		line-height: 24px;
		width:100%;
	}
	&:hover {
		background: ${ColorWarmBlue};
		color: #fff;
	}
`;

const List = ({ toLink, children }) => <WarmButton to={toLink}>{children}</WarmButton>;

export default List;
