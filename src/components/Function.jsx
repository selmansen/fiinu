import { useEffect, useState } from "react";

export const Animate = (id) => {
	const [scrollTop, setScrollTop] = useState(0);
	const [animateRatio, setAnimateRatio] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			setScrollTop(window.pageYOffset);
			const element = document.querySelector(`#${id}`),
				height = element.clientHeight,
				offsetTop = element.offsetTop,
				count = parseInt(element.getAttribute("data-child"), 10),
				center = height / count / 2,
				start = scrollTop + center > offsetTop,
				animateValue = (scrollTop - offsetTop) / center;

			if (start) {
				setAnimateRatio(animateValue.toFixed(2));
			}
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollTop, id]);

	return animateRatio;
};

export const IsMobile = () => {
	const [mobile, setMobile] = useState(false);

	useEffect(() => {
		function windowResize() {
			setMobile(window.innerWidth > 767);
		}
		windowResize();
		window.addEventListener("resize", windowResize);
		return () => window.removeEventListener("resize", windowResize);
	}, [mobile]);

	return mobile;
};

export const IsTablet = () => {
	const [tablet, setTablet] = useState(false);

	useEffect(() => {
		function windowResize() {
			setTablet(window.innerWidth > 1023);
		}
		windowResize();
		window.addEventListener("resize", windowResize);
		return () => window.removeEventListener("resize", windowResize);
	}, [tablet]);

	return tablet;
};

export const ScrollTop = () => {
	const [scrollTo, setScrollTo] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			setScrollTo(window.pageYOffset);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollTo]);

	return scrollTo;
};
