import * as React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

import GlobalStyle from "../theme/Layout";

const Layout = ({ logo, children }) => (
	<>
		<GlobalStyle />
		<Header logo={logo} />
		<main>{children}</main>
		<Footer />
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
