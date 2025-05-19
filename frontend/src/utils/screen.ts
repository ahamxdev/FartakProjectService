export const isInViewport = (element: HTMLElement) => {
	const rect = element.getBoundingClientRect();
	return (
		rect.top < window.innerHeight * 0.85 &&
		rect.bottom > window.innerHeight - window.innerHeight * 0.75 &&
		rect.left < window.innerWidth * 0.85 &&
		rect.right > window.innerWidth - window.innerWidth * 0.75
	);
};
