import faviconWhite from "./src/images/favicon-white.svg";

const updateFavicon = isDark => {
    const faviconEL = document.querySelectorAll('link[rel="icon"]')[1];
    faviconEL.href = isDark ? faviconWhite : '/icons/icon-48x48.png';
};

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addListener(e => {
    updateFavicon(e.matches);
  });
  if (darkModeMediaQuery.matches) updateFavicon(true);